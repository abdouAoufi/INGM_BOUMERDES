import React, { useState, useEffect, useContext } from "react";
import BottomNavbar from "../../components/BottomNavbar/BottomNavbar";
import Navbar from "../../components/Navbar/NavBar";
import Descussion from "./Desc/Desc";
import { Route, Switch } from "react-router-dom";
import Notes from "./Notes/Notes";
import Courses from "./Courses/Courses";
import TimeLine from "./TimeLine/TimeLine";
import AuthContext from "../../context/authContext";
import Loader from "../../components/Loader/Loader";
import Feed from "./Feed/Feed";
import ModuleList from "../../components/List/ModuleList/ModuleList";
import ModuleDisplayer from "../../components/List/ModuleList/ModuleDisplayer/ModuleDisplayer";

function Home(props) {
  const minScroll = 20;
  const authCnt = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   if (authCnt) {
  //     setTimeout(() => {
  //       setLoading(false);
  //       if (authCnt.status) {
  //         props.history.push("/feed");
  //       }
  //     }, 3000);
  //   }
  // }, [authCnt, props.history]);

  const [showNav, setShowNav] = useState(true);
  const handleScroll = () => {
    if (window.scrollY > minScroll) {
      setShowNav(false);
    }
    if (window.scrollY < minScroll) {
      setShowNav(true);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, true);
  }, []);

  return (
    <div>
      <Navbar />
      {loading ? (
        <div className="grid items-center place-items-center h-screen ">
          <Loader />
        </div>
      ) : null}
      <div className="mx-auto lg:w-2/5 md:w-2/3">
        <Switch>
          <Route exact path={"/descussion"} render={Descussion} />
          <Route exact path={"/feed"} render={() => <Feed />} />
          <Route path={"/course"} component={Courses} />
          <Route path={"/timeline"} component={TimeLine} />
          <Route path={"/semester/list/module"} component={ModuleDisplayer} />
          <Route path={"/semester/list"} component={ModuleList} />
          <Route path={"/notes"} component={Notes} />
        </Switch>
      </div>
      {showNav ? <BottomNavbar show={showNav} /> : null}
    </div>
  );
}

export default Home;
