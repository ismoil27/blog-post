import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../UseFetch/useFetch";

export const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    isLoading,
    error,
  } = useFetch("http://localhost:8000/blog/" + id);

  const [edit, setEdit] = useState("");

  const navigate = useNavigate();

  const handleDelete = () => {
    fetch("http://localhost:8000/blog/" + id, {
      method: "DELETE",
    }).then(() => {
      navigate("/");
    });
  };

  // const handleClick = () => {
  //   const newData = { edit, id };
  //   fetch("http://localhost:8000/blog/" + blog.id, {
  //     // method: "GET",
  //     headers: { "Content-type": "application/json" },
  //     // body: JSON.stringify(newData),
  //   }).then(() => {
  //     setEdit({ edit: newData });
  //     navigate("/blog");
  //   });
  // };

  const onChange = (e) => {
    const { id, body, value, edit } = e.target;
    setEdit({ [edit]: value });
  };

  return (
    <div className="blog-details">
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          {edit === blog.id ? (
            <textarea
              name="body"
              id=""
              cols={100}
              rows={10}
              onChange={onChange}
              value={blog.body}
            ></textarea>
          ) : (
            <div>{blog.body}</div>
          )}

          <button onClick={handleDelete}>Delete</button>
          {edit === blog.id ? (
            <button>Save</button>
          ) : (
            <button onClick={(e) => setEdit(blog.id)}>Edit</button>
          )}
        </article>
      )}
    </div>
  );
};

export default BlogDetails;

// const handleSave = (e) => {
//   e.prevenDefault();

//   const textAreaName = e.target.getAttribute("name");
//   const textAreaValue = e.target.value;

//   const newData = { data: blog, isLoading, error };
//   newData[textAreaName] = textAreaValue;
//   fetch("http://localhost:8000/blog/" + id, {}).then((res) => {
//     setEditingText(newData);
//   });
// };
