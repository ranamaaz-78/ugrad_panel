import { Outlet } from "react-router-dom";
import Layout1 from "../LearnerPortal/Layouts/Layout1";
import Header from "../LearnerPortal/Layouts/Header";
import { useState } from "react";


export default function LearnerAdminRoutes() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <div>
      <div className="learner-body">
        {/* Sidebar */}
        <Layout1 sidebarOpen={sidebarOpen} onMenuClick={toggleSidebar} />

        {/* Header */}
        <Header onMenuClick={toggleSidebar}  />
        {/* header components end */}
        <div className="content">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
