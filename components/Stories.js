import React from "react";
export default function Stories({ image, username }) {
  console.log("Stories Props", image, username);
  return (
    <div className="cursor-pointer">
      <img
        className="w-14 h-14 rounded-full p-[1.5px] border-2 border-red-500 transition transform hover:scale-110 duration-200 ease-out"
        src="https://media.istockphoto.com/photos/millennial-male-team-leader-organize-virtual-workshop-with-employees-picture-id1300972574?b=1&k=20&m=1300972574&s=170667a&w=0&h=2nBGC7tr0kWIU8zRQ3dMg-C5JLo9H2sNUuDjQ5mlYfo="
      />
      <p className="text-xs truncate w-14 text-center pt-[2px]">{username}</p>
    </div>
  );
}
