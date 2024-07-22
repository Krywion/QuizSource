import React from "react";
import styles from "./navbar.module.css";

export default function Navbar() {
  return (
        <div className={styles.container}>
            <div>
                <a href="/">QuizSource</a>
            </div>
            <div>
                <button className={styles.btn}>About</button>
                <button className={styles.btn}>Sign in</button>

            </div>
        </div>
  )
}