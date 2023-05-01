import React, { useEffect, useState } from "react";
import axios from "axios";

const BlogPosts = () => {
  let posts = [];
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:1337/api/posts")
      .then(({ data }) => (posts = data.data))
      .catch((error) => setError(error));
  }, []);

  if (error) {
    console.log(error);
  }

  return <div>{posts}</div>;
};

export default BlogPosts;
