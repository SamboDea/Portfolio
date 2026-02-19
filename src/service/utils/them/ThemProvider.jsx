import React, { useEffect } from "react";
import {useTheme} from "../../actions/themAction";

const ThemeProvider = ({ children }) => {
    const { storedTheme, getPreferredTheme, setPreferredTheme, toggleTheme } =
        useTheme();

    useEffect(() => {
        setPreferredTheme(getPreferredTheme());
        const themeSwitcher = document.getElementById("theme-switcher");

        themeSwitcher.addEventListener("click", toggleTheme);

        return () => {
            themeSwitcher.removeEventListener("click", toggleTheme);
        };
        // eslint-disable-next-line
    }, [storedTheme]);

    return <div>{children}</div>;
};

export default ThemeProvider;
