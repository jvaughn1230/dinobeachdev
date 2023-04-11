import React from "react";

import FeaturedBlogCard from "../../components/featuredBlogCard/featuredBlogCard";
import BlogCard from "../../components/blogCard/blogCard";

import "./blog.css";

const Blog = () => {
  return (
    <div className="featuredBlogCard__container">
      <div className="newPosts">
        <FeaturedBlogCard />
        <FeaturedBlogCard />
      </div>
      <div className="agedPosts">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
};

export default Blog;
