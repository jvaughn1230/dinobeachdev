import React, { useState } from "react";
import { Link } from "react-router-dom";
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
        <div className="img-bg">
          <div className="blogcard__content">
            <h3 className={isHovered ? "blogcard__title" : "gradient-text"}>
              {post.title}
            </h3>

            <p className={isHovered ? "show blogcard__description" : "hide"}>
              {post.description}
            </p>
            <Link to={`/blog/${post.id}`} state={{ post }}>
              <FaArrowRight
                className={isHovered ? "show blogcard__arrow" : "hide"}
                size={60}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
