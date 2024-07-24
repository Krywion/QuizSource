"use client";

import React, {useContext, ReactNode, useState, useEffect} from "react";
import { ThemeContext } from "@/context/ThemeContext";

// Definicja interfejsu dla propsów komponentu
interface ThemeProviderProps {
    children: ReactNode;
}

// Poprawiony komponent ThemeProvider
export default function ThemeProvider({ children }: ThemeProviderProps) {
    const { theme } = useContext(ThemeContext);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if(mounted) {
        return (
            <div className={theme}>
                {children}
            </div>
        );
    }

}
