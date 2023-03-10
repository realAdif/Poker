import React, { useState } from 'react';
import './index.css'
import {
    FaGulp,
    FaBars,
    FaUserFriends,
    FaAddressBook,
    FaBox,
    FaShoppingBag,
    FaThList
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Table Setup",
            icon:<FaUserFriends/>
        },
        {
            path:"/about",
            name:"Player Setup",
            icon:<FaAddressBook/>
        },
        {
            path:"/PrizeStructure",
            name:"Prize Structure",
            icon:<FaBox/>
        },
        {
            path:"/comment",
            name:"Payout Reconciliation",
            icon:<FaGulp/>
        },
        {
            path:"/product",
            name:"Player Results",
            icon:<FaShoppingBag/>
        },
        {
            path:"/TourmamentClock",
            name:"Tourmament Clock",
            icon:<FaThList/>
        }
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   {/* <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Poker</h1> */}
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};
export default Sidebar