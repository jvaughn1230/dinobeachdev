import React from "react";
// import axios from "axios";
import { blogPosts } from "../data/tempData";

const BlogContext = React.createContext();

function BlogContextProvider(props) {
  // const [posts, setPosts] = useState([]);
  const posts = blogPosts;

  // useEffect(() => {
  //   axios
  //     .get(
  //       "http://localhost:1337/api/posts?sort=publishedAt:desc&pagination[limit]=8&populate=*"
  //     )
  //     .then(({ data }) => setPosts(data.data))
  //     .catch((error) => console.log(error));
  // }, []);

  const featuredPosts = posts.slice(0, 2);
  const homePosts = posts.slice(0, 3);
  const agedPosts = posts.slice(2);

  return (
    <BlogContext.Provider
      value={{
        featuredPosts,
        homePosts,
        agedPosts,
      }}
    >
      {props.children}
    </BlogContext.Provider>
  );
}

export { BlogContextProvider, BlogContext };
