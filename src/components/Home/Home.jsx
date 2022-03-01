// import { useEffect, useState } from "react";
import BlogList from "../BlogList/BlogList";
import useFetch from "../UseFetch/useFetch";

const Home = () => {
  const {
    data: blog,
    isLoading,
    error,
  } = useFetch("http://localhost:8000/blog");
  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      {blog && <BlogList blog={blog} title="All Blogs" />}
    </div>
  );
};

export default Home;
