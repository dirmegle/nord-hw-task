import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ContactPage from "../pages/ContactPage";
import React from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <>404 not found page</>,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
]);

export default router;
