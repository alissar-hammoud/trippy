import './TripCard.css';

export default function TripCard({ title, description, image }) {
  return (
    <div className="trip-card">
      <div
        className="trip-image"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <h4 className="trip-title">{title}</h4>
      <p className="trip-desc">{description}</p>
    </div>
  );
}
