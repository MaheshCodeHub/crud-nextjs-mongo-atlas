import EditUser from '@/compoenents/EditUser'
import React from 'react'

const getTopicById= async (id)=>{
  try {
      const res= await fetch(`/api/user/${id}`,{
          cache: "no-cache"
      })
      if(!res.ok){
          throw new Error("Failed to fetch topic");
      }
      return res.json()

  } catch (error) {
      console.log(error);
  }
}

export default  async function editUser({params}) {
 
   
      const {id}=params
      const {topic}= await getTopicById(id)
      const {email,password} = topic
      console.log(email);
  
     return  <EditUser id={id} email={email} password={password}/>
   
  
}


