import React, { useEffect, useState } from "react";
import PostCard from "../../../components/Card/PostCard";
import HeaderHome from "../../../components/HeaderHome/HeaderHome";
import * as assets from "../../../assets/assetes"

function Feed() {
  return (
    <div className="  mx-auto">
      <HeaderHome title="Home" text="Here you can check all news!" image={assets.headerIcons.homeIconHeader} />
      <div  className="flex-auto justify-between w-full" >
         
         
        <div className="mx-auto">
          <PostCard
            title="La serie 1 + 2"
            tag="System non linear"
            name="adel"
          />
          <PostCard title="Examen" tag="System embarque" name="salim" />
        </div>
      </div>
    </div>
  );
}

export default Feed;
