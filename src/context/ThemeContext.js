import { createContext, useEffect, useState } from "react";


export const ThemeContext = createContext()

const ThemeContextProvider = (props) => {
    const [theme, setTheme] = useState(true)


    useEffect(() => {
        const localData = localStorage.getItem("DarkMode")
        if (localData) {
            localData === "dark" ? setTheme(true) : setTheme(false)
        }
    }, [])


    const toggleTheme = () => {
        const toggleTheme = !theme
        setTheme(toggleTheme)
        toggleTheme ? localStorage.setItem("DarkMode", "dark") : localStorage.setItem("DarkMode", "light")
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider