import React from "react";
import style from "/styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={style.container}>
      <div className={style.cardL}>
        <h1 className={style.title}>HASH.</h1>
        <h1 className={style.linkTitle}>
          {/* <Link href="/contact" className={style.link} passHref>
            <>
              <Link href='/Social'>
              <span className={style.linkText}>GET IN TOUCH</span>
              </Link>      
            </>
          </Link> */}
        </h1>
      </div>
      <div className={style.cardS}>
        <div className={style.cardItem}>
          MUMBAI,
          <br /> INDIA
        </div>
        <div className={style.cardItem}>
          CONTACT:- PRATHAMESHASOLKAR17@GMAIL.COM
        </div>
      </div>
      <div className={style.cardS}>
        <div className={style.cardItem}>
          FOLLOW ME:
          <br /> PR4TH4MESHH
        </div>
        <div className={style.cardItem}>
          © 2022 PR4TH
          <br />
          ALL RIGHTS RESERVED
        </div>
       
      </div>
    </div>
  )
};

export default Footer;
