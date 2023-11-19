import React, { useContext } from 'react'

import { UserContext } from '../../context/UserContext';
import { Outlet, useLocation, Navigate } from 'react-router-dom';

export default function Private() {
    const {currentUser} = useContext(UserContext);
    console.log("PRIVATE USER", currentUser);

    if(!currentUser){
        return <Navigate to={'/'} />
    }else{

    }
  return (
    <div>
        <Outlet />
    </div>
  )
}
