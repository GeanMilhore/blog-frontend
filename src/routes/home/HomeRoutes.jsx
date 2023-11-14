import React from "react";
import { Route } from "react-router";
import PrivateRoute from "../PrivateRoute";
import { Home } from "../../components/home/Home";

export const homeRoutes = () => [
        <Route key="privates" path="/" element={<PrivateRoute />}>
            <Route key="home-route" path="/home" element={<Home />}/>
        </Route>
];

export default homeRoutes;