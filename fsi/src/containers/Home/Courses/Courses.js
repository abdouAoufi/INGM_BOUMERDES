import React from "react";
import HeaderHome from "../../../components/HeaderHome/HeaderHome";
import Semestre from "../../../components/List/SemestreList/Semestre";

function Courses(props) {
  const nextPageHandler = () => {
    props.history.push("/semester/list")
    // console.log(props);
  }
  return (
    <div className="mx-auto ">
      <div className="mx-1 lg:m-auto">
        <HeaderHome
          title="Courses"
          text="Here you can find the latest course "
        />
        <div className="">
          <Semestre click={nextPageHandler} year={2} spec="Electronique" semestre={3} />
          <Semestre year={2} spec="Automatique" semestre={4} />

          <Semestre year={3} spec="Electronique" semestre={5} />
          <Semestre year={3} spec="Electronique" semestre={6} />

          <Semestre year={"Master 1"} spec="Electronique" semestre={6} />
          <Semestre year={"Master 1"} spec="Electronique" semestre={7} />

          <Semestre year={"Master 2"} spec="Electronique" semestre={7} />
          <Semestre year={"Master 2"} spec="Electronique" semestre={8} />
        </div>
      </div>
    </div>
  );
}

export default Courses;
