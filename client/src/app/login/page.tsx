"use client";

import React, {useContext} from "react";
import styles from "./login.module.css";
import Link from "next/link";
import googleLogo from "@/assets/google-logo.svg";
import appleLogo from "@/assets/apple-logo.svg";
import Image from "next/image";
import {ThemeContext} from "@/context/ThemeContext";

export default function Login() {
    const {theme} = useContext(ThemeContext);
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Sign into QuizSource</h1>
        <div className={styles.authLinks}>
            <Link href={""} className={styles.authLink}>
                <Image src={googleLogo} alt={googleLogo} width={20} height={20}
                className={theme === "dark"
                    ? styles.logoDark
                    : styles.logoLight}/>
                <span>Continue with Google</span>
            </Link>
            <Link href={""} className={styles.authLink}>
                <Image src={appleLogo} alt={appleLogo} width={20} height={20}
                       className={theme === "dark"
                           ? styles.logoDark
                           : styles.logoLight}/>
                <span>Continue with Apple</span>
            </Link>
        </div>
        <div className={styles.line}>
            <span>Or email</span>
        </div>
        <form className={styles.form}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
            <button type="submit" className={styles.btn}>Login</button>
        </form>
    </div>
  );
}