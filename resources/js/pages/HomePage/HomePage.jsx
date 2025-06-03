import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <h1>Welcome to the Event Planner</h1>
      <p>Choose an event to view:</p>
      <ul>
        <li>
          <Link to="/events/1">Event 1</Link>
        </li>
        <li>
          <Link to="/events/2">Event 2</Link>
        </li>
      </ul>
      <Link to="/create">Create New Event</Link>
    </div>
  );
}

export default HomePage;
