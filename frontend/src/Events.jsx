import "./events.css";
import { useEffect, useState } from "react";

function Events() {
    const [events, setEvents] = useState([]);

    const [eventName, setEventName] = useState("");
    const [eventDate, setEventDate] = useState("");
    const [eventTime, setEventTime] = useState("");
    const [eventVenue, setEventVenue] = useState("");

    // GET EVENTS FROM BACKEND
    useEffect(() => {
        fetch("http://localhost:5000/api/events")
            .then((res) => res.json())
            .then((data) => {
                setEvents(data);
            })
            .catch((error) => {
                console.error("Error fetching events:", error);
            });
    }, []);

    // ADD EVENT
    const handleAddEvent = async (e) => {
        e.preventDefault();

        if (!eventName || !eventDate || !eventTime || !eventVenue) {
            alert("Please fill all fields");
            return;
        }

        try {
            const response = await fetch(
                "http://localhost:5000/api/events",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        name: eventName,
                        date: eventDate,
                        time: eventTime,
                        venue: eventVenue,
                    }),
                }
            );

            const data = await response.json();

            if (!response.ok) {
                alert(data.message || "Failed to add event");
                return;
            }

            // Add new event to screen
            setEvents((prevEvents) => [...prevEvents, data]);

            // Clear form
            setEventName("");
            setEventDate("");
            setEventTime("");
            setEventVenue("");

            alert("Event added successfully!");
        } catch (error) {
            console.error("Error adding event:", error);
            alert("Server error. Make sure backend is running.");
        }
    };

    // DELETE EVENT
    const handleDelete = async (id) => {
        try {
            const response = await fetch(
                `http://localhost:5000/api/events/${id}`,
                {
                    method: "DELETE",
                }
            );

            if (!response.ok) {
                alert("Failed to delete event");
                return;
            }

            setEvents((prevEvents) =>
                prevEvents.filter((event) => event._id !== id)
            );
        } catch (error) {
            console.error("Error deleting event:", error);
            alert("Server error.");
        }
    };

    return (
        <div className="events-page">

            <div className="events-header">
                <h1>💍 Wedding Events</h1>
                <p>Plan and manage all your wedding events</p>
            </div>

            {/* Add Event Form */}
            <div className="event-form-card">

                <h2>➕ Add New Event</h2>

                <form onSubmit={handleAddEvent}>

                    <div className="form-group">
                        <label>Event Name</label>

                        <input
                            type="text"
                            placeholder="e.g. Engagement"
                            value={eventName}
                            onChange={(e) => setEventName(e.target.value)}
                        />
                    </div>

                    <div className="form-row">

                        <div className="form-group">
                            <label>Date</label>

                            <input
                                type="date"
                                value={eventDate}
                                onChange={(e) => setEventDate(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label>Time</label>

                            <input
                                type="time"
                                value={eventTime}
                                onChange={(e) => setEventTime(e.target.value)}
                            />
                        </div>

                    </div>

                    <div className="form-group">
                        <label>Venue</label>

                        <input
                            type="text"
                            placeholder="e.g. Taj Hotel, Chandigarh"
                            value={eventVenue}
                            onChange={(e) => setEventVenue(e.target.value)}
                        />
                    </div>

                    <button type="submit" className="add-event-btn">
                        Add Event
                    </button>

                </form>

            </div>

            {/* Events List */}

            <div className="events-list">

                <h2>Your Events</h2>

                {events.length === 0 ? (

                    <div className="no-events">
                        <div>📅</div>

                        <h3>No Events Added Yet</h3>

                        <p>
                            Add your first wedding event using the form above.
                        </p>
                    </div>

                ) : (

                    <div className="event-grid">

                        {events.map((event) => (

                            <div
                                className="event-card"
                                key={event._id}
                            >

                                <div className="event-icon">
                                    💒
                                </div>

                                <h3>{event.name}</h3>

                                <p>📅 {event.date}</p>

                                <p>⏰ {event.time}</p>

                                <p>📍 {event.venue}</p>

                                <button
                                    className="delete-event-btn"
                                    onClick={() =>
                                        handleDelete(event._id)
                                    }
                                >
                                    🗑️ Delete
                                </button>

                            </div>

                        ))}

                    </div>

                )}

            </div>

        </div>
    );
}

export default Events;