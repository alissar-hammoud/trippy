import SectionTitle from '../SectionTitle/SectionTitle';
import TripContainer from '../TripsContainer/TripContainer';
import './Trips.css';

export default function Trips() {
  return (
    <>
      <SectionTitle
        title="Recent Trips"
        description="You can discover unique destinations using Google Maps"
      />
      <TripContainer />
    </>
  );
}
