import React from "react";
import styles from "./navbar.module.css";
import ThemeToggle from "@/components/themeToggle/ThemeToggle";
import AuthLinks from "@/components/AuthLinks/AuthLinks";

export default function Navbar() {
  return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <a href="/">QuizSource</a>
            </div>
            <ThemeToggle />
            <div className={styles.links}>
                <button className={styles.btn}>About</button>
                <AuthLinks />
            </div>
        </div>
  )
}