import React from "react";
import "./post.css";
import { useLocation } from "react-router-dom";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
const Post = () => {
  const location = useLocation();
  const post = location.state;
  console.log(post);

  // Need to check for post and adjust

  // console.log("post: ", post.post.body)
  return (
    <div className="post__container">
      <div className="post__header_container">
        <div className="post__details_container">
          <h4>{post.post.publishedAt}</h4>
          <h1 className="post__title gradient-text">{post.post.title}</h1>
          <h3>{post.post.description}</h3>
        </div>
        {post.post.image && (
          <img
            className="post__title_img"
            alt="blog post"
            src={`{post.post.img}`}
          />
        )}
      </div>
      <div className="post__body_container">
        <div className="post__chapters">
          {/* <h2>Sections</h2>
          <ul>
            <li>Ch 1</li>
            <li>Ch 2</li>
            <li>Ch 2</li>
          </ul> */}
        </div>
        <ReactMarkdown className="post__body">{post.post.body}</ReactMarkdown>
        <div></div>
      </div>
    </div>
  );
};

export default Post;
