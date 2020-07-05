import React, { useState, useEffect } from "react";
import db from "./firebase";
import "./index.css";

const Shop = () => {
  const [posts, setPosts] = useState([]);
  const [displayPosts, setDisplayPosts] = useState([]);

  useEffect(() => {
    const getPostsFromFirebase = [];
    db.collection("posts")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          getPostsFromFirebase.push({
            postID: doc.id,
            title: doc.data().title,
            description: doc.data().description,
            price: doc.data().price,
            url: doc.data().url,
          });
        });
        setPosts(getPostsFromFirebase);
      });

    if (posts.length > 0) {
      setDisplayPosts(
        posts.map(p => (
          <div key={p.postID}>
            <h2>{p.title}</h2>
            <h3> $ {p.price}</h3>
            <p>{p.description}</p>
            <img
              src={p.url || "https://via.placeholder.com/400x300"}
              alt="Uploaded Images"
              height="300"
              width="400"
            />
          </div>
        ))
      );
    }
  }, [posts]);

  return (
    <div className="posts">
      {displayPosts}
    </div>
  );
};

export default Shop;