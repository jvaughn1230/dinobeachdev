import React, { useState } from "react";
import "./featuredBlogCard.css";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const FeaturedBlogCard = (post) => {
  const [isHovered, setIsHovered] = useState(false);
  console.log("post", post);
  console.log("img", post.img);

  return (
    <div className="featuredBlog__container gradient-bg">
      <div
        className="featuredBlog__content"
        style={{ backgroundImage: `url('http://localhost:1337${post.img}')` }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* <img
          src={`http://localhost:1337${post.img}`}
          alt="beach"
          className="card-image"
        /> */}
        <h2 className={`${!isHovered ? "gradient-text" : null}`}>
          {post.title}
        </h2>

        <p className={`${!isHovered ? null : "hide"}`}>{post.description}</p>
        <Link to={`/blog/${post.id}`} state={{ post }}>
          <FaArrowRight
            className={`${isHovered ? "featuredBlog__arrow" : "hide"}`}
            size={80}
          />
        </Link>
      </div>
    </div>
  );
};

export default FeaturedBlogCard;
