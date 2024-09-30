import connectToDB from "@/database";
import Blog from "@/models/blog";
import { NextResponse } from "next/server";

export async function DELETE(req) {
    try {
        await connectToDB();
        const {searchParams} = new URL(req.url);
        const getCurrentBlogID = searchParams.get("id");

        if(!getCurrentBlogID){
            return NextResponse.json({
                success: false,
                message: "Invalid Blog ID",
            },{
                status: 400,
            });
        }

        const deleteCurrentBlog = await Blog.findByIdAndDelete(getCurrentBlogID);
        if(deleteCurrentBlog){
            return NextResponse.json({
                success: true,
                message: "Blog deleted successfully",
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