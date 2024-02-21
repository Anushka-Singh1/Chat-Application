import React from 'react'
import {useState} from 'react';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { auth, db } from '../firebase-config';

function ChatRoom(props) {
  const {room}=props;
  const [newMessage, setNewMessage]=useState("");
  const messagesRef=collection(db, 'messages')
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
  <div className='chat-room bg-orange-100 h-screen flex flex-col justify-end'>
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
