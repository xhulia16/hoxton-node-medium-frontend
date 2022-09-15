import { useEffect, useState } from "react";
import { json, useParams } from "react-router-dom";
import { Post, User } from "../types";

export function SinglePost() {
  const [singlePost, setSinglePost] = useState<Post | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const params = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/posts/${params.itemId}`)
      .then((resp) => resp.json())
      .then((data) => setSinglePost(data));
  }, []);

  // atm userId=1

  window.singlePost=singlePost

  useEffect(() => {
    fetch(`http://localhost:5000/users/1`)
      .then((resp) => resp.json())
      .then((data) => setUser(data));
  }, []);

  if (singlePost === null) return <h1>Loading...</h1>;
  
  return (
    <div className="single-post">
      <div className="author-details">
        <img src={singlePost.author.img}></img>
        <h3>{singlePost.author.fullName}</h3>
        <h3>{singlePost.author.followers} followers</h3>
      </div>
      <div className="post-details">
        <h1>{singlePost.title}</h1>
        <h2>by {singlePost.author.fullName}</h2>
        <img src={singlePost.image} />
        <p>{singlePost.content}</p>
        <div className="likes-section">
          <button
            onClick={() => {
              fetch(`http://localhost:5000/likes`, {
                method: "POST",
                headers: {
                  "content-type": "application/json",
                },
                body: JSON.stringify({
                  userId: user?.id,
                  postId: singlePost.id,
                }),
              });
            }}
          >
            ❤️
          </button>
          <h3>{singlePost.likes.length} likes</h3>
        </div>
        <div className="comment-section">
          <form
            onSubmit={(event) => {
              event.preventDefault();
              let newComment = {
                postId: singlePost.id,
                userId: 1,
                comment: event.target.comment.value,
              };
              fetch("http://localhost:5000/comments", {
                method: "POST",
                headers: {
                  "content-type": "application/json",
                },
                body: JSON.stringify(newComment),
              })
                .then((resp) => resp.json())
                .then((data) => setSinglePost(data));

              event.target.reset();
            }}
          >
            <input name="comment" placeholder="enter your comment..."></input>
            <button>Submit</button>
          </form>
          <ul className="all-comments">
            Comments
            {singlePost.comments.reverse().map((comment) => (
              <li className="comments-li">
                <img src={comment.user.img}></img>
                <h4>{comment.user.fullName}</h4>
                <h4 className="comment-h4">{comment.comment}</h4>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
