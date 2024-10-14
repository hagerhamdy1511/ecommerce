import React from 'react';
import styles from './Contact.module.css'; 
import Group78png from "../../Assets/images/Group 78.png";
import { FaMapMarkerAlt, FaPhoneAlt, FaClock, FaStar, FaShieldAlt, FaTruck, FaHeadset } from 'react-icons/fa'; 

const Contact = () => {
  return (
    <div>
      <img src={Group78png} alt="Contact Banner" className={styles.contactBanner} />
      <div className="container mt-4">
        <h2 className="text-center">Get In Touch With Us</h2>
        <p className="text-center">
          For More Information About Our Product & Services, Please Feel Free to Drop us an Email. Our Staff Always There to Help You Out. Do Not Hesitate!
        </p>
        <div className="row">
          <div className="col-md-6">
            <h3><FaMapMarkerAlt /> Address</h3>
            <p>238 6th SE Avenue, New York NY10000, United States</p>
            <h3><FaPhoneAlt /> Phone</h3>
            <p>Mobile: +(84) 546-6789</p>
            <p>Hotline: +(84) 456-6789</p>
            <h3><FaClock /> Working Time</h3>
            <p>Monday-Friday: 9:00 - 22:00</p>
            <p>Saturday-Sunday: 9:00 - 21:00</p>
          </div>
          <div className="col-md-6">
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Your name</label>
                <input type="text" className="form-control" id="name" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" />
              </div>
              <div className="mb-3">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input type="text" className="form-control" id="subject" />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea className="form-control" id="message" rows="4"></textarea>
              </div>
              <button type="submit" className={`btn btn-primary ${styles.customButton}`}>Submit</button>
            </form>
          </div>
        </div>
      </div>
     
      <div className={styles.servicesContainer}>
  <div className={styles.serviceBox}>
    <FaStar className={styles.serviceBoxIcon} />
    <div className={styles.serviceBoxContent}>
      <h3>High Quality</h3>
      <p>crafted from top materials</p>
    </div>
  </div>
  <div className={styles.serviceBox}>
    <FaShieldAlt className={styles.serviceBoxIcon} />
    <div className={styles.serviceBoxContent}>
      <h3>Warranty Protection</h3>
      <p>Over 2 years</p>
    </div>
  </div>
  <div className={styles.serviceBox}>
    <FaTruck className={styles.serviceBoxIcon} />
    <div className={styles.serviceBoxContent}>
      <h3>Free Shipping</h3>
      <p>Order over $150</p>
    </div>
  </div>
  <div className={styles.serviceBox}>
    <FaHeadset className={styles.serviceBoxIcon} />
    <div className={styles.serviceBoxContent}>
      <h3>24/7 Support</h3>
      <p>Dedicated support</p>
    </div>
  </div>
</div>
    </div>
  );
};

export default Contact;
