import React from "react";
import styles from "./authLinks.module.css";
import Link from "next/link";

export default function AuthLinks() {

    // TODO - implement actual authentication status
    // temporary status variable to simulate authentication status
    // replace this with actual authentication status from the server
    const status: string = "notAuthenticated";
    return (
        <>
            {status === "notAuthenticated" ? (
                <>
                    <Link href="/login" className={styles.link}>Login</Link>
                </>
            ) : (
                <>
                    <button className={styles.link}>Sign out</button>
                </>
            )}
        </>
    )
}