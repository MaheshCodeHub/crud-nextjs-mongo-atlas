import connectMongodb from "@/libs/mongodb"
import Topic from "@/model/user"
import { NextResponse } from "next/server"



export async function POST(request) {
    const { email, password } = await request.json()
    await connectMongodb()
    await Topic.create({ email, password })
    return NextResponse.json({ message: "Topic Created" }, { status: 200 })
}

export async function GET() {
    await connectMongodb()
    const Topics = await Topic.find()
    return NextResponse.json({ Topics })
}

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id")
    await connectMongodb()
    await Topic.findByIdAndDelete(id)
    return NextResponse.json({ message: "Deleted user" }, { status: 200 })
}
