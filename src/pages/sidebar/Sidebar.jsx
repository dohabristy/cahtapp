import React from 'react'
import '../sidebar/sidebar.css'
import profile from "./profile/dp.jpg"
import { IoHomeOutline } from "react-icons/io5";
import { IoMdLogOut } from "react-icons/io";
import { AiFillMessage } from "react-icons/ai";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import { Link, NavLink } from 'react-router-dom';
import { getAuth } from "firebase/auth";
import { useSelector, useDispatch } from 'react-redux'
const Sidebar = () => {
    const data = useSelector((state) => state.loginuserdata.value)
    console.log(data.email  );
    const auth = getAuth();
    const userinfo = auth.currentUser;
    // console.log(userinfo.displayName);
    
  return (
    <div className='sidebar-box'>
        <div className=''>
            <div className='profile'>
                    <img src={profile} alt="" />
            </div>
            <h3 className='User'>{userinfo && userinfo.displayName}</h3>
        </div>
        <div className='navigation'> 
            <ul>
                <li>
                    <NavLink to="/home">
                        <IoHomeOutline />
                    </NavLink>
                    
                </li>
                <li>
                    <NavLink to="/message">
                        <AiFillMessage />
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/notification">
                        <IoIosNotificationsOutline />
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/setting">
                        <CiSettings />
                    </NavLink>
                </li>
                
            </ul>
        </div>
        <div className='logout'>
            <button><IoMdLogOut /></button>
        </div>
    </div>
  )
}

export default Sidebar
