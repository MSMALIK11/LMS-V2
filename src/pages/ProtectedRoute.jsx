import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute() {
  const user = localStorage.getItem("token");
  if (!user) {
    return <Navigate to="/signup" />;
  }

  return (
    <>
      <Outlet />
    </>
  );
}

export default ProtectedRoute;
