import { useState } from "react"
import { useParams } from "react-router-dom"
import { Post } from "../types"

export function SinglePost(){
    const [singlePost, setSinglePost]=useState<Post| null>(null)
    const params=useParams()

    fetch(`http://localhost:5000/posts/${params.itemId}`)
    .then(resp=>resp.json())
    .then(data=> setSinglePost(data))

    if(singlePost===null)
    return(
        <h1>Loading...</h1>
    )
    return(
        <div className="single-post">
            <div className="author-details">
                <img src={singlePost.author.img}></img>
                <h3>{singlePost.author.fullName}</h3>
                <h3>{singlePost.author.followers} followers</h3>
            </div>
            <div className="post-details">
            <h1>{singlePost.title}</h1>
            <h2>by {singlePost.author.fullName}</h2>
            <img src={singlePost.image}/>
            <p>{singlePost.content}</p>
            </div>
        </div>
    )
}