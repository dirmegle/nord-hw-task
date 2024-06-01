import { RouterProvider } from "react-router-dom";
import router from "./router/Router";
import TagManager from "react-gtm-module";
import { useEffect } from "react";

const tagManagerArgs = {
  gtmId: "GTM-WXR5866",
};

export default function App() {
  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  }, []);
  return <RouterProvider router={router} />;
}
