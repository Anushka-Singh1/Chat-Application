import React, { useRef } from 'react';


function RoomInput(props) {
    const { setRoom } = props;
    const roomInputRef = useRef(null);

    const handleEnterRoom = () => {
        setRoom(roomInputRef.current.value);
    };

    return (
        <div className='room'>
            <div className="flex flex-col justify-center items-start mt-40 ml-1 mr-1 md:ml-[32.5vw] ">
                <div className="w-full max-w-xl bg-nav_color p-6 rounded-lg shadow-lg">
                    <div className="px-3 py-1 text-center">
                        <img
                            className="h-auto mt-3 mx-auto"
                            src="/Enter Room.jpg"
                            alt="me"
                            width={300}
                            height={80}
                        />
                        <label htmlFor="roomName" className="block mb-2 text-3xl font-semibold leading-normal">Enter Room Name</label>
                        <input id="roomName" ref={roomInputRef} className="border border-gray-400 p-2 mb-2 w-full mt-1" />
                        <button onClick={handleEnterRoom} className="bg-orange-400 hover:bg-orange-600 text-white font-bold mt-2 py-2 px-2 rounded">
                            Enter Chat
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RoomInput;
