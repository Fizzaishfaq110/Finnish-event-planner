import "./EventsSection.css";
import EventCard from "./EventCard";

const EventsSection = () => {
  const events = [
    {
      title: "Summer BBQ Party",
      category: "Food",
      date: "May 15, 2025",
      time: "4:00 PM",
      location: "Summer BBQ Party",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageUrl: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Summer BBQ Party",
      category: "Food",
      date: "May 15, 2025",
      time: "4:00 PM",
      location: "Summer BBQ Party",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageUrl: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Summer BBQ Party",
      category: "Food",
      date: "May 15, 2025",
      time: "4:00 PM",
      location: "Summer BBQ Party",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageUrl: "https://images.unsplash.com/photo-1529606854499-05b699b5c5e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section className="events-section">
      <div className="events-container">
        <div className="events-header">
          <h2 className="events-title">Latest Events</h2>
          <p className="events-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros 
            elementum tristique.
          </p>
        </div>

        <div className="events-grid">
          {events.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
