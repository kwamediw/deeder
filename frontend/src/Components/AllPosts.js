import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function AllPosts() {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
        const response = await axios.get("http://localhost:3001/posts");
        console.log(response.data);
      } catch (error) {
          console.log(error);
      }
  }
  
  useEffect(() => {
      getPosts();
  }, []);
  
      

  return (
  <div>
      {posts.map((element) => {
      return <p key={element._id}> {element.title}</p>;
  })}
  </div>
  );
}

export default AllPosts;
