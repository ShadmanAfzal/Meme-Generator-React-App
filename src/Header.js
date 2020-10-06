import React from "react";
import img from "./meme.png"
function Header()
{
    return <div className="Header">
        <img src={img} className="memeface" alt="memeface"/>
        <h2>Meme Generator</h2>
    </div>
}

export default Header;