import React, { useEffect, useState } from "react";
import axios from "axios";

import FeaturedBlogCard from "../../components/featuredBlogCard/featuredBlogCard";
import BlogCard from "../../components/blogCard/blogCard";

import "./blog.css";

// image.data.attributes.name = jpeg file

const Blog = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get(
        "http://localhost:1337/api/posts?sort=publishedAt:desc&pagination[limit]=8&populate=*"
      )
      .then(({ data }) => setPosts(data.data))
      .catch((error) => console.log(error));
  }, []);

  // Slicing Blog Posts
  const featuredPosts = posts.slice(0, 2);
  const olderPosts = posts.slice(2);

  console.log(featuredPosts);

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

  const regularCards = olderPosts.map((post) => (
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
