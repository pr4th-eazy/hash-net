import Image from "next/image";
import React from "react";
import styles from "/styles/Socials.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

const Socials = () => {
  return (
    <div className={styles.container}>
      <div className={styles.items}>
        <div className={styles.item}>
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
            <Image
              src="/img/twitter.jpg"
              alt=""
              height="400"
              width="400"
              className={styles.image}
            />
            <div className={styles.title}>Twitter.</div>
            <div className={styles.text}>
              <Link href="https://twitter.com/pr4th4meshh">
                Click here to visit.
              </Link>
            </div>
            <div className={styles.inviTwo}>
              <h2 style={{'color' : 'blue' , 'margin-bottom' : '0px'}}>Twitter</h2>
              <span>
                <Link href="https://twitter.com/pr4th4meshh">
                  Click to visit.
                </Link>
              </span>
            </div>
          </motion.div>
        </div>
        <div className={styles.item}>
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
            <Image
              src="/img/insta.jpg"
              alt=""
              height="400"
              width="400"
              className={styles.image}
            />
            <div className={styles.title}>Instagram.</div>
            <div className={styles.text}>
              <Link href="https://instagram.com/pr4th4meshh">
                Click here to visit.
              </Link>
            </div>
            <div className={styles.inviTwo}>
              <h2 style={{'color' : 'violet' , 'margin-bottom' : '0px'}}>Instagram</h2>
              <span>
                <Link href="https://instagram.com/pr4th4meshh">
                  Click to visit.
                </Link>
              </span>
            </div>
          </motion.div>
        </div>
        <div className={styles.item}>
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
            <Image
              src="/img/fb.jpg"
              alt=""
              height="400"
              width="400"
              className={styles.image}
            />
            <div className={styles.title}>Facebook.</div>
            <div className={styles.text}>
              <Link href="https://facebook.com">Click here to visit.</Link>
            </div>
            <div className={styles.inviTwo}>
              <h2 style={{'color' : 'lightblue' , 'margin-bottom' : '0px'}}>Facebook</h2>
              <span>
                <Link href="https://facebook.com">
                  Click to visit.
                </Link>
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Socials;
