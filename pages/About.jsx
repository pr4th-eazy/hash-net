import Image from "next/image";
import React from "react";
import styles from "/styles/About.module.css";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className={styles.container}>
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
      <div className={styles.title}>About</div>
      </motion.div>
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
      <div className={styles.sub}>
        Hello, I am Hash, a self-taught photographer.
      </div>
      </motion.div>
      <div className={styles.items}>
        <div className={styles.left}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                scale: .8,
                opacity: 0,
              },

              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  delay: .4,
                },
              },
            }}
          >
            <p>
              I love mountains. I am a big-time sucker for making and capturing
              moments as I go. Being a photographer was not something I dreamt
              of when I was 7. The yearning to communicate my feelings on
              wilderness began in 2015.
            </p>
          </motion.div>
        </div>
        <div className={styles.right}>
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
            <p>
              A fascination for landscapes and nature, I use photography to
              document the world in its raw wild form. Photography gives me the
              liberty to tell my stories visually. And it also helps me to gain
              perspective and escape into my own dimension. My incessant hunger
              for perfection and details got me more and more hooked to
              photography, and thus, I started composing moody and reflective
              landscapes.
            </p>
          </motion.div>
        </div>
      </div>
      <div className={styles.items}>
        <div className={styles.leftTwo}>
          <Image src="/img/about.jpg" alt="" height="500" width="500" />
        </div>
        <div className={styles.rightTwo}>
          Moody has always been my aesthetic, and I want to help you transform
          your photos and videos to achieve that cinematic, moody feel. <br />
          <br /> If you are interested, you can find all the visual elements,
          that I use as well, on this visual store. On YouTube, I go by Hash.{" "}
          <br />
          <br /> There I share my representations of my creations, and create
          tutorials on photo and video editing. I hope you have fun exploring.
          So, do not forget to come back for more. You can connect with me all
          on my socials, drop a message, and tell me about you! Lets create.
        </div>
      </div>
    </div>
  );
};

export default About;
