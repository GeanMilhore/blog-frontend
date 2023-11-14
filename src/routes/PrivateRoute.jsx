import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { UserContext } from '../UserContext';
import { PageNotFound } from '../components/error404/PageNotFound';

const PrivateRoute = () => {
    let {logado} = React.useContext(UserContext);
    if(logado == null ) return <PageNotFound />;
    return logado ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;