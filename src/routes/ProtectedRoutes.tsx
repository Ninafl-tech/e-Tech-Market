import { PropsWithChildren, useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { CurrentUserContext } from "../provider/CurrentUserProvider";
import { TUserTypes } from "../provider/CurrentUserProvider";

type ProtectedRouteProps = {
  roles: TUserTypes[];
};

export default function ProtectedRoute({
  roles,
}: PropsWithChildren<ProtectedRouteProps>) {
  const { currentUser } = useContext(CurrentUserContext);

  if (roles.includes(currentUser)) {
    return <Outlet />;
  } else {
    return <Navigate to="/" />;
  }
}
