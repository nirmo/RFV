import logo from './logo.svg';
import './App.css';
import io from 'socket.io-client'
import { useEffect, useState } from "react"

const socket = io.connect("http://localhost:3001");

function App() {
  const [messageReceived, setMessageReceived] = useState("");
  const sendMessage = () => {
    socket.emit("from_frontend", "RealFaceValue");
  };

  useEffect(() => {
    socket.on("from_backend", (data) => {
      setMessageReceived(data);
    });
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <button onClick={sendMessage}>Send Message</button>
      <h1>{messageReceived}</h1>
      </header>
    </div>
  );
}

export default App;
