import React, {Component} from 'react';
import {io} from 'socket.io-client';

class App extends Component{
  constructor() {
    super()
    this.socket = io("http://localhost:3001/");

    this.socket.on("Message", (data)=>{
      console.log(data)
    })

    this.socket.on("Broadcast", (clientData)=>{
      console.log(clientData)
    })
    this.socket.on("exclusiveBroadcast", (clientData)=>{
      console.log(clientData)
    })
    this.socket.on("joinSuccess", (clientData)=>{
      console.log(clientData)
    })
    this.socket.on("sendRoomMessage", (data)=>{
      console.log(data)
    })
  }
  sendMessage = ()=>{
    this.socket.emit("Message", "Salme ishq from frontend")
  }
  sendBroadcast = ()=>{
    this.socket.emit("Broadcast", "Salme ishq to all from frontend")

  }

  exclusiveBroadcast = ()=>{
    this.socket.emit("exclusiveBroadcast", "Exclusive Broadcast")
    
  }
  joinRoom = ()=>{
    this.socket.emit("JoinTheRoom", "Request to join the server room")
  }
  roomMessage = ()=>{
    this.socket.emit("sendRoomMessage", "Welcome to the chat room" )
  }
  
  render () {
    return(
      <>
        <h1>Frontend</h1>
        <button onClick={this.sendMessage}>
          Click Me
        </button>
        <p></p>
        <button onClick={this.sendBroadcast}>Bodcast Message</button>
        <p></p>
        <button onClick={this.exclusiveBroadcast}>Exclusive Message Message</button>
        <p></p>
        <button onClick={this.joinRoom}>Join Server</button>
        <p></p>
        <button onClick={this.roomMessage}>Send Message to the Room</button>
      </>
    )
  }
}

export default App;