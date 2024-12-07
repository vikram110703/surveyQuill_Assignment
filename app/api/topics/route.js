import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const { newTitle: title, newDescription: description } = await request.json();
  await Topic.findByIdAndUpdate(id, { title, description });
  return NextResponse.json({ message: "Topic updated" }, { status: 200 });
}

export async function POST(req) {
  try {
    const { title, description } = await req.json();
    const topic = new Topic({ title, description });
    await topic.save();
    return new Response(JSON.stringify({ message: 'Topic saved successfully!' }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}

export async function GET(request) {
  // const { id } = params;
  const topics = await Topic.find();
  return NextResponse.json({ topics }, { status: 200 });
}
export async function DELETE(request, { params }) {
  const { id } = req.query;
  console.log("id at backend",id);
  // await connectMongoDB();
  const topic = await Topic.deleteOne({ _id: id });
  return NextResponse.json({ message: "deleted topc sucessfully" }, { status: 200 });
}
