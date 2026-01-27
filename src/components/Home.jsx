import Banner from './Banner';
import Heading from './Heading';
import SareeSection from './SareeSection';
import sarees from '../data';

function Home() {
  return (
    <>
      <Banner />
      <Heading />
      <SareeSection data={sarees} />
    </>
  );
}

export default Home;
