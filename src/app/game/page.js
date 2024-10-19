"use client";

import React from "react";

let List = [
    {id:0 , value:"0"} ,
    {id:1 , value:"1"} ,
    {id:2 , value:"2"} ,
    {id:3 , value:"3"} ,
    {id:4 , value:"4"} ,
    {id:5 , value:"5"} ,
    {id:6 , value:"6"} ,
    {id:7 , value:"7"} ,
    {id:8 , value:"8"} ,
]

export default function Game() {
    let [ player , setPlayer ] = React.useState("X")

    const message = (text)=>{
        document.getElementById("Info").innerHTML = text
        document.getElementById("Game").style.pointerEvents = "none"
        setInterval(()=>{
            window.location.reload()
        } , 3000)
        
    }
    const play = (postion)=>{
        if (List[postion].value == postion ){

            List[postion].value = player
            
            document.getElementById(postion).innerHTML = player

            if(List[0].value == List[1].value && List[1].value == List[2].value){
                message(`The winner is ${player} player.`)
            }else if(List[3].value == List[4].value && List[4].value == List[5].value){
                message(`The winner is ${player} player.`)
            }else if(List[6].value == List[7].value && List[7].value == List[8].value){
                message(`The winner is ${player} player.`)
            }else if(List[0].value == List[3].value && List[3].value == List[6].value){
                message(`The winner is ${player} player.`)
            }else if(List[1].value == List[4].value && List[4].value == List[7].value){
                message(`The winner is ${player} player.`)
            }else if(List[2].value == List[5].value && List[5].value == List[8].value){
                message(`The winner is ${player} player.`)
            }else if(List[0].value == List[4].value && List[4].value == List[8].value){
                message(`The winner is ${player} player.`)
            }else if(List[2].value == List[4].value && List[4].value == List[6].value){
                message(`The winner is ${player} player.`)
            }else if(
                (List[0].value == "X" || List[0].value == "O") && 
                (List[1].value == "X" || List[1].value == "O")&&
                (List[2].value == "X" || List[2].value == "O")&&
                (List[3].value == "X" || List[3].value == "O")&&
                (List[4].value == "X" || List[4].value == "O")&&
                (List[5].value == "X" || List[5].value == "O")&&
                (List[6].value == "X" || List[6].value == "O")&&
                (List[7].value == "X" || List[7].value == "O")&&
                (List[8].value == "X" || List[8].value == "O")){
                    message("The draw.")
            }

            if(player == "X"){
                setPlayer("O")
            }else if(player == "O"){
                setPlayer("X")
            }

        }else{
            undefined
        }
    }

  return (
    <div className="flex flex-row justify-center items-center bg-gradient-to-r from-blue-950 to-red-950 h-screen">
        
        <div className="grid grid-cols-3 gap-4" id="Game">
            <h1 id="Info" className="bg-white rounded-lg col-span-3 h-16 flex flex-row justify-center items-center text-blue-600">{player} Player</h1>
            {
                List.map((i)=>{
                    return(
                        <div key={i.id} className="bg-white min-h-24 min-w-24 rounded-lg hover:bg-gray-400" >
                            <strong className="flex flex-row justify-center items-center h-full text-blue-600" id={i.id.toString()} onClick={()=> play(i.id)}></strong>
                        </div>
                    )
                })
            }
        </div>
      
    </div>
  );
}
