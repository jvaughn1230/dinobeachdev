import React, { useContext } from "react";
import waves from "../../images/ico-wav-var.svg";
import "./blogSection.css";
import BlogCard from "../blogCard/blogCard";
import { BlogContext } from "../../context/blogContext";

const BlogSection = () => {
  const { homePosts } = useContext(BlogContext);

  const blogPosts = homePosts.map((post) => (
    <div key={post.id} className="homeblogcard">
      <BlogCard
        title={post.title}
        description={post.description}
        image={post.image}
        id={post.id}
        key={post.id}
        body={post.body}
      />
    </div>
  ));

  return (
    <div className="blogsection">
      <h2 className="services-text">Blog</h2>
      <img src={waves} alt="waves" />
      <div className="blogsection__posts">{blogPosts}</div>
    </div>
  );
};

export default BlogSection;
