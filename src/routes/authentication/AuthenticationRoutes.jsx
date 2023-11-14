import React from "react";
import { Route } from "react-router";
import CreateAccount from "../../components/create-account/CreateAccount";
import Login from "../../components/login/Login";
import PublicRoute from "../PublicRoute";

export const authenticationRoutes = () => [
    <Route key="publics" path="/" element={<PublicRoute />}>
        <Route key="default-route" path="/" element={<Login />} />,
        <Route key="login-route" path="/login" element={<Login />} />,
        <Route key="create-account-route" path="/create-account" element={<CreateAccount />} />,
    </Route>,
];

export default authenticationRoutes;