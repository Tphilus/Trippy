import React from "react";
import "./Forms.css";

const Forms = () => {
  return (
    <div className="form">
      <form action="">
        <label htmlFor="">Your Name</label>
        <input type="text" id="" />

        <label htmlFor="">Email</label>
        <input type="email" id="" />

        <label htmlFor="">Subject</label>
        <input type="text" id="" />

        <label htmlFor=""> Message </label>

        <textarea rows={6} placeholder="Type your message here" />
        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default Forms;
