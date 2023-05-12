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
        "http://localhost:1337/api/posts?sort=publishedAt:desc&pagination[limit]=3&populate=*"
      )
      .then(({ data }) => setPosts(data.data))
      .catch((error) => console.log(error));
  }, []);

  const blogPosts = posts.map((post) => (
    <div className="homeblogcard">
      <BlogCard
        title={post.attributes.title}
        description={post.attributes.description}
        img={post.attributes.image?.data?.attributes?.url}
        key={post.id}
      />
    </div>
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
