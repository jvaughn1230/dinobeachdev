import React from "react";
import "./post.css";
import { useLocation } from "react-router-dom";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
const Post = () => {
  const location = useLocation();
  const post = location.state;

  return (
    <div className="post__container">
      <h1 className="post__title gradient-text">{post.post.title}</h1>
      <ReactMarkdown className="post__body">{post.post.body}</ReactMarkdown>
    </div>
  );
};

export default Post;
