import React, { useState, useEffect } from "react";
import faker from "faker";
import Post from "./Post";
import Stories from "./Stories";
import MiniProfile from "./MiniProfile";
import Suggestions from "./Suggestions";
import { useSession } from "next-auth/react";

export default function Feed() {
  const [storiesData, setStoriesData] = useState([]);
  const { data: session } = useSession();

  useEffect(() => {
    const storiesArray = [...Array(20)].map((_, index) => ({
      ...faker.helpers.contextualCard(),
      id: index,
    }));
    setStoriesData(storiesArray);
  }, []);
  console.log("Stories Data", storiesData);
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto space-x-4 ${
        !session && "!grid-cols-1 !max-w-3xl"
      }`}>
      <section className="col-span-2">
        <div className="flex flex-row space-x-2 overflow-x-scroll mt-8 p-6 bg-white border-gray-200 border rounded-sm scrollbar-thin scrollbar-thumb-black">
          {session && (
            <Stories
              username={session?.user.username}
              image={session?.user.image}
            />
          )}

          {storiesData.map(({ id, avatar, username }) => (
            <Stories key={id} username={username} image={avatar} />
          ))}
        </div>
        <Post />
      </section>
      <section>
        <div
          className={`mt-8  pr-4 pb-2  shadow-sm rounded-md border h-auto bg-white ${
            !session ? "hidden" : null
          }`}
        >
          <MiniProfile />
          <Suggestions />
        </div>
      </section>
    </div>
  );
}
