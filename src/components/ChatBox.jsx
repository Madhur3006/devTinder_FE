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


  useEffect(() => {
    const socket = createSocketConnection();
    socket.emit("joinChat", { fromUserId, toUserId });
    socket.on("messageReceived", ({ firstName, text }) => {
      setMessages((messages) => [...messages, text]);
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
    <div class="bg-gray-100 max-h-svw flex flex-col max-w-lg mx-auto">
      <div class="bg-blue-500 p-4 text-white flex justify-between items-center">
        <span className="text-2xl text-base-content">{userInfo.firstName}</span>
        <div class="relative inline-block text-left">
          <button
            id="setting"
            class="hover:bg-blue-400 rounded-md p-1"
            onClick={() => navigate("/connections")}
          >
            Go Back
          </button>
        </div>
      </div>

      <div class="flex-1 overflow-y-auto p-4">
        <div class="flex flex-col space-y-2">
          {messages.length !== 0 &&
            messages.map((message) => {
              return (
                <div class="flex justify-end">
                  <div class="bg-blue-200 text-black p-2 rounded-lg max-w-xs">
                    {message}
                  </div>
                </div>
              );
            })}
        </div>
      </div>

      <div class="bg-white p-4 flex items-center">
        <input
          type="text"
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          class="flex-1 border rounded-full px-4 py-2 focus:outline-none text-black"
        />
        <button
          onClick={handleSendMessage}
          class="bg-blue-500 text-white rounded-full p-2 ml-2 hover:bg-blue-600 focus:outline-none"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
