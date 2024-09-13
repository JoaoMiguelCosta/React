
import React from 'react';
import styles from "./imagecomponent.module.css"; 

const ImageComponent = ({ src, alt }) => {

  const isSpecialImage = src.includes('Desktop'); 

  
  const imageClass = isSpecialImage ? styles.specialImage : styles.regularImage;

  return (
    <img src={src} alt={alt} className={imageClass} />
  );
};

export default ImageComponent;