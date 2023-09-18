import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import styles from '../Carousel/carousel.module.scss';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };



  return (
    <Carousel className={styles.container} activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/GpgYHbT/carousel1.jpg"
          alt="First slide"
        />
        <Carousel.Caption className={styles.caption}>
          <h3>Welcome to Tenth Player!</h3>
          <p>Every man and women has a passion. Our passion is football. Here you can find a great variety of football shirts.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/r4X9mjk/carousel2.jpg"
          alt="Second slide"
        />

        <Carousel.Caption className={styles.caption}>
          <h3>Find your dream football shirt</h3>
          <p>Choose the shirt that suits you best at the best price and incredible discounts for a purchase you won't regret.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/h2t3PVm/carousel3.jpg"
          alt="Third slide"
        />

        <Carousel.Caption className={styles.caption}>
          <h3>We also have wholesale prices</h3>
          <p>
            We sell goods in large quantities for being retailed in other stores. If you reach certain amount of money, you can access to incredible discounts.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel