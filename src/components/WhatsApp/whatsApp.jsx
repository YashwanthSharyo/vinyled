import React from 'react'
import  FloatingWhatsApp  from 'react-floating-whatsapp'

export default function WhatsApp() {
  return (
    <FloatingWhatsApp
      phoneNumber="+918688813480"
      accountName="Sales Team"
      statusMessage="Typically replies within a few minutes"
      chatMessage={`Hi 👋\nWelcome to our store!\nHow can we assist you today?`}
      placeholder="Type your question here..."
      messageDelay={2}
      darkMode={false}
      allowClickAway={true}
      allowEsc={true}
      notification={true}
      notificationDelay={30}
      notificationLoop={3}
      notificationSound={true} // Uses default sound bundled in package
      chatboxHeight={400}
      style={{ zIndex: 999 }}
    />
  )
}
