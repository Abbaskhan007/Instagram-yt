import React, { useEffect, useState } from "react";
import faker from "faker";

export default function Suggestions() {
  const [suggestions, setSuggestions] = useState([]);
  useEffect(() => {
    const suggestionArray = [...Array(5)].map((_, index) => ({
      ...faker.helpers.contextualCard(),
      id: index,
    }));

    setSuggestions(suggestionArray);
  }, []);

  console.log(suggestions);
  return (
    <div className="align-top ml-6 mt-6">
      <div className="flex items-center justify-between">
        <h3 className="text-gray-400 font-semibold text-sm">
          Suggestions for you
        </h3>
        <button className="text-gray-600 font-semibold">See All</button>
      </div>
      <div>
        {suggestions.map(item => (
          <div className="flex items-center mt-3 justify-between">
            <img className="w-10 h-10 rounded-full border p-[2px] mr-2" src="https://media.istockphoto.com/photos/millennial-male-team-leader-organize-virtual-workshop-with-employees-picture-id1300972574?b=1&k=20&m=1300972574&s=170667a&w=0&h=2nBGC7tr0kWIU8zRQ3dMg-C5JLo9H2sNUuDjQ5mlYfo=" />
            <div className="flex-1">
              <h3>{item.username}</h3>
              <h3 className="text-gray-400 text-sm">{item.company.name}</h3>
            </div>
            <button className="text-blue-400 text-sm font-semibold">Follow</button>
          </div>
        ))}
      </div>
    </div>
  );
}
