
import {LOGO_URL} from "../utils/constants.js"
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
 const Header=()=>{
     const[btnReact,setBtnReact]=useState("Login");
      const onlineStatus=useOnlineStatus();
    return(
        <div className="flex justify-between bg-pink-100">
            <div className="logo-container">
                <img className="w-56"src={LOGO_URL }/>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">Online Status:{onlineStatus?"🟢":"😡"}</li>
                    <li className="px-4" ><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/about">About</Link></li>
                    <li className="px-4"><Link to="/contact">Contact</Link></li>
                    <li className="px-4">Cart</li>
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