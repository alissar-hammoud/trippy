import './Hero.css';
import bgImg from '../../assets/12.jpg';

export default function Hero({ title, description, btn }) {
  return (
    <header style={{ backgroundImage: `url(${bgImg})` }}>
      <h1 className="hero-title">{title}</h1>
      <p className="hero-desc">{description}</p>
      <button className="btn-hero">{btn}</button>
    </header>
  );
}
