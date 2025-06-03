import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./EventPage.css";

const EventPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [event, setEvent] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get(`/api/events/${id}`)
            .then((response) => {
                setEvent(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Failed to load event", error);
                setLoading(false);
            });
    }, [id]);

    const handleDelete = () => {
        if (window.confirm("Are you sure you want to delete this event?")) {
            axios
                .delete(`/api/events/${id}`)
                .then(() => {
                    alert("Event deleted!");
                    // Redirect to events list page after delete
                    navigate("/events");
                })
                .catch((error) => {
                    console.error("Delete failed", error);
                    alert("Failed to delete the event.");
                });
        }
    };

    if (loading) return <p>Loading event...</p>;
    if (!event) return <p>Event not found</p>;
    return (
        <div className="event-page">
            <div className="event-img">
                <img
                    src={
                        event.imgUrl ||
                        "https://via.placeholder.com/300x200?text=No+Image"
                    }
                    alt={event.title || "Event image"}
                />
            </div>

            <div className="event-content">
                <div className="event-details">
                    <h2>Location & Time</h2>
                    <p>📍 {event.location || "Location unknown"}</p>
                    <p>📅 {event.date || "Date TBD"}</p>
                    <p>⏰ {event.time || "Time TBD"}</p>
                </div>
                <div className="event-description">
                    <h3>Description</h3>
                    <p>{event.description || "No description provided."}</p>
                </div>

                <div className="event-weather">
                    <h3>Weather forecast:</h3>
                    <p>🌤️ {event.weather || "No forecast available"}</p>
                </div>
            </div>

            <div className="event-sidebar">
                <div className="event-map">
                    <img src="/image here" alt="Event location map" />
                </div>
                <div className="event-host">
                    <img
                        src={
                            event.host?.imgUrl ||
                            "https://via.placeholder.com/100?text=No+Host"
                        }
                        alt={event.host?.name || "Host"}
                    />

                    <p>
                        Hosted by{" "}
                        <strong>{event.host?.name || "Unknown Host"}</strong>
                    </p>
                </div>

                <div className="event-buttons">
                    <button>Edit Event</button>
                    <button onClick={handleDelete}>Delete Button</button>
                </div>
            </div>
        </div>
    );
};

export default EventPage;
