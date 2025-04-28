import GlobalImage from "../assets/globe.png"

export default function Header(){
    return(
        <header className="header-bar">
            <img alt="globe-image" src={GlobalImage} />
            <span>my travel journal</span>
        </header>
    )
    
}