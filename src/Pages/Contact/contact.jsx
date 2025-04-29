import React, { useState } from "react";
import "./contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    carDetails: "",
    studio: "",
    request: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="contact-container">
      {/* Left Section: Contact Information */}
      <div className="contact-info">
        <h2>Contact Information</h2>
        <p><strong>Name:</strong> London Studio</p>
        <p><strong>Address:</strong> 123 Studio Lane, London, UK</p>
        <p><strong>Email:</strong> contact@londonstudio.com</p>
        <p><strong>Phone:</strong> +44 123 456 7890</p>
      </div>

      {/* Right Section: Contact Form */}
      <div className="contact-form">
        <h1>/ REQUEST A CALL BACK OR MAKE A BOOKING</h1>
        <p>Use the form below to request a call back or booking:</p>
        <form onSubmit={handleSubmit} noValidate>
          <div>
            <label htmlFor="name">NAME</label>
            <input name="name" placeholder="First & last name" type="text" required value={formData.name} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="email">EMAIL</label>
            <input name="email" placeholder="Enter your email" type="email" required value={formData.email} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="phone">PHONE</label>
            <input name="phone" placeholder="Enter phone number" type="text" required value={formData.phone} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="carDetails">CAR DETAILS</label>
            <input name="carDetails" placeholder="Enter make and model of car" type="text" required value={formData.carDetails} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="studio">STUDIO</label>
            <select name="studio" required value={formData.studio} onChange={handleChange}>
              <option value="">Select a Studio</option>
              <option value="Bristol">Bristol</option>
              <option value="Midlands">Midlands</option>
              <option value="Leeds">Leeds</option>
              <option value="London">London</option>
              <option value="Southampton">Southampton</option>
              <option value="Bahrain">Bahrain</option>
              <option value="Dubai">Dubai</option>
              <option value="Kuwait">Kuwait</option>
              <option value="Qatar">Qatar</option>
              <option value="Thailand">Thailand</option>
              <option value="Taiwan">Taiwan</option>
            </select>
          </div>
          <div>
            <label htmlFor="request">REQUEST</label>
            <textarea name="request" placeholder="Enter your message" value={formData.request} onChange={handleChange} />
          </div>
          <div className="submit-container">
            <button type="submit">SEND</button>
          </div>
        </form>
      </div>
    </div>
  );
}