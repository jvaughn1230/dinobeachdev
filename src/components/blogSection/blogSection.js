import React, { useContext } from "react";
import waves from "../../images/waves.svg";
import "./blogSection.css";
import BlogCard from "../blogCard/blogCard";
import { BlogContext } from "../../context/blogContext";

const BlogSection = () => {
  const { homePosts } = useContext(BlogContext);

  const blogPosts = homePosts.map((post) => (
    <div key={post.id} className="homeblogcard">
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
