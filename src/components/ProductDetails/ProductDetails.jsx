import React, { useContext, useEffect, useState } from "react";
import { BallTriangle } from "react-loader-spinner";
import { useParams } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import toast from "react-hot-toast";
import styles from "./ProductDetails.module.css";
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import { Link } from "react-router-dom";
import Group109 from '../../Assets/images/Group 109.png';
import Image1 from "../../Assets/images/Images (1).png"
import Image2 from "../../Assets/images/Images (6).png"
import Image3 from "../../Assets/images/Images (3).png"
import Image4 from "../../Assets/images/Images.png"
import CartModal from "../CartModal/CartModal";



const Breadcrumb = ({ productName }) => (
  <div style={{ backgroundColor: '#F9F1E7', padding: '40px', marginTop: "50px" }}>
    <nav>
      <Link to="/" style={{ color: '#000', textDecoration: 'none' }}>Home</Link>
      <span> &gt; </span>
      <Link to="/shop" style={{ color: '#000', textDecoration: 'none' }}>Shop</Link>
      <span> &gt; </span>
      <span style={{ borderLeft: '2px solid #000', paddingLeft: '10px', marginLeft: '10px' }}>{productName}</span>
    </nav>
  </div>
);

export default function ProductDetails() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [showCart, setShowCart] = useState(false);
  const { addToCart } = useContext(CartContext);
  let { id } = useParams();

  useEffect(() => {
    fetchProductDetails();
  }, [id]);

  async function fetchProductDetails() {
    try {
      let response = await fetch(`https://fakestoreapi.com/products/${id}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      let data = await response.json();
      if (!data) {
        throw new Error("No product data found");
      }
      setProduct(data);
    } catch (error) {
      console.error("Error fetching product details:", error);
      setProduct({
        title: "Default Product",
        description: "This is a default product description.",
        price: "Rs. 520,000.00"
      }); 
    } finally {
      setLoading(false);
    }
  }

  const handleAddToCart = () => {
    addToCart(product.id, quantity);
    toast.success("Product added to cart!");
  };

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <>
    <nav>
      <button onClick={toggleCart} className="cart-icon">
        🛒
      </button>
    </nav>

    <CartModal show={showCart} onClose={toggleCart} />

    <div className={`product-page ${showCart ? 'dimmed' : ''}`}>
      <Breadcrumb productName={product?.title} />
      <div className={styles.productdetails}>
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
          <div>

          </div>
        )}
      </div>
      {product && (
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className={styles.thumbnailContainer}>
                  <img src={product.image} alt={`Product thumbnail`} className={styles.thumbnail} />
                </div>
              </div>
              <div className="col-md-6">
                <div className={styles.details}>
                  <h3 className={styles.productTitle}>{product.title}</h3>
                  <p>{product.description}</p>
                  <span className={styles.fontSm}>{product.category}</span>
                  <div className="d-flex py-3 justify-content-between align-items-center">
                    <span className={`${styles.fontSm} ${styles.textMain}`}>{product.price} EGP</span>
                    <span className={styles.fontSm}>
                      <i className={`fa fa-star ${styles.ratingColor} me-2`}></i>
                      <i className={`fa fa-star ${styles.ratingColor} me-2`}></i>
                      <i className={`fa fa-star ${styles.ratingColor} me-2`}></i>
                      <i className={`fa fa-star ${styles.ratingColor} me-2`}></i>
                      <i className={`fa fa-star ${styles.ratingColor} me-2`}></i>
                      {product.rating?.rate}
                    </span>
                  </div>


                  <div className="mt-4">
                    <h5>Size</h5>
                    <div className="d-flex">
                      <div style={{ backgroundColor: '#B88E2F', padding: '10px', margin: '5px', textAlign: 'center' }}>M</div>
                      <div style={{ backgroundColor: '#F9F1E7', padding: '10px', margin: '5px', textAlign: 'center' }}>L</div>
                      <div style={{ backgroundColor: '#F9F1E7', padding: '10px', margin: '5px', textAlign: 'center' }}>XL</div>
                    </div>
                  </div>


                  <div className="mt-4">
                    <h5>Color</h5>
                    <div className="d-flex">
                      <div style={{ backgroundColor: '#816DFA', width: '30px', height: '30px', borderRadius: '50%', margin: '5px' }}></div>
                      <div style={{ backgroundColor: '#000000', width: '30px', height: '30px', borderRadius: '50%', margin: '5px' }}></div>
                      <div style={{ backgroundColor: '#B88E2F', width: '30px', height: '30px', borderRadius: '50%', margin: '5px' }}></div>
                    </div>
                  </div>


                  <div className="d-flex align-items-center">
                  <div className={styles.quantityControls}>
                        <button onClick={() => setQuantity(quantity - 1) } disabled={quantity <= 1}className="btn btn-outline-dark">-</button>
                        <span>{quantity}</span>
                        <button onClick={() => setQuantity(quantity + 1)} className="btn btn-outline-dark">+</button>
                     
                   
                  </div>
                    <button
    onClick={handleAddToCart}
    className={`btn w-50 btn-sm m20px ${styles.btn}`}
    style={{ backgroundColor: '#FFFFFF', color: '#000000', border: '1px solid #000000' }}
  >
    Add to cart
  </button>

  <button
    onClick={handleAddToCart}
    className={`btn w-50 btn-sm ${styles.btn}`}
    style={{ backgroundColor: '#FFFFFF', color: '#000000', border: '1px solid #000000' }}
  >
    Compare
  </button>

                  </div>
                  <hr className={styles.divider} />
                  <div className={styles.additionalInfo}>
                    <p><strong>SKU:</strong> SS001</p>
                    <p><strong>Category:</strong> Sofas</p>
                    <p><strong>Tags:</strong> Sofa, Chair, Home, Shop</p>
                    <p><strong>Share:</strong>

                      <FaFacebook className="me-2" />
                      <FaInstagram className="me-2" />
                      <FaTwitter />
                    </p>


                  </div>
                </div>
              </div>
            </div>
          
        )}
      </div>
      <hr className={styles.divider} />
      <div className={styles.textcenter}>
        <h5>Description</h5>
        <h5 className="mx-3">Additional Information</h5>
        <h5 className="mx-3">Reviews [5]</h5>
      </div>
      <div className={`${styles.mt10} text-center`}>
        <p>Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker<br /> takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road. Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one<br /> of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and <br />extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal<br /> preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
        <img src={Group109} alt="Product" className={styles.Group109} />
      </div>
      <hr className={styles.divider} />
<div className="text-center">
  <h5>Related Products</h5>
  <div className="d-flex justify-content-center">
    <div className="card m-2">
      <div className="position-relative">
        <div className={styles.discountcircle}>-30%</div>
        <img src={Image1} alt="Product 1" className="card-img-top" />
      </div>
      <div className="card-body">
        <h5 className="card-title">Syithcerine</h5>
        <p className="card-text">Stylish cafe chair</p>
        <p className="card-text">Rp 2.500.000</p>
      </div>
    </div>
    <div className="card m-2">
      <div className="position-relative">
        <div className={styles.discountcircle}>-20%</div>
        <img src={Image2} alt="Product 2" className="card-img-top" />
      </div>
      <div className="card-body">
        <h5 className="card-title">Leviosa</h5>
        <p className="card-text">Stylish cafe chair</p>
        <p className="card-text">Rp 2.500.000</p>
      </div>
    </div>
    <div className="card m-2">
      <div className="position-relative">
        <div className={styles.discountcircle}>-50%</div>
        <img src={Image3} alt="Product 3" className="card-img-top" />
      </div>
      <div className="card-body">
        <h5 className="card-title">Lolito</h5>
        <p className="card-text">Luxury big sofa</p>
        <p className="card-text">Rp 7.000.000</p>
      </div>
    </div>
    <div className="card m-2">
      <div className="position-relative">
        <div className={styles.discountcircle}>New</div>
        <img src={Image4} alt="Product 4" className="card-img-top" />
      </div>
      <div className="card-body">
        <h5 className="card-title">Respira</h5>
        <p className="card-text">Outdoor bar table and stool</p>
        <p className="card-text">Rp 500.000</p>
      </div>
    </div>
  </div>
  <button className="btn btn-outline-dark" style={{ backgroundColor: '#B88E2F' }}>Show More</button>
</div>


    </>
  );
}
