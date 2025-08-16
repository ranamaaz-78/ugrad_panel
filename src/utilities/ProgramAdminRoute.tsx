import { Outlet } from "react-router-dom";
// import Layout1 from "../LearnerPortal/Layouts/Layout1";
// import Header from "../LearnerPortal/Layouts/Header";
import Header2 from "../LearnerPortal/Layouts/Header2";

export default function LearnerAdminRoutes() {
  return (
    <div>
      <div className="learner-body">
        {/* header components start */}
        <Header2 />
        {/* header components end */}
        <div className="content full">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
