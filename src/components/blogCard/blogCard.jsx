import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import "./blogCard.css";

const BlogCard = (post) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="blogcard gradient-bg ">
      <div
        className="background"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="blogcard__content">
          <h3 className={isHovered ? "blogcard__title" : "gradient-text"}>
            {post.title}
          </h3>
          <p className={isHovered ? "show blogcard__description" : "hide"}>
            {post.description}
          </p>
          <FaArrowRight
            className={isHovered ? "show blogcard__arrow" : "hide"}
            size={60}
          />
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
