import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ContactPage from "../pages/ContactPage";

const basename = process.env.PUBLIC_URL || "";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <HomePage />,
      errorElement: <>404 not found page</>,
    },
    {
      path: "/contact",
      element: <ContactPage />,
    },
  ],
  {
    basename,
  }
);

export default router;
