import React from 'react';
import styles from './Footer.module.css';
function Footer() {
  return (
   
    <footer className={styles.footer}>
      <div className="container">
        <div className="row">
        <div className="col-md-4">
    <h4>Funiro</h4>
    <p>400 University Drive Suite <br /> 200 Coral Gables  FL 33134 USA</p>
</div>
          <div className="col-md-2">
            <h5 className="text-gray">Links</h5>
            <ul>
              <li>Home</li>
              <li>Shop</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="col-md-2">
            <h5 className="text-gray">Help</h5>
            <ul>
              <li>Payment Options</li>
              <li>Returns</li>
              <li>Privacy Policies</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5 className="text-gray">Newsletter</h5>
            <form>
              <input type="email" placeholder="Enter Your Email Address" />
              <button type="submit">SUBSCRIBE</button>
            </form>
          </div>
        </div>
      </div>
      <div className='wrights'>2023 furino. All rights reverved</div>
    </footer>
  );
}

export default Footer;