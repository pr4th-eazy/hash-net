import Link from "next/link";
import React from "react";
import styles from "/styles/Navbar.module.css";
import { FaSearch, FaHamburger } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { VscGithub } from "react-icons/vsc";
import { MdOutlineSubject } from "react-icons/md";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <span href='/'>HASH.</span>
      </div>

      <div className={styles.item}>
        <div className={styles.list}>
          <ul>
            <li
              style={{ borderBottom: "1px solid black", paddingBottom: "5px" }}
            >
              <Link href="/">HOME</Link>
            </li>
            <li>
              <Link href="/Socials">SOCIALS</Link>
            </li>
            <li>
              <Link href="/About">ABOUT</Link>
            </li>
            <li>
              <span>
                <Link href="/Contact">CONTACT</Link>
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.itemGit}>
        <span>
          <Link href="https://github.com/pr4th-eazy">
            <VscGithub size={28} />
          </Link>
        </span>
      </div>
      <div className={styles.hamburger} onClick={() => setOpen(!open)}>
        <div className={styles.line} />
        <div className={styles.line} />
        <div className={styles.line} />
      </div>
      <ul
        onClick={() => setOpen(false)}
        className={styles.menu}
        style={{ right: open ? "0px" : "-50vw" }}
      >
         <li className={styles.menuItem}>
          <Link href="/">HOME</Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/Socials">SOCIALS</Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/About">ABOUT</Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/Contact">CONTACT</Link>
        </li>
       
      </ul>
    </div>
  );
};

export default Navbar;
