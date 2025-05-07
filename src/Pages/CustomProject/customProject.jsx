import React from 'react';
import './CustomProject.css';

const CustomProject = () => {
  return (
    <div className="project-wrapper">
      <div className="content-block">
        <div className="description-area">
          <h1>Custom Projects</h1>
          <p>
            Unique wraps. Precision graphics. Premium protection. Designed to stand out.
          </p>
        </div>
        <div className="visual-area">
          <img src="https://sdmntprnorthcentralus.oaiusercontent.com/files/00000000-ea7c-622f-8223-92d6d38016dc/raw?se=2025-05-06T08%3A16%3A21Z&sp=r&sv=2024-08-04&sr=b&scid=421ae036-4a7a-5799-b13e-869b086f5e45&skoid=a3336399-497e-45e5-8f28-4b88ecca3d1f&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-05-06T03%3A17%3A40Z&ske=2025-05-07T03%3A17%3A40Z&sks=b&skv=2024-08-04&sig=OBJhUMrGfOGGbpkLjwfs0l2/tyF83XVwc0frzqHwX6g%3D" alt="Custom Vinyl Wrap" />
        </div>
      </div>

      <div className="inquiry-section">
        <h2>Contact Us</h2>
        <div className="inquiry-form">
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Your name" required />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Your email" required />
          </div>
          <div className="input-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" placeholder="Your message" required></textarea>
          </div>
          <button type="button">Send Message</button>
        </div>
      </div>
    </div>
  );
};

export default CustomProject;