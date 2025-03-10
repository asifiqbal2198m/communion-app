import { useState } from "react";
import "../Styles/EventsPage.css";

const EventsPage = () => {
  const [events, setEvents] = useState([
    { title: "Community Prayer", date: "2025-03-15", location: "Church Hall", category: "Religious" },
    { title: "Charity Drive", date: "2025-03-18", location: "City Park", category: "Charity" }
  ]);
  
  const [newEvent, setNewEvent] = useState({ title: "", date: "", location: "", category: "" });

  const handleInputChange = (e) => {
    setNewEvent({ ...newEvent, [e.target.name]: e.target.value });
  };

  const addEvent = () => {
    setEvents([...events, newEvent]);
    setNewEvent({ title: "", date: "", location: "", category: "" });
  };

  return (
    <div className="events-container">
      <h2>Upcoming Events</h2>
      <ul>
        {events.map((event, index) => (
          <li key={index}>
            <strong>{event.title}</strong> - {event.date} - {event.location} - {event.category}
          </li>
        ))}
      </ul>

      <h3>Add New Event</h3>
      <input type="text" name="title" placeholder="Title" value={newEvent.title} onChange={handleInputChange} />
      <input type="date" name="date" value={newEvent.date} onChange={handleInputChange} />
      <input type="text" name="location" placeholder="Location" value={newEvent.location} onChange={handleInputChange} />
      <select name="category" value={newEvent.category} onChange={handleInputChange}>
        <option value="">Select Category</option>
        <option value="Religious">Religious</option>
        <option value="Charity">Charity</option>
        <option value="Social">Social</option>
      </select>
      <button onClick={addEvent}>Add Event</button>
    </div>
  );
};

export default EventsPage;
