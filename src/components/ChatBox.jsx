import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { createSocketConnection } from "../utills/socket";

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const navigate = useNavigate();
  const connections = useSelector((store) => store.connections);
  const user = useSelector((store) => store.user);
  const { toUserId } = useParams();
  const userInfo = connections.find(
    (connection) => connection._id === toUserId
  );
  const fromUserId = user?.info?._id;
  const firstName = user?.info?.firstName
  console.log(firstName);

  useEffect(() => {
    const socket = createSocketConnection();
    socket.emit("joinChat", { fromUserId, toUserId });
    socket.on("messageReceived", ({ firstName, text }) => {
      setMessages((messages) => [...messages, {text, firstName}]);
    });
    return () => {
      socket.disconnect();
    };
  }, [fromUserId, toUserId]);

  const handleSendMessage = () => {
    const socket = createSocketConnection();
    socket.emit("sendMessage", { firstName, fromUserId, toUserId, text: newMessage });
    setNewMessage("");
  };

  return (
    <div className="min-h-screen bg-black-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg flex flex-col w-full max-w-lg h-[600px]">
        <div className="bg-black p-4 text-white flex justify-between items-center rounded-t-lg">
          <span className="text-xl font-semibold">{userInfo?.firstName}</span>
          <button
            className="hover:bg-blue-400 rounded-md p-2 transition-colors"
            onClick={() => navigate("/connections")}
          >
            Go Back
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
          <div className="flex flex-col space-y-3">
            {messages.length !== 0 &&
              messages.map((message, index) => (
                <div key={index} className= {message.firstName === firstName ? 'flex justify-end' : 'flex'}>
                  <div className="bg-blue-500 text-black p-3 rounded-lg max-w-xs break-words">
                    {message.text}
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div className="bg-white p-4 border-t flex items-center gap-2">
          <input
            type="text"
            placeholder="Type your message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          />
          <button
            onClick={handleSendMessage}
            className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-600 focus:outline-none transition-colors"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
