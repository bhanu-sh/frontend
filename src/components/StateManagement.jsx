import React, { useState } from "react";

const StateManagement = () => {
  const [likes, setLikes] = useState(0);

  let count = 1;

  const [img, setImg] = useState("");

  return (
    <div>
      <div className="container">
        <h1>State Management</h1>
        <hr />

        <h1>Count: {count}</h1>
        <button
          className="btn btn-primary mt-5"
          onClick={() => {
            count++;
            console.log(count);
          }}
        >
          Add Count
        </button>

        <h1>Likes: {likes}</h1>
        <button
          className="btn btn-danger mt-5"
          onClick={() => {
            setLikes(likes + 1);
          }}
        >
          Add Likes
        </button>

        <input
          type="text"
          className="form-control"
          onChange={(e) => {
            setImg(e.target.value);
          }}
        />

          <h1>{img}</h1>

          <img src={img} width={200} alt="link" />

      </div>
    </div>
  );
};

export default StateManagement;
