

import { useState } from 'react';
import "./chat.css";

function Chat({ selectedUser, messages, onSendMessage }) {
  const [input, setInput] = useState('');

  const handleSend = () => {
    onSendMessage(input);
    setInput('');
  };

  return (
    <div className="chat">
      <div className="chat-header">
        <img src={selectedUser.profilePic} alt={selectedUser.name} className="chat-profile-pic" />
        <span>{selectedUser.name}</span> 
        <div className="chat-icons">
          <i className="fas fa-video"></i>
          <i className="fas fa-phone"></i>
        </div>
      </div>

      <div className="chat-body">
        <p className="day">Today</p>
        <div className="description">
          <p>
            Messages and calls are end-to-end encrypted.{" "}
            <a href="https://web.whatsapp.com" target="_blank" rel="noreferrer">
              Click to learn more
            </a>
          </p>
        </div>

        {messages.map((msg, idx) => (
          <p key={idx} className={idx % 2 === 0 ? 'message-received' : 'message-sent'}>
            {msg}
          </p>
        ))}
      </div>

      <div className="chat-footer">
        <i className="fa-regular fa-face-smile emoji-icon"></i>
        <input
          type="text"
          placeholder="Type a message"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        />
        <i className="fa-solid fa-microphone mic-icon"></i>
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
}

export default Chat;


