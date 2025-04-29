import React from "react";
import "./team.css";

export default function Team() {
  const TeamMember = ({ name, role, imageSrc }) => (
    <div className="team-member">
      <img src={imageSrc} alt={name} loading="lazy" />
      <h2>{name}</h2>
      <h3>{role}</h3>
    </div>
  );

  return (
    <div className="team-container">
      <div className="team-hero">
        <div>
          <h2>
            <span>/</span>THE LONDON TEAM
          </h2>
          <p>Meet the team</p>
        </div>
      </div>

      <div className="team-section">
        <h4 className="team-title">Management Team</h4>
      </div>

      <div className="team-grid">
        <TeamMember
          name="Nabil"
          role="Co Founder & CEO"
          imageSrc="https://i.shgcdn.com/20ef8c26-95cd-464f-a1db-2b1f23f51a50/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
        />
        <TeamMember
          name="Mazin"
          role="Co Founder & COO"
          imageSrc="https://i.shgcdn.com/fe9674d6-f00e-4598-9624-e9951375f536/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
        />
        <TeamMember
          name="Chris"
          role="Commercial Director"
          imageSrc="https://i.shgcdn.com/f60552c1-c7a0-4c5b-a777-44a7b0d280c1/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
        />
        <TeamMember
          name="Thomas"
          role="General Manager"
          imageSrc="https://i.shgcdn.com/1b47cd3c-ea04-4ee6-a770-744844b3d456/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
        />
        <TeamMember
          name="Sunil"
          role="Workshop Manager"
          imageSrc="https://i.shgcdn.com/2656cf62-3876-46d0-bcf1-5e74ba5e74ae/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
        />
        <TeamMember
          name="Gautam"
          role="Sales Manager"
          imageSrc="https://i.shgcdn.com/9680f090-02d2-41d8-a0fc-93affe1c0902/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
        />
      </div>

      <div style={{ backgroundColor: "#f1f1f1" }}>
        <div className="team-section">
          <h4 className="team-title">Sales Team</h4>
        </div>
        <div className="team-grid">
          <TeamMember
            name="Hass"
            role="Business Manager"
            imageSrc="https://i.shgcdn.com/a3b6d4c1-a313-4589-b956-a7ac1d5dcc7d/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
          />
          <TeamMember
            name="Sheyaan"
            role="Sales"
            imageSrc="https://i.shgcdn.com/25dde2ef-c56a-4ca4-a8fc-fd413dd79e36/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
          />
          <TeamMember
            name="Mohammad"
            role="Sales"
            imageSrc="https://i.shgcdn.com/f60552c1-c7a0-4c5b-a777-44a7b0d280c1/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
          />
        </div>
      </div>

      <div className="team-quote">
        <p>
          One simple philosophy drives our business:
          <br />
          <strong>“Treat others as you would like to be treated yourself”</strong>
          <br />- Nabil Naamo
        </p>
      </div>
    </div>
  );
}