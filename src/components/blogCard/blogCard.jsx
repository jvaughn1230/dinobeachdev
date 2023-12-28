import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "./blogCard.css";

const BlogCard = (post) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div>
    <Link to={`/blog/${post.id}`} state={{ post }}>
      <div className="blogcard gradient-bg">
        <div
          className={`blogcard-layer2 ${
            isHovered ? "transparent" : "cream-bg"
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="blogcard-layer3">
            <div
              className={`${isHovered ? "transparent" : "blogcard-bg"}`}
              style={{
                backgroundImage: `url('http://localhost:1337${post.img}')`,
              }}
            ></div>
          </div>
          <div className="blogcard-content">
            <h3 className={isHovered ? "blogcard__title" : "gradient-text"}>
              {post.title}
            </h3>
            <FaArrowRight
              className={isHovered ? "show blogcard__arrow" : "hide"}
              size={60}
            />
          </div>
        </div>
      </div>
    </Link>
    </div>

  );
};
export default BlogCard;
