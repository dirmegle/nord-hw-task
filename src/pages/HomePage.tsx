import { useNavigate, useSearchParams } from "react-router-dom";
import setChannelCookie from "../utils/setChannelCookie";
import { useEffect } from "react";
import Button from "../components/Button/Button";
import WebIllustration from "../assets/web.svg";
import styles from "./Page.module.css";

export default function HomePage() {
  const navigate = useNavigate();
  const [queryParameters] = useSearchParams();
  useEffect(() => {
    setChannelCookie(queryParameters);
  });

  return (
    <section className={styles.containerSection}>
      <div className={styles.containerContent}>
        <h1 className={styles.headline}>
          Stay connected, <br />
          <span className={styles.underlinedText}>securely</span>
        </h1>
        <p className={styles.paragraphText}>
          Protect your digital privacy and stay safe. Our cutting-edge
          technology ensures that your personal and professional information
          remains safe from cyber threats. <br />
          Click the link below and leave us a message.
        </p>
        <Button onClick={() => navigate("/contacts")}>Leave message now</Button>
      </div>
      <div className={styles.image}>
        <img src={WebIllustration} alt="Stay connected, securely" />
      </div>
    </section>
  );
}
