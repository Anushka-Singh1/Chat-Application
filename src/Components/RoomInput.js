import React, {useRef} from 'react'

function RoomInput(props) {
    const { setRoom } = props;
    const roomInputRef = useRef(null);

    const handleEnterRoom = () => {
        setRoom(roomInputRef.current.value);
      };
    
  return (
    <div className='room'>
      <label>Enter Room Name</label>
      <input ref={roomInputRef} />
      <button onClick={handleEnterRoom}>Enter Chat</button>
    </div>
  )
}

export default RoomInput
