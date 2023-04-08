import React from "react";
import "./blogCard.css";

const BlogCard = () => {
  return (
    <div className="blogcard gradient-bg ">
      <div className="background">
        <div className="blogcard__content">
          <h3>Blog Title</h3>
          <p>Blog Subtitle</p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
