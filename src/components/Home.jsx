import Banner from './Banner';
import Heading from './Heading';
import SareeSection from './SareeSection';
import sarees from '../data';
import Footer from './Footer';

function Home() {



  return (
    <>
      <Banner />
      <Heading />
      <SareeSection data={sarees} />
      <Footer></Footer>
    </>
  );
}

export default Home;
