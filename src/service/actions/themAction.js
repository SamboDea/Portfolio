import { useDispatch, useSelector } from "react-redux";
import { setStoredTheme } from "../reducers/themReducer";

const useTheme = () => {
    const {storedTheme} = useSelector(state => state.theme);
    const dispatch = useDispatch();

    const getTheme = () => storedTheme;

    const setTheme = value => dispatch(setStoredTheme(value));

    const getPreferredTheme = () => {
        const theme = getTheme();
        if (!theme) {
            return window.matchMedia("(prefers-color-schema: dark)").matches ? "dark" : "light";
        }

        return theme;
    }

    const setPreferredTheme = value => {
        setTheme(value);
        document.documentElement.setAttribute("data-bs-theme", value);
    }

    const toggleTheme = () => getPreferredTheme() === "dark" ? setPreferredTheme("light") : setPreferredTheme("dark");

    return {storedTheme, getPreferredTheme, setPreferredTheme, toggleTheme}
}

export {useTheme}