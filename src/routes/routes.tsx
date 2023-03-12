import React, { useContext } from "react";
import { BrowserRouter } from "react-router-dom";

import AuthContext from "../contexts/AuthContext";
import { AuthRoutes } from "./auth.routes";
import { CommonRoutes } from "./common.routes";

const RootRoutes: React.FC = () => {
  const { signed } = useContext(AuthContext);
  return (
    <BrowserRouter>{signed ? <AuthRoutes /> : <CommonRoutes />}</BrowserRouter>
  );
};

export default RootRoutes;
