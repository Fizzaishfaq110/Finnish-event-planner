import "./EventCard.css";
import { Calendar, MapPin, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const EventCard = ({ 
  title, 
  category, 
  date, 
  time, 
  location, 
  description, 
  imageUrl
}) => {
  return (
    <Card className="event-card">
      <div className="relative">
        <div 
          className="event-card-image"
          style={{ backgroundImage: `url('${imageUrl}')` }}
        />
        <div className="event-card-favorite-btn">
          <button className="event-card-favorite">
            <Heart className="icon text-gray-600" />
          </button>
        </div>
      </div>
      
      <CardContent className="event-card-content">
        <div className="event-card-header">
          <h3 className="event-card-title">{title}</h3>
        </div>
        
        <Badge variant="secondary" className="event-card-badge">
          {category}
        </Badge>
        
        <div className="event-card-details">
          <div className="event-card-detail">
            <Calendar className="icon" />
            <span>{date} - {time}</span>
          </div>
          <div className="event-card-detail">
            <MapPin className="icon" />
            <span>{location}</span>
          </div>
        </div>
        
        <p className="event-card-description">{description}</p>
      </CardContent>
    </Card>
  );
};

export default EventCard;
