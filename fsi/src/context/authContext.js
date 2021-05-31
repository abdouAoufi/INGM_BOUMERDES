import React from "react";

const AuthContext = React.createContext({
  status: false,
  changeStatue: () => {},
});

export default AuthContext ;