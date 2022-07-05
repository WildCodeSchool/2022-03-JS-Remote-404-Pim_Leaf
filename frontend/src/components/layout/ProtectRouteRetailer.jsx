import { Navigate } from "react-router-dom";

function ProtectedRouteRetailer({ user, children }) {
  if (!user || user.company_group_id !== 1) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default ProtectedRouteRetailer;
