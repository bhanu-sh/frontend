import React, { useState } from "react";

const FbPost = () => {
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState(0);

  return (
    <div className="container mt-5 mb-5">
      <div className="row d-flex align-items-center justify-content-center">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="d-flex justify-content-between p-2">
              <div className="d-flex flex-row align-items-center">
                <img
                  src="https://avatars.githubusercontent.com/u/74877259?v=4"
                  width={50}
                  alt="profile"
                  className="rounded-circle"
                />
                <div className="d-flex flex-column mx-2">
                  <span className="font-weight-bold">Bhanu Sharma</span>
                  <small>Thursday at 08:00 PM</small>
                </div>
              </div>
            </div>

            <p className="text-justify px-2">
              Looks like a beautiful weather.. ☁️
            </p>
            <img
              src="https://static.vecteezy.com/system/resources/previews/002/814/441/original/sunset-on-sky-free-photo.jpg"
              alt="post"
              className="img-fluid px-2"
            />

            <div className="p-2">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <i class="fa-solid fa-thumbs-up"></i>&nbsp;
                  {likes}
                </div>
                <div>
                  <span>{comments} comments</span>
                </div>
              </div>
              <hr />

              <div>
                <button
                  className="btn btn-primary w-25"
                  onClick={() => {
                    setLikes(likes + 1);
                  }}
                >
                  <i class="fa-solid fa-thumbs-up"></i>&nbsp; Like
                </button>
                <button
                  className=" btn btn-secondary w-25 mx-5"
                  onClick={() => {
                    setComments(comments + 1);
                  }}
                >
                  <i class="fa-solid fa-comment"></i>&nbsp; Comment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FbPost;
