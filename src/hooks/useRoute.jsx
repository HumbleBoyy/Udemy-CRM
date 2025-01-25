import React from 'react'
import { Billing, Exams, Home, Settings, Students, Teachers } from "../Pages/Dashboard";
import { Login, Register } from "../Pages/Registiration";
import { PATH } from "./usePath";


// Dashboard List Items
export const dashboardList = [
    {
        id:1,
        path:PATH.home,
        element:<Home/>,
        children:[]
    },
    {
        id:2,
        path:PATH.teachers,
        element:<Teachers/>,
        children:[]
    },
    {
        id:3,
        path:PATH.students,
        element:<Students/>,
        children:[]
    },
    {
        id:4,
        path:PATH.billing,
        element:<Billing/>,
        children:[]
    },
    {
        id:5,
        path:PATH.settingsAndProfile,
        element:<Settings/>,
        children:[]
    },
    {
        id:6,
        path:PATH.exams,
        element:<Exams/>,
        children:[]
    }
]

// Registiration List Items
export const registerRoutes = [
    {
        id:1,
        path:PATH.home,
        element:<Login/>
    },
    {
        id:2,
        path:PATH.register,
        element:<Register/>
    }
]
