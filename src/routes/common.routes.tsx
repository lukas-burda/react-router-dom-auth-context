import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "../App";

export const CommonRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<h1>You're need to login</h1>} />
    </Routes>
  );
};
