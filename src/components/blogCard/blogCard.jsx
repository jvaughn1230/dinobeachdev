import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "./blogCard.css";

const BlogCard = (post) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
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

            {/* <p className={isHovered ? "show blogcard__description" : "hide"}>
              {post.description}
            </p> */}
            <FaArrowRight
              className={isHovered ? "show blogcard__arrow" : "hide"}
              size={60}
            />
          </div>
        </div>
      </div>
    </Link>
  );

  /*
  return (
    <div className="blogcard gradient-bg ">
      <div
        className="background"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="img-bg">
          <div className="rd-div">
            <div
              className={`${isHovered ? "transparent" : "img-bg"}`}
              style={{
                backgroundImage: `url('http://localhost:1337${post.img}')`,
              }}
            ></div>
          </div>
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
*/
};
export default BlogCard;
