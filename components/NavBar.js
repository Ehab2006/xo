"use client";

import React, { useEffect } from "react"

function NavBar(){
    let [click , setClick] = React.useState("red")

    useEffect(()=>{
        document.getElementById("nav").style.background = click
    } , [click])
    return(
        <nav onClick={()=>{
            if(click == "red"){
                setClick("green")
            }else{
                setClick("red")
            }
        }} id="nav" className="flex justify-center bg-white">
            <h1>navBar</h1>
        </nav>
    )
}

export default NavBar;