import React, { useState, useEffect, useRef } from "react";
import "./whatsApp.css";

const WhatsApp = () => {
  const [isOpen, setIsOpen] = useState(false); // Start closed
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi there! How can I help you today?" }
  ]);
  const [input, setInput] = useState("");
  const audioRef = useRef(null); // Audio reference

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);

    setTimeout(() => {
      const botReply = { sender: "bot", text: "Thanks for your message!" };
      setMessages((prev) => [...prev, botReply]);
    }, 1000);

    setInput("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSend();
  };

  useEffect(() => {
    const chatbotBody = document.querySelector(".chatbot-body");
    if (chatbotBody) {
      chatbotBody.scrollTop = chatbotBody.scrollHeight;
    }
  }, [messages]);

  // Open chatbot after 10 seconds with sound
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
      audioRef.current?.play();
    }, 10000); // 10 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="chatbot-widget">
      {/* Notification sound */}
      <audio ref={audioRef} src="/sounds/notification.mp3" preload="auto" />

      {isOpen ? (
        <div className="chatbot-box">
          <div className="chatbot-header">
            <span>WhatsApp ChatBot</span>
            <button onClick={() => setIsOpen(false)}>×</button>
          </div>

          <div className="chatbot-body">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`message ${msg.sender === "user" ? "user" : "bot"}`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div className="chatbot-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Type your message..."
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      ) : (
        <button className="chatbot-toggle" onClick={() => setIsOpen(true)}>
          💬
        </button>
      )}
    </div>
  );
};

export default WhatsApp;
