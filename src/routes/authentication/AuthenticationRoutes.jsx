import React from "react";
import { Route } from "react-router";
import CreateAccount from "../../components/create-account/CreateAccount";
import Login from "../../components/login/Login";
import PublicRoute from "../PublicRoute";
import ValidateAccount from "../../components/validate-account/ValidateAccount";

export const authenticationRoutes = () => [
    <Route key="publics" path="/" element={<PublicRoute />}>
        <Route key="default-route" path="/" element={<Login />} />,
        <Route key="login-route" path="/login" element={<Login />} />,
        <Route key="create-account-route" path="/create-account" element={<CreateAccount />} />,
        <Route key="validate-account-route" path="/validate-registry/*" element={<ValidateAccount />} />,
        <Route key="validate-account-route" path="/validate-registry/:token" element={<ValidateAccount />} />
    </Route>,
];

export default authenticationRoutes;