import React from "react";
import { Link } from "react-router-dom"

import {useSelector} from "react-redux"


export default function Navbar(){
    const items = useSelector((state)=>state.cart)
    return(
        <>
        
        <div className="w-full h-12 bg-slate-800 text-yellow-100 flex items-center justify-between px-64">
             <div><Link to="/">Home</Link></div>
             <div><Link to="/cart"> cart:{items.length}</Link></div>
        </div>
        </>
    )
}