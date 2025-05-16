import React from "react";
import "./whatsApp.css";

const WhatsApp = () => {
  // Replace with your actual phone number (e.g., +1234567890 without spaces or dashes)
  const phoneNumber = "1234567890";
  // Pre-filled message to be sent via WhatsApp
  const message = "Hello, I'm interested in your services!";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="chatbot-widget">
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="chatbot-toggle"
      >
        {/* 
          For production, download the official WhatsApp icon from https://www.whatsapp.com/brand 
          and place it in your project's public folder as 'whatsapp-icon.png', then use src="/whatsapp-icon.png".
          The below URL is a temporary placeholder from a public source.
        */}
        <img
          src="https://cdn-icons-png.flaticon.com/512/124/124034.png"
          alt="WhatsApp"
        />
      </a>
    </div>
  );
};

export default WhatsApp;