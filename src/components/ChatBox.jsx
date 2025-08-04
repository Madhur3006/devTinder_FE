import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { createSocketConnection } from "../utills/socket";

const ChatBox = () => {
  const navigate = useNavigate();
  const connections = useSelector((store) => store.connections);
  const user = useSelector((store) => store.user);
  const { userId } = useParams();
  const userInfo = connections.find((connection) => connection._id === userId);

  useEffect(() => {
    const socket = createSocketConnection();
  }, [])

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
          {/* <!-- Messages go here -->
            <!-- Example Message --> */}
          <div class="flex justify-end">
            <div class="bg-blue-200 text-black p-2 rounded-lg max-w-xs">
              Hey, how's your day going?
            </div>
          </div>

          {/* <!-- Example Received Message --> */}
          <div class="flex">
            <div class="bg-gray-300 text-black p-2 rounded-lg max-w-xs">
              Not too bad, just a bit busy. How about you?
            </div>
          </div>
        </div>
      </div>

      <div class="bg-white p-4 flex items-center">
        <input
          type="text"
          placeholder="Type your message..."
          class="flex-1 border rounded-full px-4 py-2 focus:outline-none"
        />
        <button class="bg-blue-500 text-white rounded-full p-2 ml-2 hover:bg-blue-600 focus:outline-none">
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
