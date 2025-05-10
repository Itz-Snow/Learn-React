import chefIcon from "../assets/chef-claude-icon.png"

export default function Header(){
    return(
        <header className="header">
        <img src={chefIcon} alt="chefIcon"/>
        <span> Chef Claude </span>
        </header>
    )
}