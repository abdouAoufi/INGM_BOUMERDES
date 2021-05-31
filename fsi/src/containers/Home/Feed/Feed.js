import React from "react";
import PostCard from "../../../components/Card/PostCard";

function Feed() {
  return (
    <div>
      <h1 className="font-bold text-lg ">Some text </h1>
      <div className=" mx-auto">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </div>
  );
}

export default Feed;
