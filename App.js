import { useState } from "react";
import Navbar from "./Components/whatsappclone/Navbar";
import Leftsidebar from "./Components/whatsappclone/Leftsidebar";
import Sidebar from "./Components/whatsappclone/sidebar";
import Chat from "./Components/whatsappclone/Chat";
import "./App.css";

function App() {
  const users = {
    Reddy: {
      name: "Reddy",
      profilePic: "/profile.jpg",
      messages: ["Hey there!", "Hello Whats up?"],
    },
    Prabhas: {
      name: "Prabhas",
      profilePic: "/Prabhas.jpeg",
      messages: [],
    },
    NTR: {
      name: "NTR",
      profilePic: "/NTR.jpeg",
      messages: [],
    },
    Ramcharan: {
      name: "Ramcharan",
      profilePic: "/Ramcharan.jpeg",
      messages: [],
    },
    MaheshBabu: {
      name: "MaheshBabu",
      profilePic: "/Mahesh.jpeg",
      messages: [],
    },
  };

  const [userMessages, setUserMessages] = useState(users);
  const [selectedUser, setSelectedUser] = useState(users["Reddy"]);

  const [isDarkMode, setIsDarkMode] = useState(true);
  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const handleSelectUser = (userName) => {
    setSelectedUser(userMessages[userName]);
  };

  const handleSendMessage = (text) => {
    if (!text.trim()) return;

    const updatedMessages = {
      ...userMessages,
      [selectedUser.name]: {
        ...selectedUser,
        messages: [...selectedUser.messages, text],
      },
    };

    setUserMessages(updatedMessages);
    setSelectedUser(updatedMessages[selectedUser.name]);

    setTimeout(() => {
      const withReply = {
        ...updatedMessages,
        [selectedUser.name]: {
          ...updatedMessages[selectedUser.name],
          messages: [
            ...updatedMessages[selectedUser.name].messages,
            "hey buddy got your message ✨",
          ],
        },
      };
      setUserMessages(withReply);
      setSelectedUser(withReply[selectedUser.name]);
    }, 1000);
  };

  return (
    <div className={`App-container ${isDarkMode ? "dark" : ""}`}>
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

      <Leftsidebar />
      <Sidebar
        selectedUser={selectedUser.name}
        onSelectUser={handleSelectUser}
      />

      <Chat
        selectedUser={selectedUser}
        messages={selectedUser.messages}
        onSendMessage={handleSendMessage}
      />
    </div>
  );
}

export default App;
