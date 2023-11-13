import React from "react";
import { Route, Routes, Navigate } from "react-router";
import { UserContext } from "../../UserContext";

const LoginRoutes = () => {
  const { logado } = React.useContext(UserContext)

  if(logado) return <Navigate to="/home" />

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default Login;