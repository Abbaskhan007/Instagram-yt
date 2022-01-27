import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import PostCard from "./PostCard";

export default function Post() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const subscribe = onSnapshot(
      query(collection(db, "posts"), orderBy("timestamp", "desc")),
      snapshot => {
          setPosts(snapshot.docs);
          console.log('docs',snapshot.docs);
      }
    );
    return {
        subscribe
    }
  }, []);
  const DUMMY_DATA = [
    {
      id: "123",
      username: "Abbas",
      userImg: "https://links.papareact.com/3ke",
      img: "https:links.papareact.com/3ke",
      caption: "Subscribe and destroy the like button for the yt-algorithm",
    },
    // {
    //     id: '234',
    //     username: "Nawab",
    //     userImg: "https://links.papareact.com/3ke",
    //     img: "https://links.papareact.com/3ke",
    //     caption: "Subscrive and destroy the like button for the yt algorithm"
    // }
  ];
  return (
    <div>
      {posts.map(post => (
        <PostCard
          key={post.id}
          id={post.id}
          username={post.data().username}
          userImg={post.data().userImg}
          img={post.img}
          caption={post.data().caption}
        />
      ))}
    </div>
  );
}
