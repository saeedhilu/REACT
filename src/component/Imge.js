// src/component/Sample.js

import React from 'react';

const Sample = () => {
  const styles = {
    card: {
      border: '1px solid #ddd',
      borderRadius: '8px',
      overflow: 'hidden',
      width: '200px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      margin: '20px',
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif'
    },
    imageContainer: {
      position: 'relative',
      backgroundColor: '#d32f2f',
      padding: '10px'
    },
    image: {
      maxWidth: '100%',
      maxHeight: '150px'
    },
    heartIcon: {
      position: 'absolute',
      top: '10px',
      right: '10px',
      fontSize: '20px',
      color: '#fff',
      cursor: 'pointer'
    },
    productName: {
      fontWeight: 'bold',
      margin: '10px 0'
    },
    oldPrice: {
      textDecoration: 'line-through',
      color: '#888',
      fontSize: '14px'
    },
    newPrice: {
      fontWeight: 'bold',
      fontSize: '20px',
      color: '#d32f2f',
      margin: '5px 0'
    },
    cartIcon: {
      fontSize: '24px',
      margin: '10px 0',
      color: '#000',
      cursor: 'pointer'
    }
  };

  return (
    <div style={styles.card}>
      <div style={styles.imageContainer}>
        <img
          style={styles.image}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJbF-ZZwfEyKM1UqZj9C38Kh4QeVbBWgVGEw&usqp=CAU" // Replace with your image URL
          alt="Batman"
        />
        <span style={styles.heartIcon}>&hearts;</span>
      </div>
      <div style={styles.productName}>ARTFX DC UNIVERSE Batman Package</div>
      <div style={styles.oldPrice}>$9,999</div>
      <div style={styles.newPrice}>$9,999</div>
      <div style={styles.cartIcon}>&#128722;</div> {/* This is the Unicode for a shopping cart icon */}
    </div>
  );
};

export default Sample;
