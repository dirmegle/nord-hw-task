import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import HomePage from "../pages/HomePage";
import ContactPage from "../pages/ContactPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <>404 not found page</>,
    children: [
      { path: "/", element: <HomePage /> },
      {
        path: "contacts",
        element: <ContactPage />,
      },
    ],
  },
]);

export default router;
