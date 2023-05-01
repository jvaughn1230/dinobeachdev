import React from "react";
import "./blogCard.css";

const BlogCard = (post) => {
  return (
    <div className="blogcard gradient-bg ">
      <div className="background">
        <div className="blogcard__content">
          <h3>{post.title}</h3>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
