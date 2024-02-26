import React, { useContext } from "react";
import { BlogContext } from "../../context/blogContext";
import FeaturedBlogCard from "../../components/featuredBlogCard/featuredBlogCard";
import BlogCard from "../../components/blogCard/blogCard";

import "./blog.css";

const Blog = () => {
  const { featuredPosts, agedPosts } = useContext(BlogContext);
  // console.log("featured, old : ", featuredPosts, agedPosts)
  // Mapping Blog Posts
  const featuredBlogPosts = featuredPosts.map((post) => (
    <FeaturedBlogCard
      title={post.title}
      description={post.description}
      body={post.body}
      id={post.id}
      key={post.id}
      image={post.image}
      publishedAt={post.publishedAt}
      createdAt={post.createdAt}
    />
  ));

  const regularCards = agedPosts.map((post) => (
    <BlogCard
      title={post.title}
      description={post.description}
      body={post.body}
      id={post.id}
      key={post.id}
      image={post.image}
      publishedAt={post.publishedAt}
      createdAt={post.createdAt}
    />
  ));

  return (
    <div className="blogpage">
      <div className="newPosts">{featuredBlogPosts}</div>
      <div className="agedPosts">{regularCards}</div>
    </div>
  );
};

export default Blog;
