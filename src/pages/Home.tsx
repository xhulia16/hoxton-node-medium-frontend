import React from "react";
import { useEffect, useState } from "react";
import { Post } from "../types";

export function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    fetch("http://localhost:5000/posts")
      .then((resp) => resp.json())
      .then((postsFromServer) => setPosts(postsFromServer));
  }, []);

  return(
    <ul className="home-ul">
       {posts.map(item=>(
        <li key={item.id}>
          <div className="details-container">
            <div className="author-details">
              <img className="img-profile" src={item.author.img}></img>
            <h5>{item.author.fullName}</h5>
            </div>
          <h4>{item.title}</h4>
          </div>
          <img className="img-post" src={item.image}></img>
        </li>
       ))}
    </ul>
  )
 
}
