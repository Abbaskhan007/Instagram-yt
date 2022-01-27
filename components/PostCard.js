import React, { useState } from "react";
import {
  DotsHorizontalIcon,
  HeartIcon,
  ChatIcon,
  PaperAirplaneIcon,
  BookmarkIcon,
  EmojiHappyIcon,
} from "@heroicons/react/outline";
import {
  HeartIcon as SolidHeratIcon
  
} from "@heroicons/react/solid";
import { useSession } from "next-auth/react";
import { useEffect } from "react/cjs/react.development";

import {
  addDoc,
  collection,
  deleteDoc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
  doc,
  setDoc
} from "firebase/firestore";
import { db } from "../firebase";
import Moment from "react-moment";
import { atomFamily } from "recoil";

export default function PostCard({ id, username, img, userImg, caption }) {
  const { data: session } = useSession();
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState([]);

  const addComment = async e => {
    e.preventDefault();
    await addDoc(collection(db, "posts", id, "comments"), {
      comment: comment,
      username: session.user.username,
      userImage: session.user.image,
      timestamp: serverTimestamp(),
    });
    setComment("");
  };

  useEffect(() => {
    onSnapshot(
      query(
        collection(db, "posts", id, "comments"),
        orderBy("timestamp", "desc")
      ),
      snapshot => {
        setComments(snapshot.docs);
        console.log("Comments Array: ", snapshot.docs);
      }
    );
    onSnapshot(query(collection(db, "posts", id, "likes")),snapshot =>{
      setLikes(snapshot.docs);
    });
  }, [db]);

  const addLike = async () => {
    console.log('Likes Array',likes)
    if(likes.findIndex(like=> like.id == session.user.uid)){
    await setDoc(doc(db, "posts", id, "likes", session.user.uid), {
      username: session.user.username,
    });}
    else {
      await deleteDoc(doc(db, 'posts', id, "likes", session.user.uid));
    }
  };

  return (
    <div className="my-7 bg-white border rounded-sm">
      <div className="flex items-center space-x-2 p-5 ">
        <p className="bg-purple-500 rounded-full w-10 h-10 text-white text-bold flex items-center justify-center text-xl">
          S
        </p>
        <p className="text-xs font-bold flex-1">{username}</p>
        <DotsHorizontalIcon className="h-8 w-8" />
      </div>
      <img className="object-cover w-full" src={img} />
      {session && (
        <div className="flex justify-between items-center px-4 pt-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              {
                !likes.findIndex(like=> like.id == session.user.uid)?<SolidHeratIcon onClick={addLike} className="postbtn text-red-700"/>:<HeartIcon onClick={addLike} className="postbtn" />
              }
              </div>
            <ChatIcon className="postbtn" />
            <PaperAirplaneIcon className="postbtn" />
          </div>
          <div>
            <BookmarkIcon className="postbtn" />
          </div>
        </div>
      )}

      <p className="p-5 truncate">
      <p className="mb-1 font-bold">{likes.length} likes</p>
        <span className="font-bold mr-1">{username}</span>
        {caption}
      </p>
      <div className="h-20 ml-10 overflow-y-scroll scrollbar-thin scrollbar-thumb-black ">
        {comments.map(cmt => (
          <div key={cmt.id} className="flex flex-1 items-center mb-3 space-x-2 mr-4">
            <img className="h-7 rounded-full" src={cmt.data().userImage} />
            <p className="flex-1">
              <span className="font-bold">{cmt.data().username}</span>
              {"  "}
              {cmt.data().comment}
            </p>
            <Moment className="text-sm text-gray-400 border-1" fromNow>
              {cmt.data().timestamp?.toDate()}
            </Moment>
          </div>
        ))}
      </div>
      {session && (
        <div className="flex items-center p-5">
          <EmojiHappyIcon className="w-6 mr-1" />
          <form
            onSubmit={addComment}
            className="flex items-center justify-between w-full"
          >
            <input
              type="text"
              className="flex-1 border-none outline-none mr-2"
              placeholder="Add a coment..."
              value={comment}
              onChange={e => setComment(e.target.value)}
            />
            <input
              className="font-semibold text-blue-400"
              type="submit"
              value="Post"
            />
          </form>
        </div>
      )}
    </div>
  );
}
