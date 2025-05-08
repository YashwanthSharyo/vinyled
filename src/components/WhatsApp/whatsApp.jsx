import React, { useState } from "react";
import "./whatsApp.css";

const WhatsApp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const phoneNumber = "919066431968"; // Add your WhatsApp number here

  const handleSend = () => {
    if (!message.trim()) return;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
    setMessage("");
    setIsOpen(false);
  };

  return (
    <div className="chat-widget">
      {isOpen && (
        <div className="chat-box">
          <div className="chat-header">
            <span>Chat with us</span>
            <button onClick={() => setIsOpen(false)}>×</button>
          </div>
          <div className="chat-body">
            <textarea
              placeholder="Type your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
      <button className="chat-toggle" onClick={() => setIsOpen(!isOpen)}>
        <img
          src="https://img.freepik.com/free-vector/whatsapp-icon-design_23-2147900927.jpg?t=st=1746636174~exp=1746639774~hmac=86761630ed764d64d9e9a04a6b88b66f228f7feeb03464a5109905a951d8df50&w=740"
          alt="WhatsApp"
          style={{ width: "100%", height: "100%", borderRadius: "50%" }}
        />
      </button>
    </div>
  );
};

export default WhatsApp;
