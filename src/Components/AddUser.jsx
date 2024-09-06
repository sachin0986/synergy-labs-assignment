import React, { useState } from "react";

const AddUser = ({ onAdd }) => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    onAdd(e.target.name.value, e.target.email.value, e.target.phone.value);
    e.target.name.value = "";
    e.target.email.value = "";
    e.target.phone.value = "";
  };

  return (
    <div className="add-user-container">
      <h3 className="add-user-title">Add New User</h3>
      <form onSubmit={handleOnSubmit} className="add-user-form">
        <div className="form-group">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Enter Name"
            className="form-input"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Enter Email"
            className="form-input"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone" className="form-label">Phone</label>
          <input
            id="phone"
            type="tel"
            name="phone"
            placeholder="Enter Phone"
            className="form-input"
            required
          />
        </div>

        <button type="submit" className="add-button">Add User</button>
      </form>
    </div>
  );
};

export default AddUser;