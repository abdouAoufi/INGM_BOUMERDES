import React from "react";
import PostCard from "../../../components/Card/PostCard";
import HeaderHome from "../../../components/HeaderHome/HeaderHome";
import * as assetes from "../../../assets/assetes"

function Desc() {
  return (
    <div className="mx-auto">
      <HeaderHome title="Descussion" text="Here you can ask for help !" type="desc"/>
      <div className="flex-auto justify-between w-full">
        <div className=" mx-auto">
          <PostCard
            title="La serie 1 + 3"
            tag="System non linear"
            name="adel"
          />
          <PostCard title="Examen" tag="System embarque" name="salim" />
        </div>
      </div>
    </div>
  );
}

export default Desc;
