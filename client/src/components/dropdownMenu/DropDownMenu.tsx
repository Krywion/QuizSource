
import React from "react";
import AuthLinks from "@/components/AuthLinks/AuthLinks";
import styles from "./dropdownMenu.module.css";


export default function DropDownMenu() {
    return (
        <div className={styles.container}>
            <button className={styles.btn}>About</button>
            <AuthLinks/>
        </div>
    )
}