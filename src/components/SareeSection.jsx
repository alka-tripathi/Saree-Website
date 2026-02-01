import React from 'react';
import { useNavigate } from 'react-router-dom';
import './sareeSection.css';

function SareeSection({ data }) {
  const navigate = useNavigate();
  function goToCollection(color) {
    navigate(`/${color}/collection`);
  }

  return (
    <div className="AllBanners">
      <div className="banner red-bg">
        <div className="image-group">
          <img src="https://i.pinimg.com/1200x/e0/21/cb/e021cb7769d5cf7922e9ed957d0e6991.jpg" />
          <img src="https://i.pinimg.com/736x/61/35/d8/6135d875e1908400b4399dd3ec3ba574.jpg" />
          <img src="https://i.pinimg.com/1200x/cb/e7/13/cbe713a24cd41d9641120801884459c1.jpg" />
        </div>
        <div className="overlay">
          <h2>Red Elegance</h2>
          <p>Love, passion, fertility, and prosperity</p>
          <button
            onClick={() => goToCollection('red')}
            name="red"
          >
            Explore
          </button>
        </div>
      </div>

      <div className="banner blue-bg">
        <div className="image-group">
          <img src="https://i.pinimg.com/736x/ae/21/a2/ae21a25641b1a1950cd8daccfea638b1.jpg" />
          <img src="https://i.pinimg.com/1200x/36/fd/a8/36fda8db7ac5147b5d45faca85be1394.jpg" />
          <img src="https://i.pinimg.com/736x/5c/45/28/5c4528606c7f5ccd69ea6a6ce5844475.jpg" />
        </div>
        <div className="overlay blue">
          <h2>Royal Blue</h2>
          <p>Tranquility, spirituality, and deep devotion</p>
          <button onClick={() => goToCollection('blue')}>Explore</button>
        </div>
      </div>

      <div className="banner white-bg">
        <div className="image-group">
          <img src="https://i.pinimg.com/736x/9c/65/de/9c65de2ebeba4ad2a8363e73b66f0d12.jpg" />
          <img src="  https://i.pinimg.com/736x/a9/40/09/a940093c663f2061137e15cb17a5c700.jpg" />
          <img src="https://i.pinimg.com/1200x/06/3b/6d/063b6d088bb8d5b3192e226546d3cfe0.jpg" />
        </div>
        <div className="overlay white">
          <h2>Absolute White</h2>
          <p>Purity, innocence, and spirituality</p>
          <button onClick={() => goToCollection('white')}>Explore</button>
        </div>
      </div>

      <div className="banner pink-bg">
        <div className="image-group">
          <img src="https://i.pinimg.com/1200x/12/c8/3a/12c83a14234f510edf44e7defa6ebfc8.jpg" />
          <img src="https://i.pinimg.com/1200x/fc/ca/37/fcca376af88ab15ed043f16a7bf33d4b.jpg" />
          <img src="https://i.pinimg.com/736x/86/b5/11/86b5112ddf7d5944647317e3e0a20b85.jpg" />
        </div>
        <div className="overlay pink">
          <h2>Mushy Pink</h2>
          <p>Femininity, grace, and charm</p>
          <button onClick={() => goToCollection('pink')}>Explore</button>
        </div>
      </div>

      <div className="banner golden-bg">
        <div className="image-group">
          <img src="https://i.pinimg.com/1200x/7a/69/20/7a69204c0b5d79c71d4c806b3bd349ad.jpg" />
          <img src="  https://i.pinimg.com/1200x/e6/aa/79/e6aa7956e41a8b8cba71f6de211cfce1.jpg" />
          <img src="https://i.pinimg.com/1200x/27/a0/62/27a0629497df2bd8c635ff80d7940db0.jpg" />
        </div>
        <div className="overlay golden">
          <h2>Elegant Golden</h2>
          <p>Prosperity, tradition, and elegance</p>
          <button onClick={() => goToCollection('golden')}>Explore</button>
        </div>
      </div>

      <div className="banner green-bg">
        <div className="image-group">
          <img src="https://i.pinimg.com/736x/02/cf/0e/02cf0ef189149928c5289aa024d911ce.jpg" />
          <img src="  https://i.pinimg.com/736x/02/3c/c0/023cc07aa725d5372f5bb0ec3a49c739.jpg" />
          <img src="https://i.pinimg.com/736x/51/70/bf/5170bf327cfdfc0dc3cdc5ae148899f1.jpg" />
        </div>
        <div className="overlay green">
          <h2>Emerald Green</h2>
          <p>Growth, renewal, and fertility</p>
          <button onClick={() => goToCollection('green')}>Explore</button>
        </div>
      </div>
    </div>
  );
}

export default SareeSection;
