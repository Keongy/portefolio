import { createContext, useEffect, useState } from "react";


export const LangContext = createContext()

const LangContextProvider = (props) => {
    const [lang, setLang] = useState(true)

    useEffect(() => {
        const localData = localStorage.getItem("langue")
        if (localData) {
            localData === "fr" ? setLang(true) : setLang(false)
        }
    }, [])

    const toggleLang = () => {
        const toggleLang = !lang
        setLang(toggleLang)
        toggleLang ? localStorage.setItem("langue", "fr") : localStorage.setItem("langue", "en")
    }

    return (
        <LangContext.Provider value={{ lang, toggleLang }}>
            {props.children}
        </LangContext.Provider>
    )
}

export default LangContextProvider