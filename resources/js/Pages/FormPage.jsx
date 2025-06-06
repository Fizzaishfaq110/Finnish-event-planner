import React, { useState } from 'react';
import EventForm from '../Components/Events/EventForm';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const FormPage = () => {
 const [newEventData, setNewEventData] = useState({
        title: '',
        date: '',
        location: '',
        description: '',
        image_url: '',
    });

    const handleNewInputChange = (e) => {
        setNewEventData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleNewEventSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch('/api/events', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newEventData),
        });
        if (res.ok) {
            alert("Event created!");
            setNewEventData({ title: '', date: '', location: '', description: '', image_url: '' });
        } else {
            alert("Failed to create event");
        }
    };

    return (
        <>
        <Header/>
        <div className="event-form-page">
            <h1>Create New Event</h1>
            <EventForm
                newEventData={newEventData}
                handleNewInputChange={handleNewInputChange}
                handleNewEventSubmit={handleNewEventSubmit}
            />
        </div>
        <Footer/>
        </>
    );
}

export default FormPage