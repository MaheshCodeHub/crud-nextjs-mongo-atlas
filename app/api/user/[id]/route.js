import connectMongodb from "@/libs/mongodb"
import Topic from "@/model/user"
import { NextResponse } from "next/server"

export async function PUT(request,{params}){
   const {id}=params
   const {newemail:email,newpassword:password}= await request.json()
   await connectMongodb()
   await Topic.findByIdAndUpdate(id,{email,password})
   return NextResponse.json({message: "topic updated"},{state:200})
}


export async function GET(request,{params}){
   const {id}=params 
   await connectMongodb()
   const topic =await Topic.findOne({_id:id})
   return NextResponse.json({topic},{status:200})
}