
import React, { useState } from 'react';
import styles from './Home.module.css';
import backgroundImage from "../../Assets/images/scandinavian-interior-mockup-wall-decal-background 1.png";
import image1 from '../../Assets/images/Images (1).png';
import image2 from '../../Assets/images/Images (2).png';
import image3 from '../../Assets/images/Images (3).png';
import image4 from "../../Assets/images/Images (4).png";
import image5 from "../../Assets/images/Images (5).png";
import image6 from "../../Assets/images/Images (6).png";
import MaskGroup9 from "../../Assets/images/Mask Group (9).png";
import ImageLivingRoom from "../../Assets/images/Image-living room.png";
import MaskGroup10 from "../../Assets/images/Mask Group (10).png";
import Image11 from "../../Assets/images/Image11.png";
import Rectangle12 from "../../Assets/images/Rectangle 12.png";
import Rectangle13 from "../../Assets/images/Rectangle 13.png";
import Rectangle14 from "../../Assets/images/Rectangle 14.png";
import Rectangle15 from "../../Assets/images/Rectangle 15.png";
import Rectangle16 from "../../Assets/images/Rectangle 16.png";
import Rectangle17 from "../../Assets/images/Rectangle 17.png";
import Rectangle18 from "../../Assets/images/Rectangle 18.png";
import Rectangle19 from "../../Assets/images/Rectangle 19.png";
import Rectangle20 from "../../Assets/images/Rectangle 20.png";
import Rectangle21 from "../../Assets/images/Rectangle 21.png";
import Rectangle22 from "../../Assets/images/Rectangle22.png"


function Home() {
  const [cardColors, setCardColors] = useState(Array(8).fill('#fff'));

  const handleCardClick = (index) => {
    const newColors = [...cardColors];
    newColors[index] = '#3A3A3A';
    setCardColors(newColors);
  };
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image4,
    image6,
  ];
  return (
    <div className={styles.container}>
      <img src={backgroundImage} alt="Scandinavian Interior" className={styles.backgroundImage} />
      <div className={styles.card}>
        <h2 className={styles.newArrival}>New Arrival</h2>
        <h3 className={styles.discover}>Discover Our <br />New Collection</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,<br /> luctus nec ullamcorper mattis.</p>
        <button className={styles.btn}>Shop Now</button>
      </div>
      <div className={styles.newSection}>
        <h2 className={styles.browseRange}>Browse The Range</h2>
        <p className={styles.loremText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className={styles.imageContainer}>
          <div className={styles.imageWrapper}>
            <img src={MaskGroup9} alt="Dining" />
            <p className={styles.imageText}>Dining</p>
          </div>
          <div className={styles.imageWrapper}>
            <img src={ImageLivingRoom} alt="Living" />
            <p className={styles.imageText}>Living</p>
          </div>
          <div className={styles.imageWrapper}>
            <img src={MaskGroup10} alt="Bedroom" />
            <p className={styles.imageText}>Bedroom</p>
          </div>
        </div>
      </div>




      <div className={styles.productsSection}>
        <h2 className={styles.productsTitle}>Our Products</h2>
        <div className={styles.cardContainer}>
          {Array(8).fill(null).map((_, index) => (
            <div
              key={index}
              className={styles.productCard}
              style={{
                backgroundColor: cardColors[index],
                transition: 'background-color 0.2s ease-in-out',
              }}
              onMouseEnter={() => {
                const newColors = [...cardColors];
                newColors[index] = '#e0e0e0';
                setCardColors(newColors);
              }}
              onMouseLeave={() => {
                const newColors = [...cardColors];
                newColors[index] = '#F4F5F7';
                setCardColors(newColors);
              }}
            >
              <img src={images[index]} alt="product" />
              <div className={styles.addToCartButton}>
                <button style={{ backgroundColor: '#FFFFFF', color: '#B88E2F' }}>
                  Add to Cart
                </button>
              </div>
              <div
                className={styles.discountBadge}  >
                <span>-30%</span>
              </div>
              <h1 className={styles.productName}>Syltherine</h1>
              <p className={styles.productDescription}>Stylish cafe chair</p>
              <div className={styles.productPrice}>
                <span>Rp 2.500.000</span>
                <span className={styles.oldPrice}> Rp 3.500.000</span>
              </div>
            </div>
          ))}
        </div>

      </div>

      <div className={styles.showMoreButtonContainer}>
        <button className={styles.showMoreButton} >Show More</button>
      </div>


      <div className={styles.container1}>
        <div className={styles.content}>
          <h2>50+ Beautiful rooms inspiration</h2>
          <p>Our designer already made a lot of beautiful prototypes of rooms that inspire you.</p>
          <button className={styles.exploreButton}>Explore More</button>
        </div>
        <div className={styles.carousel}>
          <img src={Image11} alt="Image of a beautiful room" className={styles.carouselImage} />
          <img src={Rectangle12} alt="Image of a room" className={styles.carouselImage} />
    
          <div className={styles.arrowLeft} >
  <div className={styles.arrow}></div>
</div>
          <img src={Rectangle13} alt="Image of a room" className={styles.carouselImage} />
      
          <div className={styles.dotsContainer}>
            <div className={styles.dotactive}></div>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
          </div>
        </div>
        </div>

        <div className={styles.container2}>
          <div className={styles.content1}>
            <h2>Share your setup with</h2><h2> #FuniroFurniture</h2>
            <div className={styles.imageGrid}>
              <img src={Rectangle14} alt="Image 1" />
              <img src={Rectangle15} alt="Image 2" />
              <img src={Rectangle16} alt="Image 3" />
              <img src={Rectangle17} alt="Image 4" />
              <img src={Rectangle18} alt="Image 5" />
              <img src={Rectangle19} alt="Image 6" />
              <img src={Rectangle20} alt="Image 7" />
              <img src={Rectangle21} alt="Image 8" />
              <img src={Rectangle22} alt="Image 9" />
            </div>
          </div>
        </div>










    </div>
  );
}

export default Home;