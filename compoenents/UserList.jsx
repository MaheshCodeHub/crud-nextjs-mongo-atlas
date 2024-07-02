"use client"
import Link from "next/link";
import React, { useState, useEffect } from "react";

function UserList() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/user');
        console.log('Response:', response);
        if (response.ok) {
          const data = await response.json();
          console.log('User Data:', data);
          setUserData(data.Topics); // Assuming `Topics` contains the user data array
        } else {
          console.error("Failed to fetch user data:", response.statusText);
        }
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      }
    };
  
    fetchUserData();
  }, []);
  
  const deleteUser = async (userId) => {
  alert(userId); // Just for testing
  try {
    const response = await fetch(`http://localhost:3000/api/user?id=${userId}`, {
      method: 'DELETE',
    });
    console.log('Response:', response); // Log the response
    if (response.ok) {
      // Remove the deleted user from the userData state
      setUserData(userData.filter(user => user._id !== userId));
    } else {
      console.error("Failed to delete user:", response.statusText);
    }
  } catch (error) {
    console.error("Failed to delete user:", error);
  }
};

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Password
            </th>          
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(userData) && userData.map((user) => (
            <tr key={user._id} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium whitespace-nowrap dark:text-white"
              >
                {user.email}
              </th>
              <td className="px-6 py-4">{user.password}</td>             
              <td className="px-6 py-4">
                <Link
                 href={`/editUser/${user._id}`}
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline ml-3"
                >
                  Edit
                </Link>
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  onClick={(e) => { e.preventDefault(); deleteUser(user._id); }}
                >
                  Delete
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
