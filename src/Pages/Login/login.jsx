import { useState } from "react";


export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    referral: "",
  });

  function handleChange(e) {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

 async function handleSubmit(e) {
  e.preventDefault();

  const formBody = new URLSearchParams();
  for (const key in formData) {
    formBody.append(key, formData[key]);
  }

  try {
    const response = await fetch(
      'https://script.google.com/macros/s/AKfycbwogtK-Q0d5t28Wu14SCkJ0Y9vaVMNecnuzPWLGDJG0g8E2mhjs55KHPfktRC2mw5zJ/exec', // 🔁 Replace with the copied URL
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formBody.toString(),
      }
    );

    const result = await response.json();
    console.log("Response from server:", result);
  } catch (err) {
    console.error("Error submitting form:", err);
  }
}



  return (
    <form onSubmit={handleSubmit}>
      <h2>Get in Touch</h2>
      <input
        type="text"
        name="name"
        placeholder="Name"
        required
        value={formData.name}
        onChange={handleChange}
      />
      <br />
      <br />
      <input
        type="email"
        name="email"
        placeholder="Email"
        required
        value={formData.email}
        onChange={handleChange}
      />
      <br />
      <br />
      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        required
        value={formData.phone}
        onChange={handleChange}
      />
      <br />
      <br />
      <select
        name="referral"
        required
        value={formData.referral}
        onChange={handleChange}
      >
        <option value="">How did you find us?</option>
        <option value="Google">Google</option>
        <option value="Friend">Friend</option>
        <option value="Social Media">Social Media</option>
        <option value="Advertisement">Advertisement</option>
        <option value="Other">Other</option>
      </select>
      <br />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}
