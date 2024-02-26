import React, { useState } from "react";
import "./featuredBlogCard.css";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const FeaturedBlogCard = (post) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link to={`/blog/${post.id}`} state={{ post }} className="blog-link">
      <div className="featuredBlogCard gradient-bg">
        <div
          className={`featuredblogcard-layer2 ${
            isHovered ? "transparent" : "cream-bg"
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="featuredblogcard-layer3">
            <div
              className={`${isHovered ? "transparent" : "featuredblogcard-bg"}`}
              style={{
                backgroundImage: `url(${post.image})`,
              }}
            ></div>
          </div>

          <div className="featuredBlog__content ">
            <h2 className={`${!isHovered ? "gradient-text" : "cream-text"}`}>
              {post.title}
            </h2>

            <p className={`${!isHovered ? null : "hide"}`}>
              {post.description}
            </p>

            <FaArrowRight
              className={`${isHovered ? "featuredBlog__arrow" : "hide"}`}
              size={80}
            />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FeaturedBlogCard;
