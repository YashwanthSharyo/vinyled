import React, { useState } from "react";
import { InlineWidget } from "react-calendly";
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
  const [viewMode, setViewMode] = useState("form"); // State to toggle between form and calendly

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const appointment = `${date} ${time}`;
    alert(`Appointment booked for ${name} on ${appointment}`);

    // TODO: send this to your backend
    console.log({
      name,
      date,
      time,
    });
  };

  return (
    <div className="contact-container">
      {/* Left Section: Map and Address */}
      <div className="map-address-section">
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.678285496604!2d-0.141890684229785!3d51.50100917963428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604ce37d091cb%3A0x4d3e7f49b3b0f4c8!2s123%20Studio%20Ln%2C%20London%2C%20UK!5e0!3m2!1sen!2sus!4v1697654321890!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="London Studio Location"
          ></iframe>
        </div>
        <div className="address-info">
          <h2>Contact Information</h2>
          <p>
            <strong>Name:</strong> London Studio
          </p>
          <p>
            <strong>Address:</strong> 123 Studio Lane, London, UK
          </p>
          <p>
            <strong>Email:</strong> contact@londonstudio.com
          </p>
          <p>
            <strong>Phone:</strong> +44 123 456 7890
          </p>
        </div>
      </div>

      {/* Right Section: Contact Form and Appointment Booking */}
      <div className="contact-form-section">
        <h1>REQUEST A CALL BACK OR MAKE A BOOKING</h1>
        <p>Use the form below to request a call back or book an appointment:</p>
        <div className="toggle-buttons">
          <button
            type="button"
            className={viewMode === "form" ? "active" : ""}
            onClick={() => setViewMode("form")}
          >
            Request Call Back
          </button>
          <button
            type="button"
            className={viewMode === "calendly" ? "active" : ""}
            onClick={() => setViewMode("calendly")}
          >
            Book Appointment
          </button>
        </div>
        {viewMode === "form" ? (
          <form onSubmit={handleSubmit} noValidate>
            <div>
              <label htmlFor="name">NAME</label>
              <input
                name="name"
                placeholder="First & last name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="email">EMAIL</label>
              <input
                name="email"
                placeholder="Enter your email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="phone">PHONE</label>
              <input
                name="phone"
                placeholder="Enter phone number"
                type="text"
                required
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="carDetails">CAR DETAILS</label>
              <input
                name="carDetails"
                placeholder="Enter make and model of car"
                type="text"
                required
                value={formData.carDetails}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="studio">STUDIO</label>
              <select
                name="studio"
                required
                value={formData.studio}
                onChange={handleChange}
              >
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
              <textarea
                name="request"
                placeholder="Enter your message"
                value={formData.request}
                onChange={handleChange}
              />
            </div>
            <div className="submit-container">
              <button type="submit">SEND</button>
            </div>
          </form>
        ) : (
          <div style={{ padding: "20px" }}>
            <h2 style={{ textAlign: "center" }}>
              Book a 30-Minute Appointment
            </h2>
            <InlineWidget
              url="https://calendly.com/yashwanth-sharyo/30min"
              styles={{ height: "600px", width: "100%" }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
