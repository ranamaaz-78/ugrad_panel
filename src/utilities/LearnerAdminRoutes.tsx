import { Outlet } from "react-router-dom";
import Layout1 from "../LearnerPortal/Layouts/Layout1";
import Header from "../LearnerPortal/Layouts/Header";

export default function LearnerAdminRoutes() {
  return (
    <div>
      <div className="learner-body">
        {/* sidebar components start */}
        <Layout1 />
        {/* sidebar components end */}

        {/* header components start */}
        <Header />
        {/* header components end */}
        <div className="content">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
