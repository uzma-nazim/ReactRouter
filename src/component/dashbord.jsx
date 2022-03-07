import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = ()=>{

let redirect  = useNavigate()
    return(
        <div>
            <h1>Dashboard</h1>
            <button onClick={()=>redirect("/logout")} >Logout</button>
        </div>
    )

}

export default Dashboard