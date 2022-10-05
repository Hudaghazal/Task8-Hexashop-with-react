import React from 'react'
import "./Header.css"
import logo from "../../assets/img/H.png"
export const Header = () => {
  return (
    <>
    <div className="nav">
    <div className="logo"> <img src={logo} alt="Hexalogo"/></div>
    <div >
    <ul className="list">
    <li className="list-item">Home</li>
    <li className="list-item">Men's</li>
    <li className="list-item">Women's</li>
    <li className="list-item">Kid's</li>
    <li className="list-item aft">Pages</li>
    <li className="list-item aft">Features</li>
    <li className="list-item">Explore</li>
    </ul>
   </div>
</div>
</>
  )
}
export default Header