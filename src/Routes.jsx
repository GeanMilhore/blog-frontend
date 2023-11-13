import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useNavigate } from "react-router";
import { UserContext } from "./UserContext";
import Login from "./components/login/Login";

export function CustomRoute({ isPrivate, ...rest }) {
  const { logado, loading, fazerLogout } = React.useContext(UserContext);
  const navigate = useNavigate();

  if (loading) {
    return <div className="loader"></div>;
  }
  if (isPrivate && !logado && !window.localStorage.getItem("token")) {
    fazerLogout();
  }

  return <Route {...rest} />;
}

export default function Router() {
  const { loading, dadosUsuario, logado } = React.useContext(UserContext);

  if (loading) return <div className="loader"></div>;
  return (
    <Routes>
        <Route path="/login" element={<Login />} />
    </Routes>
  );
}