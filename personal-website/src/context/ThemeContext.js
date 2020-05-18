import React, { useEffect, useState, useContext, createContext } from "react"

export const ThemeContext = createContext();

export function ThemeProvider({ children )} {
    const [dark, setDark] = useState(true)

    const value = { dark, setDark };

    return (
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    );
}