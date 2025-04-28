import sectionImage from "../assets/React_logo.png"

import Navbar from "./Navbar"

export default function Header(){
  return(
  <header className="header">
    <div className="react-fact">
      <img src={sectionImage} alt='React Logo' className="nav-logo"></img>
      <span >ReactFacts</span>
    </div>
    <Navbar/>
  </header>)
}