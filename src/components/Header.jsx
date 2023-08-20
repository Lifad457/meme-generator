import React from "react"
import troll from "../images/troll.png"

function Header() {
    return (
        <header className="header">
            <img src={troll} alt="troll" className="header--troll" />
            <h2 className="header--title">Meme Generator</h2>
        </header>
    )
}
export default Header