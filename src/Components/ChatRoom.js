import React from 'react'
import {useState, useEffect} from 'react';
import { addDoc, collection, onSnapshot, serverTimestamp,where,query, or, orderBy } from 'firebase/firestore';
import { auth, db } from '../firebase-config';

function ChatRoom(props) {
  const {room}=props;
  const [newMessage, setNewMessage]=useState("");
  const messagesRef=collection(db, 'messages')
  const [messages, setMessages]=useState([]);
  
  useEffect(() => {
    const queryMessages=query(messagesRef,where("room","==",room, orderBy("crearedAt")));
    const unsuscribe=onSnapshot(queryMessages,(snapshot)=>{
    let messages=[];
     snapshot.forEach((doc)=>{
        messages.push({...doc.data(),id: doc.id});
      });
      setMessages(messages);
    });
    return ()=>unsuscribe();
  }, []);
  const handleSubmit= async (e)=>{
    e.preventDefault();
    if(newMessage==="") return;

    await addDoc(messagesRef,{
      text:newMessage,
      createdAt:serverTimestamp(),
      user:auth.currentUser.displayName,
      room,
    });
    setNewMessage("");
    };
  return (
<div className='chat-room bg-orange-100 text-black h-screen flex flex-col'>
  <div className='header bg-orange-200 h-8  flex justify-center items-center'>
    <h1 className="font-bold">Welcome to: {room.toUpperCase()}</h1>
  </div>
  <div className='messages'>
    {messages.map((msg) => (
      <div className='msg' key={msg.id}>
      <span className='user font-bold'>{msg.user}</span>
      {msg.text}
      </div>
    ))}
  </div>
  <div className="fixed bottom-0 w-full bg-gray-100 p-4">
    <form onSubmit={handleSubmit} className='new-message-form flex items-center'>
      <input
        className='new-message-input flex-1 py-2 px-4 rounded border border-gray-300 mr-2'
        type='text'
        placeholder='Type a message...'
        onChange={(e) => setNewMessage(e.target.value)}
        value={newMessage}
      />
      <button
        className='send-button bg-orange-400 hover:bg-orange-600 text-white py-2 px-4 rounded'
        type='submit'>Send</button>
    </form>
  </div>
</div>

  )
}

export default ChatRoom
