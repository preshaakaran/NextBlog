import mongoose from "mongoose";

//database
//model
//api routes ->add,fetch/get,update,delete

const BlogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
});

const Blog = mongoose.models.Blog || mongoose.model("Blog", BlogSchema);

export default Blog;
