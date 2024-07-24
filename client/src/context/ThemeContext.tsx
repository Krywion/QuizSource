"use client";

import React, {createContext, useState, ReactNode, FC, useEffect} from "react";

// Zdefiniowanie wartości domyślnej
const defaultTheme = "light";

// Typ dla kontekstu tematycznego
interface ThemeContextProps {
    theme: string;
    toggle: () => void;
}

// Inicjalizacja kontekstu z domyślnymi wartościami
export const ThemeContext = createContext<ThemeContextProps>({
    theme: defaultTheme,
    toggle: () => {},
});

// Funkcja zapisująca wartość tematu do localStorage
const getFromLocalStorage = (): string => {
    if(typeof window !== "undefined") {
        const value = localStorage.getItem("theme");
        return value || defaultTheme;
    }

    return defaultTheme;
}

// Properties dla komponentu dostawcy kontekstu tematycznego
interface ThemeProviderProps {
    children: ReactNode;
}

// Komponent dostawcy kontekstu tematycznego z użyciem hooka useState
export const ThemeContextProvider: FC<ThemeProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<string>(getFromLocalStorage);

    // Funkcja zmieniająca temat
    const toggle = () => {
        setTheme(theme === "light" ? "dark" : "light");
    }

    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{theme, toggle}}>
            {children}
        </ThemeContext.Provider>
    );
};


