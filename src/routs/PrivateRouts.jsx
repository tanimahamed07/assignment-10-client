import React, { use } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Navigate } from 'react-router';
import Loader from '../components/Loader';

const PrivateRouts = ({ children }) => {
    const { user, loading } = use(AuthContext);
    if (loading) {
        return <Loader></Loader>
    }
    if (!user) {
        return <Navigate state={location?.pathname} to="/register"></Navigate>;
    }
    return children 
};

export default PrivateRouts;