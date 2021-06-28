import React, { useEffect, useState } from "react";
import PostCard from "../../../components/Card/PostCard";
import HeaderHome from "../../../components/HeaderHome/HeaderHome";
import * as assets from "../../../assets/assetes";

function Feed() {
  return (
    <div className="  mx-auto">
      <HeaderHome
        title="Home"
        text="Here you can check all news!"
        image={assets.headerIcons.homeIconHeader}
      />
      <div className="flex-auto justify-between w-full">
        <div className="mx-auto">
          <PostCard
            title="La serie 1 + 2"
            tag="System non linear"
            name="adel"
            image="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=709&q=80"
            like="14"
            comments="4"
          />
          <PostCard
            title="Examens"
            tag="Informatique"
            name="yacine"
            image=" https://images.unsplash.com/photo-1522661067900-ab829854a57f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHNjaG9vbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            like="4"
            comments="7"
          />
          <PostCard
            title="La serie 3 + 4"
            tag="System non linear"
            name="adel"
            image="https://images.unsplash.com/photo-1503676382389-4809596d5290?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=755&q=80"
            like="10"
            comments="4"
          />
        </div>
      </div>
    </div>
  );
}

export default Feed;
