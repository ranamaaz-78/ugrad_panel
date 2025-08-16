import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PublicLayout from "./utilities/publicRoutes";
import LearnerAuthLayout from "./utilities/learnerAuthRoutes";
import LearnerAdminRoutes from "./utilities/LearnerAdminRoutes";
import ProgramAdminRoute from "./utilities/ProgramAdminRoute";

import {
  AboutScreen,
  Blogs,
  ConatctScreen,
  HomeScreen,
  Program,
} from "./screens";

import SignUp from "./LearnerPortal/Pages/Auth/SignUp";
import SignIn from "./LearnerPortal/Pages/Auth/SignIn";
import ResetPassword from "./LearnerPortal/Pages/Auth/ResetPassword";
import SetNewPassword from "./LearnerPortal/Pages/Auth/SetNewPassword";
import ChangePassword from "./LearnerPortal/Pages/Auth/ChangePassword";
import Verification from "./LearnerPortal/Pages/Auth/Verification";
import Dashboard from "./LearnerPortal/Pages/Dashboard/Dashboard";
import Profile from "./LearnerPortal/Pages/Profile/Profile";
import MyProgram from "./LearnerPortal/Pages/Programs/MyProgram";
import ProgramDetail from "./LearnerPortal/Pages/Programs/ProgramDetail";
import PurchaseHistory from "./LearnerPortal/Pages/PurchaseHistory/PurchaseHistory";
import SkillDrills from "./LearnerPortal/Pages/SkillDrills/SkillDrills";
import Arena from "./LearnerPortal/Pages/Arena/Arena";
import Mentorships from "./LearnerPortal/Pages/Mentorships/Mentorships";
import Certifications from "./LearnerPortal/Pages/Certifications/Certifications";

function App() {
  const router = createBrowserRouter([
    // Public Routes
    {
      path: "/",
      element: <PublicLayout />,
      children: [
        { path: "", element: <HomeScreen /> },
        { path: "about", element: <AboutScreen /> },
        { path: "contact", element: <ConatctScreen /> },
        { path: "programs", element: <Program /> },
        { path: "blogs", element: <Blogs /> },
      ],
    },

    // Learner Auth Routes
    {
      path: "/admin/auth",
      element: <LearnerAuthLayout />,
      children: [
        { path: "register", element: <SignUp /> },
        { path: "login", element: <SignIn /> },
        { path: "reset-password", element: <ResetPassword /> },
        { path: "set-new-password", element: <SetNewPassword /> },
        { path: "change-password", element: <ChangePassword /> },
        { path: "verification", element: <Verification /> },
      ],
    },

    // Learner Protected Routes
    {
      path: "/admin",
      element: <LearnerAdminRoutes />,
      children: [
        { path: "", element: <Dashboard /> },
        { path: "profile", element: <Profile /> },
        { path: "my-programs", element: <MyProgram /> },
        { path: "my-programs/full", element: <ProgramDetail /> },
        { path: "certifications", element: <Certifications /> },
        { path: "purchase-history", element: <PurchaseHistory /> },
        { path: "skill-drills", element: <SkillDrills /> },
        { path: "arena", element: <Arena /> },
        { path: "mentorships", element: <Mentorships /> },
        // Add more protected routes here
      ],
    },

    {
      path: "/admin/my-programs/full",
      element: <ProgramAdminRoute />, // wrap this layout around Outlet if needed
      children: [
        {
          path: "", // this matches exactly "/admin/my-programs/full"
          element: <ProgramDetail />,
        },
        // add more child routes here if needed
      ],
    }

  ]);

  return <RouterProvider router={router} />;
}

export default App;
