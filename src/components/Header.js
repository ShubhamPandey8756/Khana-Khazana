
import {LOGO_URL} from "../utils/constants.js"
import { useState } from "react";
import { Link } from "react-router-dom";
 const Header=()=>{
     const[btnReact,setBtnReact]=useState("Login");
      
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo"src={LOGO_URL }/>
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li>Cart</li>
                     <button onClick={()=>{
                        btnReact==="Login"?setBtnReact("Logout"):setBtnReact("Login");
                     }}
                    className="login">{
                    btnReact
                    }</button>
                </ul>
            </div>
        </div>
    )
}
export default Header;