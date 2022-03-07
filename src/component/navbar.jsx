import React from "react";
import { Link, NavLink, useParams } from "react-router-dom";


const Navbar = () => {


    return (

        <>
            {/* <ul>
                <li> <Link  to="/" >Home</Link> </li>
                <li> <Link to="/about" >About</Link> </li>
                <li> <Link to="/contact" >Contact</Link> </li>

            </ul> */}

            <ul>

                <li> <NavLink style={({isActive})=>{return {color: isActive? "red": ""}}} to="/"> Home</NavLink> </li>
                <li> <NavLink   style={({isActive})=>{return {color: isActive? "red": ""}}} to="/about"> About</NavLink> </li>
                <li> <NavLink  style={({isActive})=>{return {color: isActive? "red": ""}}} to="/Contact"> Contact</NavLink> </li>
                <li> <NavLink  style={({isActive})=>{return {color: isActive? "red": ""}}} to="/login"> Login</NavLink> </li>
                <li> <NavLink  style={({isActive})=>{return {color: isActive? "red": ""}}} to="/dashboard">Dashboard</NavLink> </li>
                
                
            </ul>
        </>
    )
}

export default Navbar