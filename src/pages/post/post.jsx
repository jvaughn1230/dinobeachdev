import React from "react";
import "./post.css";
import { useLocation } from "react-router-dom";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
const Post = () => {
  const location = useLocation();
  const post = location.state;

  return (
    <div className="post__container">
      <div className="post__header_container">
        <div className="">
          <h1 className="post__title gradient-text">{post.post.title}</h1>
          <h4>{post.post.publishedAt}</h4>
        </div>
        
        <img className="post__title_img" alt="post that shows desc"src={`http://localhost:1337${post.post.img}`}/>
      </div>
      <h3>{post.post.description}</h3>
      <div className="post__body_container">
        <div className="post__chapters">
          <h2>Chapters
          </h2>
          <ul>
            <li>Ch 1</li>
            <li>Ch 2</li>
            <li>Ch 2</li>
          </ul>
        </div>
        <ReactMarkdown className="post__body">{post.post.body}</ReactMarkdown>
      </div>
    </div>
  );
};

export default Post;
