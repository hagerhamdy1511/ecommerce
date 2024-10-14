import 'font-awesome/css/font-awesome.min.css';
import Rectangle23png from "../../Assets/images/Rectangle 23.png";
import styles from './Shop.module.css'; 
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { BallTriangle } from "react-loader-spinner";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { CartContext } from '../../Context/CartContext';
import { FaBeer, FaStar, FaShieldAlt, FaTruck, FaHeadset } from 'react-icons/fa'; 

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 16;
  const { addToCart } = useContext(CartContext);

  async function getProducts() {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleNextPage = () => {
    if (currentPage < Math.ceil(products.length / productsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  async function postToCart(id) {
    try {
      const { data } = await addToCart(id);
      if (data.status === "success") {
        toast.success(data.message);
      } else {
        toast.error('Failed to add the data to the cart', { duration: 1000 });
      }
      console.log(data);
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  }

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const productGridClasses = `${styles.productGrid} ${styles.productGridLayout}`;

  return (
    <div className={styles.container3}>
      <div className={styles.productCardContainer}>
        <img src={Rectangle23png} alt="Rectangle23png" className={styles.Rectangle23png} />
        <div className={styles.header}>
          <h1 className={styles.shopHeading}>Shop</h1>
          <div className={styles.navigationLinks}>Home <FaBeer /> Shop</div>
        </div>
      </div>

      <div className={styles.filterOptionsContainer}>
        <i className="fa fa-filter me-2"></i>
        <div className={styles.Filter}>Filter</div>
        <i className="fa fa-th-large me-2"></i> 
        <i className="fa fa-calendar me-2"></i> 
        <div className={styles.verticalLine}></div> 
        <span>Showing {indexOfFirstProduct + 1}-{Math.min(indexOfLastProduct, products.length)} of {products.length} results</span>
        <div className={styles.Show}>Show</div>
        <div className={styles.whitebox16}>{productsPerPage}</div>
        <span className={styles.shorttext}>Short by</span>
        <div className={styles.Default1}>Default</div>
      </div>

      <h2>Featured Products</h2>
      {loading ? (
        <div className="d-flex justify-content-center">
          <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="#4fa94d"
            ariaLabel="ball-triangle-loading"
            visible={true}
          />
        </div>
      ) : (               
        <div className={ styles.productGridClasses}>
          {currentProducts.map(product => (
            <div key={product.id} className={styles.productcard}>
              <Link to={`/productdetails/${product.id}`}>
                <img src={product.image} alt={product.name} className={styles.productimage} />
              </Link>
              <div className={styles.discountcircle}>-30%</div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <button className={styles.addtocartbutton} onClick={() => postToCart(product.id)}>Add to Cart</button>
              </div>
            </div>
       ))}
       </div>
     )}
     <div className={styles.pagination}>
       <button onClick={() => handlePageChange(1)}>1</button>
       <button onClick={() => handlePageChange(2)}>2</button>
       <button onClick={handleNextPage}>Show More</button>
     </div>
     <div className={styles.servicescontainer }>
  <div className={styles.servicebox}>
    <FaStar className={styles.serviceboxi} />
    <div className={styles.serviceBox1}>
      <h3>High Quality</h3>
      <p>crafted from top materials</p>
    </div>
  </div>
  <div className={styles.servicebox}>
    <FaShieldAlt className={styles.serviceboxi} />
    <div className={styles.serviceBox1}>
      <h3>Warranty Protection</h3>
      <p>Over 2 years</p>
    </div>
  </div>
  <div className={styles.servicebox}>
    <FaTruck className={styles.serviceboxi} />
    <div className={styles.servicebox1}>
      <h3>Free Shipping</h3>
      <p>Order over $150</p>
    </div>
  </div>
  <div className={styles.servicebox}>
    <FaHeadset className={styles.serviceboxi} />
    <div className={styles.serviceBox1}>
      <h3>24/7 Support</h3>
      <p>Dedicated support</p>
    </div>
  </div>
</div>
    </div>
  );
};

export default Shop;
