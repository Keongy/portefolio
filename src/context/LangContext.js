import { createContext, useState } from "react";


export const LangContext = createContext()

const LangContextProvider = (props) => {
    const [lang, setLang] = useState(true)

    const toggleLang = () => {
        setLang(!lang)
    }

    return (
        <LangContext.Provider value={{ lang, toggleLang }}>
            {props.children}
        </LangContext.Provider>
    )
}

export default LangContextProvider