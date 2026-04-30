import { Navigate } from "react-router-dom";
import { getRole, type Role } from "@/lib/auth";

const RequireRole = ({ role, children }: { role: Role; children: JSX.Element }) => {
  const current = getRole();
  if (current !== role) return <Navigate to="/" replace />;
  return children;
};

export default RequireRole;