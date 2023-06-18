import { Outlet } from "react-router-dom";
import { PrivateHeader } from "./PrivateHeader/PrivateHeader";

export function PrivateLayout() {
  return (
    <div>
      <PrivateHeader />
      <Outlet />
    </div>
  );
}
