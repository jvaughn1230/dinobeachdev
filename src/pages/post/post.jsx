import React from "react";
import "./post.css";
import { useLocation } from "react-router-dom";
import { DateTime } from "luxon";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
const Post = () => {
  
  const location = useLocation();
  const post = location.state;
  const postDate = DateTime.fromFormat(post.post.publishedAt,"M/d/yyyy").toFormat('MMMM dd, yyyy')

  return (
    <div className="post__container">
      <div className="post__header_container">
        <div className="post__details_container">
          <h4>{postDate}</h4>
          <h1 className="post__title gradient-text">{post.post.title}</h1>
          <h3>{post.post.description}</h3>
        </div>
        <img className="post__title_img" alt="post that shows desc"src={`http://localhost:1337${post.post.img}`}/>
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
