import {useState, createContext } from "react";
export const ThemeContext =createContext();
const ThemeContextProvider=({children})=>{
    const [theme,setTheme]=useState("")
    const toggleTheme=()=>{
        if(theme === 'light'){
            setTheme('dark')
        }else{
            setTheme('light')
        
    }
    }
    return(
        <ThemeContext.Provider  value={{theme,isLight: theme==='light',toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider