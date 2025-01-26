import React,{ createContext, useState } from "react";

export const Context = createContext()

export const TokenContext = ({children}) => {
    const [token, setToken] = useState(JSON.parse(localStorage.getItem("token")) || null)
    const [users, setUsers] = useState(JSON.parse(localStorage.getItem("users")) || [])
    const [list, setList] = useState(JSON.parse(localStorage.getItem("list")) || [])

    localStorage.setItem(("list"), JSON.stringify(list))
    localStorage.setItem("token", JSON.stringify(token))
    localStorage.setItem("users", JSON.stringify(users))


    return(
        <Context.Provider value={{token, list, setList, setToken, users, setUsers}}>
            {children}
        </Context.Provider>
    )
}