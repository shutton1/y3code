import React, { Component } from "react";
import db from "./firebase";
import './index.css';

class Shop extends Component {
    constructor(props) {
      super(props);
      this.state = {
        posts: []
      };
    }
      
    componentDidMount = () => {
        db.collection("posts").get().then((snapshot) => (
            snapshot.forEach((doc) => (
                this.setState((prevState) => ({
                    posts: [...prevState.posts, {
                        postID: doc.id,
                        title: doc.data().title,
                        description: doc.data().description,
                        price: doc.data().price,
                        url: doc.data().url
                    }]
                }))
            ))
        ))
    }
    
        render() {
            let displayPosts = this.state.posts.map((p) => (
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
    
            return(
                <div className="posts">
                    {displayPosts}
                </div>
            );
        }
  }
  
  export default Shop;