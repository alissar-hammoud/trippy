import TripCard from '../TripCard/TripCard';
import img1 from '../../assets/5.jpg';
import img2 from '../../assets/8.jpg';
import img3 from '../../assets/6.jpg';
import './TripContainer.css';

export default function TripContainer() {
  return (
    <div className="trips-container">
      <TripCard
        title="Trip in Indonesia"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. A vitae aliquam explicabo at culpa nisi sit voluptates commodi odio deserunt minima beatae ipsa animi facilis odit, quaerat libero provident obcaecati voluptas est harum quam necessitatibus. Facilis maiores autem aliquid rerum."
        image={img1}
      />
      <TripCard
        title="Trip in Malaysia"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. A vitae aliquam explicabo at culpa nisi sit voluptates commodi odio deserunt minima beatae ipsa animi facilis odit, quaerat libero provident obcaecati voluptas est harum quam necessitatibus. Facilis maiores autem aliquid rerum."
        image={img2}
      />
      <TripCard
        title="Trip in France"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. A vitae aliquam explicabo at culpa nisi sit voluptates commodi odio deserunt minima beatae ipsa animi facilis odit, quaerat libero provident obcaecati voluptas est harum quam necessitatibus. Facilis maiores autem aliquid rerum."
        image={img3}
      />
    </div>
  );
}
