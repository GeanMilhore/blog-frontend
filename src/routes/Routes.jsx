import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { UserContext } from "../UserContext";
import authenticationRoutes from "./authentication/AuthenticationRoutes";
import homeRoutes from "./home/HomeRoutes";

export default function Router() {
  const { loading } = React.useContext(UserContext);
  if (loading) return <div className="loader"></div>;
  return (
    <Routes>
      {authenticationRoutes()}
      {homeRoutes()}
    </Routes>
  );
}