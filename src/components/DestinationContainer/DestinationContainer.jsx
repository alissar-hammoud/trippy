import './DestinationContainer.css';

export default function DestinationContainer({
  title,
  description,
  images,
  reverse,
}) {
  return (
    <div className={`destination-container ${reverse}`}>
      <div className="destination-text">
        <h3 className="destination-title">{title}</h3>
        <p className="destination-desc">{description}</p>
      </div>
      <div className="destination-images">
        <div
          className="destination-img down"
          style={{ backgroundImage: `url(${images[0]})` }}
        ></div>
        <div
          className="destination-img up"
          style={{ backgroundImage: `url(${images[1]})` }}
        ></div>
      </div>
    </div>
  );
}
