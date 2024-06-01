import { useNavigate, useSearchParams } from "react-router-dom";
import setChannelCookie from "../utils/setChannelCookie";
import { useEffect } from "react";

export default function HomePage() {
  const navigate = useNavigate();
  const [queryParameters] = useSearchParams();
  useEffect(() => {
    setChannelCookie(queryParameters);
  });

  return (
    <div>
      <h1>Home</h1>
      <button type="button" onClick={() => navigate("/contact")}>
        Go to contact form
      </button>
    </div>
  );
}
