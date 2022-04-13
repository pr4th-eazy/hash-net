import Image from "next/image";
import React from "react";
import styles from "/styles/Homepage.module.css";
import {motion} from 'framer-motion'

const Homepage = () => {
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
      <div className={styles.items}>
        <div className={styles.item}>
          <Image src="/img/cardone.jpg" height={420} width={360} />
          <div className={styles.cardText}>
            <h2>Features</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur <br /> adipisicing  elit .Ea
              quibusdam <br /> sit maiores ipsam  necessitatibus ipsum.
            </p>
          </div>
        </div>
        <div className={styles.item}>
          <Image src="/img/cardtwo.jpg" height={420} width={380}  className={styles.black}/>
          <div className={styles.cardTextTwo}>
            <h2 style={{'color' : '#000000'}}>Shop</h2>
            <p style={{'color' : '#e0c87b'}}>
              Lorem ipsum dolor sit, amet consectetur <br /> adipisicing elit. Ea
              quibusdam sit maiores <br /> ipsam necessitatibus ipsum.
            </p>
          </div>
        </div>
        <div className={styles.item}>
          <Image src="/img/cardthree.jpg" height={420} width={360} />
          <div className={styles.cardText}>
            <h2>Community</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur <br /> adipisicing elit. Ea
              quibusdam sit <br /> maiores ipsam necessitatibus ipsum.
            </p>
          </div>
        </div>
      </div>
      </motion.div>
    </div>
  );
};

export default Homepage;
