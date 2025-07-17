import { Outlet } from "react-router-dom";
import Auth from "../LearnerPortal/Components/Auth/Auth";

export default function LearnerAuthLayout() {
  return (
    <div className="auth-wrapper">
      <Auth/>
      {/* No header/sidebar, only auth views */}
      <div className="auth-content">
      <Outlet />
      </div>
    </div>
  );
}
