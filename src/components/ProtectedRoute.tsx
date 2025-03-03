import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated'); // Check authentication status

  if (!isAuthenticated) {
    return <Navigate to="/signin" replace />; // Redirect to sign-in page if not authenticated
  }

  return children; // Render the protected page if authenticated
};

export default ProtectedRoute;