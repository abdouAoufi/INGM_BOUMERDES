import React from "react";
import BottomNavbar from "../../components/BottomNavbar/BottomNavbar";
import Navbar from "../../components/Navbar/NavBar";
import Aux from "../../hoc/Aux";

function Layout(props) {
   console.log(props);
  return (
    <Aux>
      <Navbar />
      <BottomNavbar />
      <main>{props.children}</main>
    </Aux>
  );
}

export default Layout;
