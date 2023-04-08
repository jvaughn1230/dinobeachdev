import React from "react";
import waves from "../../images/waves.svg";
import "./blogSection.css";
import BlogCard from "../blogCard/blogCard";

const BlogSection = () => {
  return (
    <div className="blogsection">
      <h2>Blog</h2>
      <img src={waves} alt="waves" />
      <div className="blogsection__posts">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
};

export default BlogSection;
