import React, { useContext } from 'react';
import { AuthContext } from './Authprovider';
import Loader from '../../Components/Loader';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({children}) => {

const {user, loading} = useContext(AuthContext)

   if (loading) {
    return <Loader></Loader>
   }

   if (!user) {
    
    return <Navigate to="/login"/> ;
   }

   return children
};

export default PrivateRoutes;