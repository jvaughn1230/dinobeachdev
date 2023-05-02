import React, { useEffect, useState } from "react";
import axios from "axios";

import FeaturedBlogCard from "../../components/featuredBlogCard/featuredBlogCard";
import BlogCard from "../../components/blogCard/blogCard";

import "./blog.css";

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

  // Mapping Blog Posts
  const featuredBlogPosts = featuredPosts.map((post) => (
    <FeaturedBlogCard
      title={post.attributes.title}
      description={post.attributes.description}
      image={post.attributes.image}
      key={post.id}
    />
  ));

  const regularCards = olderPosts.map((post) => (
    <BlogCard
      title={post.attributes.title}
      description={post.attributes.description}
      key={post.id}
    />
  ));

  return (
    <div className="featuredBlogCard__container">
      <div className="newPosts">{featuredBlogPosts}</div>
      <div className="agedPosts">{regularCards}</div>
    </div>
  );
};

export default Blog;
