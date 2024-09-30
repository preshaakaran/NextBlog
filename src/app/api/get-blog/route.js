import connectToDB from "@/database";
import Blog from "@/models/blog";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectToDB();
    const extraxtAllBlogs = await Blog.find({});

    if (extraxtAllBlogs) {
      return NextResponse.json({
        success: true,
        data : extraxtAllBlogs
      });
    }else{
        return NextResponse.json({
            success: false,
            message: "Something went wrong ! Please try again",
        });
    }
   
    
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: "Something went wrong ! Please try again",
    });
    
  }
}