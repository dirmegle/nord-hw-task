import ContactForm from "../components/ContactForm/ContactForm";
import Message from "../assets/message.svg";
import styles from "./Page.module.css";

export default function ContactPage() {
  return (
    <section className={styles.containerSection}>
      <div className={styles.image}>
        <img src={Message} alt="" />
      </div>
      <div className={styles.containerContent}>
        <h1 className={styles.headline}>Send us a message</h1>
        <ContactForm />
      </div>
    </section>
  );
}
