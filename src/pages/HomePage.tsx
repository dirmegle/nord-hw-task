import { useSearchParams } from "react-router-dom";
import setChannelCookie from "../utils/setChannelCookie";
import { useEffect } from "react";

export default function HomePage() {
  const [queryParameters] = useSearchParams();
  useEffect(() => {
    setChannelCookie(queryParameters);
  });

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}
