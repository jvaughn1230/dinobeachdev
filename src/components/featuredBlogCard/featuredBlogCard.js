import React, { useState } from "react";
import "./featuredBlogCard.css";
import { FaArrowRight } from "react-icons/fa";

const FeaturedBlogCard = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="featuredBlog__container gradient-bg">
      <div
        className="featuredBlog__content"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <h2 className={`${!isHovered ? "gradient-text" : null}`}>Blog Title</h2>
        <p className={`${!isHovered ? null : "hidden"}`}>
          Blog Post Description
        </p>
        <FaArrowRight
          className={`${isHovered ? "featuredBlog__arrow" : "hidden"}`}
          size={80}
        />
      </div>
    </div>
  );
};

export default FeaturedBlogCard;
