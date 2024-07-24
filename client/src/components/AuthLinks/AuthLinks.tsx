import React from "react";
import styles from "./authLinks.module.css";

export default function AuthLinks() {

    // TODO - implement actual authentication status
    // temporary status variable to simulate authentication status
    // replace this with actual authentication status from the server
    const status: string = "notAuthenticated";
    return (
        <>
            {status === "notAuthenticated" ? (
                <>
                    <button className={styles.btn}>Sign in</button>
                    <button className={styles.btn}>Sign up</button>
                </>
            ) : (
                <>
                    <button className={styles.btn}>Sign out</button>
                </>
            )}
        </>
    )
}