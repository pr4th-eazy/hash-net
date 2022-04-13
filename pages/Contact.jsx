import React from "react";
import styles from "/styles/Contact.module.css";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contact}>
      <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                scale: 0.8,
                opacity: 0,
              },

              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  delay: 0.4,
                },
              },
            }}
          >
        <div className={styles.title}>Say Hello</div>
        <div className={styles.para}>
          Out there to get shit done. I listen to you and welcome your ideas.{" "}
          <br /> If you have any questions or comments, fill the form. It is
          easy.
        </div>
</motion.div>
        <div className={styles.forms}>
        <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                scale: 0.8,
                opacity: 0,
              },

              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  delay: 0.4,
                },
              },
            }}
          >
          <form
            name="contact-form"
            method="POST"
            action="contact/?success=true"
          >
            <label htmlFor="name">Name *</label>
            <input id="name" name="name" required type="text" />
            <label htmlFor="company">You found me on *</label>
            <input id="company" name="company" required type="text" />
            <label htmlFor="email">E-mail Address *</label>
            <input id="email" type="email" name="email" required />
            <label htmlFor="message">Message *</label>
            <textarea id="message" name="message" required></textarea>
            <button type="submit" formAction="none">
              Submit
            </button>
          </form>
          </motion.div>
      </div>
      
        </div>
    </div>
  );
};

export default Contact;
