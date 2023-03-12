import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "../App";

export const AuthRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  );
};
