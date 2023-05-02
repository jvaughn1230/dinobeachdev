import React, { useState } from "react";
import "./featuredBlogCard.css";
import { FaArrowRight } from "react-icons/fa";

const FeaturedBlogCard = (post) => {
  const [isHovered, setIsHovered] = useState(false);

  console.log("image:", post.image);
  // const imageURl = JSON.stringify(post.image);
  // console.log("here:", imageURl);

  return (
    <div className="featuredBlog__container gradient-bg">
      <div
        className="featuredBlog__content"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <h2 className={`${!isHovered ? "gradient-text" : null}`}>
          {post.title}
        </h2>
        <p className={`${!isHovered ? null : "hide"}`}>{post.description}</p>
        <FaArrowRight
          className={`${isHovered ? "featuredBlog__arrow" : "hide"}`}
          size={80}
        />
      </div>
    </div>
  );
};

export default FeaturedBlogCard;
