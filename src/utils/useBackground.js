import { useState, useContext, createContext } from "react";

const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
    const [background, setBackground] = useState("bg1.svg");

    return (
        <ThemeContext.Provider value={{ background, setBackground }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useBackground = () => useContext(ThemeContext);
