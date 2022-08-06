import React from "react";
// import { NavLink } from "react-router-dom";
import img from '../logo/netflix.svg';
import avtar from '../logo/avtar.png';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import 'D:/visual S/web dev/reactPRactice/netflix-clone/node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../index.css';

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    
    console.log(document.documentElement.scrollTop);
  if ( document.documentElement.scrollTop > 200) {
    document.getElementById("navbar").style.background = "rgba(0, 0, 0, 100%)";
  }
  else{
    document.getElementById("navbar").style.background = "rgba(0, 0, 0, 10%)";
  }
}

const Nav = () => {
   
    return <>
        <div className="nav " id="navbar" style={{}}>
            <div className=" d-flex align-items-center ">
                <img src={img} style={{width:"80px"}} className="ms-3 "/>
                {/* <ul className=" d-flex list-unstyled mt-3 ms-4">
                    <li>Home</li>
                    <li>TV Shows</li>
                    <li>Movies</li>
                    <li>New & Popular</li>
                    <li>My List</li>
                </ul> */}
            </div>
            <div className="text-white" >
                <SearchIcon className="search_icon " />
                <NotificationsIcon className="notifi_icon ms-3" />
                <img src={avtar} className="Avtar_logo ms-3" alt="Avatar pic" style={{width:"50px"}} />
                <ArrowDropDownIcon fontSize="" className="down_logo me-5" />
            </div>
        </div>
    </>
}

export default Nav;
