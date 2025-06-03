import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./CreateEvent.css";

function CreateEvent() {
    const [formData, setFormData] = useState({
        name: "",
        date: "",
        time: "",
        location: "",
        weather: "",
        image_url: "",
        description: "",
        host: {
            name: "",
            imgUrl: "",
        },
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;

        // Handle nested host fields
        if (name === "host.name" || name === "host.imgUrl") {
            const key = name.split(".")[1];
            setFormData((prev) => ({
                ...prev,
                host: {
                    ...prev.host,
                    [key]: value,
                },
            }));
        } else {
            setFormData((prev) => ({
                ...prev,
                [name]: value,
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("/api/events", formData);
            console.log("Event created:", response.data);
            navigate("/events"); // Redirect to events list
        } catch (error) {
            console.error("Failed to create event", error);
        }
    };

    return (
        <div>
            <h1>Create New Event</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Event Name:</label>
                <input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="date">Date:</label>
                <input
                    id="date"
                    name="date"
                    type="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="time">Time:</label>
                <input
                    id="time"
                    name="time"
                    type="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="location">Location:</label>
                <input
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="description">Description:</label>
                <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Event Description"
                    required
                />

                <label htmlFor="weather">Weather Forecast:</label>
                <input
                    id="weather"
                    name="weather"
                    value={formData.weather}
                    onChange={handleChange}
                />

                <label htmlFor="image_url">Event Image URL:</label>
                <input
                    id="image_url"
                    name="image_url"
                    value={formData.image_url}
                    onChange={handleChange}
                />

                <label htmlFor="hostName">Host Name:</label>
                <input
                    id="hostName"
                    name="host.name"
                    value={formData.host.name}
                    onChange={handleChange}
                />

                <label htmlFor="hostImgUrl">Host Image URL:</label>
                <input
                    id="hostImgUrl"
                    name="host.imgUrl"
                    value={formData.host.imgUrl}
                    onChange={handleChange}
                />

                <button className="createBtn" type="submit">
                    Create Event
                </button>
            </form>
        </div>
    );
}

export default CreateEvent;
