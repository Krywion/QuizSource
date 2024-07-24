"use client";

import React, {useContext, useState} from "react";
import styles from "./navbar.module.css";
import ThemeToggle from "@/components/themeToggle/ThemeToggle";
import AuthLinks from "@/components/AuthLinks/AuthLinks";
import Image from "next/image";
import dropdown__icon from "@/assets/dropdown.svg";
import {ThemeContext} from "@/context/ThemeContext";
import DropDownMenu from "@/components/dropdownMenu/DropDownMenu";

export default function Navbar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const {theme} = useContext(ThemeContext)

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

  return (
      <div className={styles.container}>
          <div className={styles.logo}>
              <a href="/">QuizSource</a>
          </div>
          <div className={styles.links}>
              <div className={styles.toggle}>
                  <ThemeToggle/>
              </div>
              <button className={styles.btn}>About</button>
              <AuthLinks/>
          </div>
          <div className={styles.dropdown}>
              <div className={styles.toggle}>
                  <ThemeToggle/>
              </div>
              <div>

              </div>
              <button className={styles.btn} onClick={toggleDropdown}>
                  <Image
                      src={dropdown__icon}
                      alt="Menu"
                      width={20}
                      height={20}
                      className={theme === 'dark' ? styles.dropdown__icon_dark : styles.dropdown__icon_light}
                  />
              </button>
              {isDropdownOpen && <DropDownMenu />}
          </div>
      </div>
  )
}