import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./EventListPage.css";

function EventListPage() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        axios
            .get("http://127.0.0.1:8000/api/events")
            .then((res) => setEvents(res.data))
            .catch((err) => console.error(err));
    }, []);

    const deleteEvent = async (id) => {
        if (!window.confirm("Are you sure you want to delete this event?"))
            return;

        try {
            await axios.delete(`http://127.0.0.1:8000/api/events/${id}`);
            // Update local state after successful delete
            setEvents((prev) => prev.filter((event) => event.id !== id));
            alert("Event deleted successfully.");
        } catch (error) {
            console.error("Failed to delete event", error);
            alert("Failed to delete the event.");
        }
    };

    return (
        <div className="event-list">
            <h1>Event List</h1>

            {events.map((event) => (
                <div className="event-card" key={event.id}>
                    <h2>{event.name}</h2>
                    <p>
                        <strong>Date:</strong> {event.date}
                    </p>
                    <p>
                        <strong>Location:</strong> {event.location}
                    </p>
                    <p>{event.description}</p>

                    {event.image_url && (
                        <img
                            src={event.image_url}
                            alt={event.name}
                            className="event-image"
                        />
                    )}

                    <div className="event-buttons">
                        <Link
                            to={`/events/${event.id}`}
                            className="view-button"
                        >
                            View Details
                        </Link>
                        <button
                            onClick={() => deleteEvent(event.id)}
                            className="delete-button"
                        >
                            Delete
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default EventListPage;
