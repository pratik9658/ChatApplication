// import socketIO from "socket.io-client";
import './App.css';
import Chat from './component/Chat/Chat';
import React from "react";
import ReactDOM from "react-dom/client";
import Join from './component/Join/Join';
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";

// import { BrowserRouter as Router, Route } from "react-router-dom";


// const ENDPOINT = 'http://localhost:4500/';
// const socket = socketIO(ENDPOINT, { transports: ['websocket'] });


function App() {

  // socket.on("connect", () => {

  // })

  return (
    <div className="App">

      <Router>
        <Routes>
          <Route exact path="/" element={<Join />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
