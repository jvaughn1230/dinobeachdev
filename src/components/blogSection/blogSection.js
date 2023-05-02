import React, { useEffect, useState } from "react";
import axios from "axios";
import waves from "../../images/waves.svg";
import "./blogSection.css";
import BlogCard from "../blogCard/blogCard";

const BlogSection = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get(
        "http://localhost:1337/api/posts?sort=publishedAt:desc&pagination[limit]=3"
      )
      .then(({ data }) => setPosts(data.data))
      .catch((error) => console.log(error));
  }, []);

  console.log(posts);

  const blogPosts = posts.map((post) => (
    <BlogCard
      title={post.attributes.title}
      description={post.attributes.description}
      key={post.id}
    />
  ));

  return (
    <div className="blogsection">
      <h2>Blog</h2>
      <img src={waves} alt="waves" />
      <div className="blogsection__posts">{blogPosts}</div>
    </div>
  );
};

export default BlogSection;
