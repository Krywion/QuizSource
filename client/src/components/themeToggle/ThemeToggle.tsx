"use client";

import React, {useContext} from "react";
import styles from "./themeToggle.module.css";
import moon from "@/assets/moon.png";
import sun from "@/assets/sun.png";
import Image from "next/image";
import {ThemeContext} from "@/context/ThemeContext";


export default function ThemeToggle() {

    const {theme, toggle} = useContext(ThemeContext);

    console.log(theme);

    return (
        <div className={styles.container} onClick={toggle}>
            <Image src={moon} alt="moon" width={14} height={14} />
            <div className={styles.ball} style={
                theme === "dark"
                    ? {left:1, background:"0f1172a"}
                    : {right: 1, background:"white"}}>

            </div>
            <Image src={sun} alt="sun" width={14} height={14} />
        </div>
    )
}