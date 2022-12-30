import React, { useEffect, useState } from 'react'
import socketIO from "socket.io-client"
import { user } from '../Join/Join';
import "./Chat.css";
import Message from "../Message/Message";
import ReactScrollBottom from "react-scroll-to-bottom";
import closeIcon from "../../images/closeIcon.png";

const ENDPOINT = "http://localhost:4500"

let socket;
const Chat = () => {

    const [id, setid] = useState(" ")
    const [messages, setMessage] = useState([])
    const send = () => {
        const message = document.getElementById('chatInput').value;
        socket.emit('message', { message, id });
        document.getElementById('chatInput').value = " ";
    }
    
    console.log(messages);
    useEffect(() => {
        socket = socketIO(ENDPOINT, { transports: ['websocket'] });

        socket.on('connect', () => {
            alert("Connected");
            setid(socket.id);
        })
        // console.log(socket);
        socket.emit('joined', { user })

        socket.on('welcome', (data) => {
            setMessage([...messages,data]);
            console.log(data.user, data.message);
        })

        socket.on('userJoined', (data) => {
            setMessage([...messages,data]);
            console.log(data.user, data.message);
        })

        socket.on('leave', (data) => {
            setMessage([...messages,data]);
            console.log(data.user, data.message);
        })




        return () => {
            // socket.emit("disconnect");
            socket.disconnect();
            socket.off();
        }
    }, [])

    useEffect(() => {
        socket.on('sendMessage', (data) => {
            
            setMessage([...messages,data]);
            console.log(data.user, data.message, data.id);
        })

        return () => {
            socket.off();

        }
    }, [messages])

    return (
        <div className="ChatPage">
            <div className="chatContainer">
                <div className="header">
                    <h2>Chat App</h2>
                    <a href='/'> <img src={closeIcon} alt="Close"/></a>
                </div>
                <ReactScrollBottom className="chatBox">
                { messages.map((item ,i) => <Message user={item.id===id?'':item.user} message={item.message} classs={item.id===id?'right':'left'}/>)}
                </ReactScrollBottom>
                <div className="inputBox">
                    <input onKeyPress={(event)=>event.key === 'Enter' ? send() : null } type="text" id='chatInput' />
                    <button onClick={send} className="sendBtn">Send</button>
                </div>
            </div>
        </div>
    )
}

export default Chat


