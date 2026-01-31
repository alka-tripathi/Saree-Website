import './collection.css';
import { useParams } from 'react-router-dom';
import sarees from '../data';
import Footer from './Footer';

import Card from './Card';

function Collection({ addToCart }) {
  const { color } = useParams();

  const colorMap = {
    red: '#8b1e3f',
    green: '#2f6f4e',
    blue: '#1e4e8b',
    pink: '#c05a84',
    white: '#eaeaea',
    golden: '#b89b3e',
  };

  const handleAddToCart = (saree) => {
    console.log('Received from Card:', saree);
  };

  const themeColor = colorMap[color] || '#333';
  const filteredSaree = sarees.filter((item) => item.color === color);

  return (
    <div
      className="collection-page"
      style={{ backgroundColor: `${themeColor}22` }}
    >
      <h2
        className="collection-title"
        style={{
          //   backgroundColor: `${themeColor}22`, // soft background
          color: themeColor,
        }}
      >
        {color.toUpperCase()} Collection
      </h2>

      <div className="card-container">
        {filteredSaree.map((saree) => (
          <Card
            key={saree.id}
            saree={saree}
            addToCart={addToCart}
          />
        ))}
      </div>
      <Footer></Footer>
    </div>
  );
}
export default Collection;
