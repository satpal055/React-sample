import React from 'react'

import { Navigate, Outlet } from 'react-router-dom'

export default function ProtectRoutes({ children }) {

    const name = localStorage.getItem("name");

    if (!name) {

        return <Navigate to="/login" replace />
    }

    return <Outlet />;

}
