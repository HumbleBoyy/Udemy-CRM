import React,{ createContext, useState } from "react";

export const Context = createContext()

export const TokenContext = ({children}) => {
    const [token, setToken] = useState(JSON.parse(localStorage.getItem("token")) || null)
    const [users, setUsers] = useState(JSON.parse(localStorage.getItem("users")) || [])

    localStorage.setItem("token", JSON.stringify(token))
    localStorage.setItem("users", JSON.stringify(users))


    return(
        <Context.Provider value={{token, setToken, users, setUsers}}>
            {children}
        </Context.Provider>
    )
}