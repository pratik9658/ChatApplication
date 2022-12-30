import React, { useState } from 'react'
import "./Join.css"
import logo from "./logo.jpg"
import { Link } from 'react-router-dom'


let user;
const sendUser = () => {
    user = document.getElementById('joinInput').value;
    // console.log(user);
}
const Join = () => {
    const [name, setname] = useState("")

    return (
        <div className="JoinPage">
            <div className="JoinContainer">
                <img src={logo} alt="Logo" />
                <h1>C Chat</h1>
                <input onChange={(e) => setname(e.target.value)} placeholder='Enter Your Name' type="text" id='joinInput' />
                <Link onClick={(event) => !name ? alert("Name Cant Bs Blank") & event.preventDefault() : null} to="./chat"><button onClick={sendUser} className='joinBtn'>Login</button></Link>

            </div>
        </div >
    )
}

export { user }
export default Join