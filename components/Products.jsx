import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "/styles/Products.module.css";

const Products = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.more}>More:</h1>
      <div className={styles.prod}>
        <div className={styles.left}>
          <Image
            src="/img/laptop.jpg"
            className={styles.image}
            alt=""
            height={500}
            width={500}
          />
          <div className={styles.title}>GitHub</div>
          <div className={styles.invi}>
            <h2>Github</h2>
            <span>
            <Link href="https://github.com/pr4th-eazy">Click to visit.</Link>
            </span>
          
          </div>
          <div className={styles.text}>
            <Link href="https://github.com/pr4th-eazy">
              Click here to visit.
            </Link>
          </div>
        </div>
        <div className={styles.right}>
          <Image
            src="/img/social.jpg"
            className={styles.image}
            alt=""
            height={500}
            width={500}
          />
          <div className={styles.title}>Social Media</div>
          <div className={styles.text}>
            <Link href="https://github.com/pr4th-eazy">
              Click here to visit.
            </Link>
          </div>
          <div className={styles.inviTwo}>
            <h2>Social media</h2>
            <span>
            <Link href="https://github.com/pr4th-eazy">Click to visit.</Link>
            </span>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
