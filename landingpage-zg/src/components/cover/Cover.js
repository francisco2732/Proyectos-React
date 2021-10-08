import React from 'react'
import "./Cover.css";
import coverVideo from "../../media/coverVideo.mp4";

const Cover = () => {
    return (
        <div className = "cover-container">
            <video className = "video" src={coverVideo} autoPlay loop muted/>
            <h1>ZONA GAMER</h1>
            <p>Juega | Come | Disfruta | Conviertete en Heroe...</p>
        </div>
    )
}

export default Cover
