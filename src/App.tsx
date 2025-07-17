import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PublicLayout from "./utilities/publicRoutes";
import LearnerAuthLayout from "./utilities/LearnerAuthRoutes";
import LearnerAdminRoutes from "./utilities/LearnerAdminRoutes";

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
        // Add more protected routes here
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
