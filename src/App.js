import React, { useState } from 'react';
import './App.css';
import Auth from './Components/Auth';
import RoomInput from './Components/RoomInput';
import ChatRoom from './Components/ChatRoom';
import Cookies from 'universal-cookie';


const cookies = new Cookies();

function App() {
  const [isAuth, setIsAuth]=useState(cookies.get("auth-token"));
  const[room, setRoom]=useState(null);
 
  if(!isAuth){
  return (
    <Auth setIsAuth={setIsAuth}/> //passing setIsAuth as a prop to Auth component so that we can change the state of isAuth from Auth component
  );
}
return (
  <div>
    {room ? (
      <ChatRoom/> ) : (
        <RoomInput setRoom={setRoom} /> //passing setRoom as a prop to RoomInput component so that we can change the state of room from RoomInput component
    )}
  </div>
)
}
export default App;
