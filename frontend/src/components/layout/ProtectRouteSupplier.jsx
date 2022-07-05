import { Navigate } from "react-router-dom";

function ProtectedRouteSupplier({ user, children }) {
  if (!user || user.company_group_id !== 2) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default ProtectedRouteSupplier;
