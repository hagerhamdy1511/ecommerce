import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import styles from './CheckoutPage.module.css';
import logo1 from "../../Assets/images/Group 79.png"

export default function CheckoutPage() {
  return (
    <div className={styles.checkoutPage}>
     <div className={styles.header}>
        <img src={logo1} alt="Group 79.png" className={styles.logoImage1} />
        </div>
        <Container>
       
        <Row>
          <Col md={6}>
            <h3>Billing details</h3>
            <Form>
              <Row>
                <Col md={6}>
                  <Form.Group controlId="firstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" required />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="lastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" required />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group controlId="companyName">
                <Form.Label>Company Name (Optional)</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group controlId="country">
                <Form.Label>Country / Region</Form.Label>
                <Form.Control as="select" required>
                  <option>Choose...</option>
                  <option>Country 1</option>
                  <option>Country 2</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="streetAddress">
                <Form.Label>Street address</Form.Label>
                <Form.Control type="text" required />
              </Form.Group>
              <Form.Group controlId="city">
                <Form.Label>Town / City</Form.Label>
                <Form.Control type="text" required />
              </Form.Group>
              <Form.Group controlId="state">
                <Form.Label>State / County (Optional)</Form.Label>
                <Form.Control as="select">
                  <option>Choose...</option>
                  <option>State 1</option>
                  <option>State 2</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="zip">
                <Form.Label>ZIP / Postcode</Form.Label>
                <Form.Control type="text" required />
              </Form.Group>
              <Form.Group controlId="phone">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="tel" required />
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" required />
              </Form.Group>
              <Form.Group controlId="extraField">
                <Form.Control type="text" placeholder="Extra Field" />
              </Form.Group>
            </Form>
          </Col>
          <Col md={6}>
            <h3>Your Order</h3>
            <div className={styles.productSummary}>
              <p>Product</p>
              <p>Subtotal: Rs. 25,000.00</p>
              <p>Total: Rs. 25,000.00</p>
            </div>
            <h3>Payment Methods</h3>
            <Form>
              <Form.Check 
                type="radio" 
                label="Direct Bank Transfer" 
                name="paymentMethod" 
                id="bankTransfer" 
                required 
              />
              <Form.Check 
                type="radio" 
                label="Cash on Delivery" 
                name="paymentMethod" 
                id="cashOnDelivery" 
                required 
              />
            </Form>
            <Button variant="dark" className={styles.placeOrderButton}>Place Order</Button>
          </Col>
        </Row>
        <Row className={styles.serviceRow}>
          <Col md={3} className={styles.serviceCol}>
            <i className="fas fa-trophy"></i>
            <p>High Quality crafted from top materials</p>
          </Col>
          <Col md={3} className={styles.serviceCol}>
            <i className="fas fa-shield-alt"></i>
            <p>Warranty Protection Over 2 years</p>
          </Col>
          <Col md={3} className={styles.serviceCol}>
            <i className="fas fa-truck"></i>
            <p>Free Shipping on orders over $50</p>
          </Col>
          <Col md={3} className={styles.serviceCol}>
            <i className="fas fa-headset"></i>
            <p>24/7 Support Dedicated support</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}