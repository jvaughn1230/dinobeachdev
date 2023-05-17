import React, { useContext } from "react";

import { BlogContext } from "../../context/blogContext";

import FeaturedBlogCard from "../../components/featuredBlogCard/featuredBlogCard";
import BlogCard from "../../components/blogCard/blogCard";

import "./blog.css";

const Blog = () => {
  const { featuredPosts, agedPosts } = useContext(BlogContext);

  // Mapping Blog Posts
  const featuredBlogPosts = featuredPosts.map((post) => (
    <FeaturedBlogCard
      title={post.attributes.title}
      description={post.attributes.description}
      body={post.attributes.body}
      id={post.id}
      key={post.id}
      img={post.attributes.image?.data?.attributes?.url}
    />
  ));

  const regularCards = agedPosts.map((post) => (
    <BlogCard
      title={post.attributes.title}
      description={post.attributes.description}
      body={post.attributes.body}
      id={post.id}
      key={post.id}
      img={post.attributes.image?.data?.attributes?.url}
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
