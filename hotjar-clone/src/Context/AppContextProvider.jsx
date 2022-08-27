import React,{ createContext, useState } from "react"

export const AppContext=createContext();

export const AppContextProvider=({children})=>{

    const [isAuth,setIsAuth] = useState({auth:false,token:null})

    const handleLogin=(token)=>{
        setIsAuth({auth:true,token:token})
        alert("Logged in successfully")
    }
   
       
    

    return(
        <AppContext.Provider value={{isAuth,handleLogin}}>
            {children}
        </AppContext.Provider>
    )

}