import DestinationContainer from '../DestinationContainer/DestinationContainer';
import SectionTitle from '../SectionTitle/SectionTitle';
import img1 from '../../assets/5.jpg';
import img2 from '../../assets/8.jpg';
import img3 from '../../assets/1.jpg';
import img4 from '../../assets/2.jpg';
import './Destinations.css';

export default function Destinations() {
  return (
    <>
      <SectionTitle
        title="Popular Destinations"
        description="Tours give you the opportunity to see alot, within a time frame."
      />
      <div className="destinations">
        <DestinationContainer
          title="Mt. Daguldul, Batangas"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit minus eligendi quae earum eveniet aperiam distinctio ducimus error repellendus facere quasi quidem ipsam voluptatem illo dolores a qui, itaque aliquid blanditiis ipsum quibusdam deserunt nostrum. Aspernatur, animi. In doloremque unde sapiente officia harum, impedit facere accusantium molestias, numquam vel sed eos eaque voluptate voluptas similique cum. Voluptas obcaecati veniam quaerat reiciendis nihil architecto iure ea dolorum, illum harum iusto nesciunt rerum natus! Dolorum unde ipsam obcaecati labore? Voluptatibus, optio iure."
          images={[img1, img2]}
          reverse=""
        />
        <DestinationContainer
          title="Taal Volcano, Batangas"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit minus eligendi quae earum eveniet aperiam distinctio ducimus error repellendus facere quasi quidem ipsam voluptatem illo dolores a qui, itaque aliquid blanditiis ipsum quibusdam deserunt nostrum. Aspernatur, animi. In doloremque unde sapiente officia harum, impedit facere accusantium molestias, numquam vel sed eos eaque voluptate voluptas similique cum. Voluptas obcaecati veniam quaerat reiciendis nihil architecto iure ea dolorum, illum harum iusto nesciunt rerum natus! Dolorum unde ipsam obcaecati labore? Voluptatibus, optio iure."
          images={[img3, img4]}
          reverse="reverse"
        />
      </div>
    </>
  );
}
