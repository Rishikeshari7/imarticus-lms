import React from 'react'
import { useAuthStore } from '@/store/authStore'
import { Navigate,Outlet } from 'react-router-dom'
const ProtectedRoute = () => {
  const { token } = useAuthStore();
  return token ? <Outlet/> : <Navigate to="/login"/>;
}

export default ProtectedRoute
