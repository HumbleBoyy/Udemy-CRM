import React from 'react'
import { Billing, Exams, Home, Settings, Students, Teachers } from "../Pages/Dashboard";
import { Login, Register } from "../Pages/Registiration";
import { PATH } from "./usePath";
import { TbHome2, TbHomeEdit } from 'react-icons/tb';
import { PiStudentBold } from 'react-icons/pi';
import { RiBankLine } from 'react-icons/ri';
import { IoSettingsOutline } from 'react-icons/io5';
import { ImStatsBars } from 'react-icons/im';
import { AddList, Profile } from '../Pages/NestedPages';


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
        children:[
            {
                id:7,
                path:PATH.teachersAdd,
                element:<AddList/>,
                children:[]
            },
            {
                id:8,
                path:PATH.teachersProfile,
                element:<Profile/>,
                children:[]
            }
        ]
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

export const navbarList = [
    {
        id:1,
        title:"Dashboard",
        path:PATH.home,
        icon:<TbHome2 />
    },
    {
        id:2,
        title:"Teachers",
        path:PATH.teachers,
        icon:<TbHomeEdit />
    },
    {
        id:3,
        title:"Students",
        path:PATH.students,
        icon:<PiStudentBold />
    },
    {
        id:4,
        title:"Billing",
        path:PATH.billing,
        icon:<RiBankLine />
    },
    {
        id:5,
        title:"Settings",
        path:PATH.settingsAndProfile,
        icon:<IoSettingsOutline />
    },
    {
        id:6,
        title:"Exams",
        path:PATH.exams,
        icon:<ImStatsBars />
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
