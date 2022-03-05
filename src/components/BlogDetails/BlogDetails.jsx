import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../UseFetch/useFetch";

export const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    isLoading,
    error,
  } = useFetch("http://localhost:8000/blog/" + id);

  const [selected, setSelected] = useState(null);
  const [edit, setEdit] = useState(selected?.body);

  const navigate = useNavigate();

  const handleDelete = () => {
    fetch("http://localhost:8000/blog/" + id, {
      method: "DELETE",
    }).then(() => {
      navigate("/");
    });
  };

  const onChange = (e) => {
    const { id, value } = e.target;
    setEdit(value);
  };

  return (
    <div className="blog-details">
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          {selected?.id === blog.id ? (
            <textarea
              name="body"
              id=""
              cols={100}
              rows={10}
              onChange={onChange}
              value={edit}
            ></textarea>
          ) : (
            <div>{blog.body}</div>
          )}

          <button onClick={handleDelete}>Delete</button>
          {selected?.id === blog.id ? (
            <button>Save</button>
          ) : (
            <button
              onClick={(e) => {
                setSelected(blog);
                setEdit(blog.body);
              }}
            >
              Edit
            </button>
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
