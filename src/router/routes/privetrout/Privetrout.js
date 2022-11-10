import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../contexts/authprovider/Authprovider';

const Privetrout = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return   <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-blue-600" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    }
    
    if(user){
        return children
    }
    return <Navigate to='/login' state={{from:location}} replace></Navigate>
    
};

export default Privetrout;