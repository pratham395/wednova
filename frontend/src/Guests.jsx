import React, { useEffect, useState } from "react";
import "./guests.css";

function Guests() {
  const [guests, setGuests] = useState([]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [rsvp, setRsvp] = useState("Pending");

  // GET guests from backend
  useEffect(() => {
    fetch("http://localhost:5000/api/guests")
      .then((res) => res.json())
      .then((data) => {
        setGuests(data);
      })
      .catch((error) => {
        console.error("Error fetching guests:", error);
      });
  }, []);

  // ADD guest
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !phone) {
      alert("Please fill all details!");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/guests", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
  name,
  email,
  phone,
  relation: "Friend",
  rsvp: rsvp,
}),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Failed to add guest");
        return;
      }

      // Add newly created guest to screen
      setGuests((prevGuests) => [...prevGuests, data]);

      // Clear form
      setName("");
      setEmail("");
      setPhone("");
      setRsvp("Pending");

      alert("Guest added successfully!");
    } catch (error) {
      console.error("Error adding guest:", error);
      alert("Server error. Make sure backend is running.");
    }
  };

  // DELETE guest
  const deleteGuest = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/guests/${id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        alert("Failed to delete guest");
        return;
      }

      setGuests((prevGuests) =>
        prevGuests.filter((guest) => guest._id !== id)
      );
    } catch (error) {
      console.error("Error deleting guest:", error);
      alert("Server error.");
    }
  };

  return (
    <div className="guests-page">

      <h1>Wedding Guests</h1>

      <p className="subtitle">
        Manage your wedding guests and RSVP responses here.
      </p>

      {/* Guest Form */}
      <div className="guest-form-card">

        <h2>Add Guest</h2>

        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label>Guest Name</label>

            <input
              type="text"
              placeholder="e.g. Rahul Sharma"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Email</label>

            <input
              type="email"
              placeholder="e.g. rahul@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Phone</label>

            <input
              type="text"
              placeholder="e.g. 9876543210"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>RSVP Status</label>

            <select
              value={rsvp}
              onChange={(e) => setRsvp(e.target.value)}
            >
              <option value="Pending">Pending</option>
              <option value="Accepted">Accepted</option>
              <option value="Declined">Declined</option>
            </select>
          </div>

          <button type="submit" className="add-guest-btn">
            Add Guest
          </button>

        </form>
      </div>

      {/* Guest List */}
      <h2 className="your-guests">
        Your Guests
      </h2>

      <div className="guest-list">

        {guests.length === 0 ? (
          <p className="no-guests">
            No guests added yet.
          </p>
        ) : (
          guests.map((guest) => (

            <div
              className="guest-card"
              key={guest._id}
            >

              <h3>👤 {guest.name}</h3>

              <p>📧 {guest.email}</p>

              <p>📱 {guest.phone}</p>

              <p>💌 RSVP: {guest.rsvp || "Pending"}</p>

              <button
                onClick={() => deleteGuest(guest._id)}
                className="delete-guest-btn"
              >
                🗑 Delete
              </button>

            </div>

          ))
        )}

      </div>

    </div>
  );
}

export default Guests;