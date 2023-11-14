import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { UserContext } from '../UserContext';

const PublicRoute = () => {
    let {logado} = React.useContext(UserContext);  
    return !logado ? <Outlet /> : <Navigate to="/home" />;
}

export default PublicRoute;