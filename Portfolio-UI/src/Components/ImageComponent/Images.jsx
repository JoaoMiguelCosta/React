import React from 'react';
import Ellipse1Img from "../../Assets/Desktop/Ellipse 1.png";
import Rectangle30Img from "../../Assets/Desktop/Rectangle 30.png";
import Rectangle32Img from "../../Assets/Desktop/Rectangle 32.png";
import Rectangle34Img from "../../Assets/Desktop/Rectangle 34.png";
import Rectangle40Img from "../../Assets/Desktop/Rectangle 40.png";
import Rectangle6Img from "../../Assets/Desktop/Rectangle 6.png";
import Rectangle5Img from "../../Assets/Desktop/Rectangle 5.png";
import Rectangle4Img from "../../Assets/Desktop/Rectangle 4.png";
import Ellipse1ImgM from "../../Assets/Mobile/Ellipse 1M.png";
import ImageComponent from "./ImageComponent";
import Rectangle30ImgM from "../../Assets/Mobile/Rectangle 30M.png";
import Rectangle5ImgM from "../../Assets/Mobile/Rectangle 5M.png";
import Rectangle6ImgM from "../../Assets/Mobile/Rectangle 6M.png";
import Rectangle4ImgM from "../../Assets/Mobile/Rectangle 4M.png";
import Rectangle31ImgM from "../../Assets/Mobile/Rectangle 31M.png";
import { useNavigate } from 'react-router-dom';
import styles from "./image.module.css"

export const Ellipse1Component = () => {
  return (
    <div>
      <ImageComponent src={Ellipse1Img} alt="Ellipse 1" />
     
    </div>
  );
};

export const Ellipse1Component2 = () => {
    return (
      <div>
        <ImageComponent src={Ellipse1ImgM} alt="Ellipse 1" />
       
      </div>
    );
  };

export const Rectangle30Component = () => {

    
    const navigate = useNavigate(); 

    const handleClick = (Id) => {
      navigate(`/workdetail/${Id}`);
    };
  return (

    <div onClick={() => handleClick(1)} className={styles.click}>
            <ImageComponent src={Rectangle30Img} alt="Rectangle 30" />
            <ImageComponent src={Rectangle30ImgM} alt="Rectangle 30"/>
        </div>
  );
};

export const Rectangle32Component = () => {
  return (
    <div>
      <ImageComponent src={Rectangle32Img} alt="Rectangle 32" />
      <ImageComponent src={Rectangle31ImgM} alt="Rectangle 31" />
    </div>
  );
};

export const Rectangle34Component = () => {
  return (
    <div>
      <ImageComponent src={Rectangle34Img} alt="Rectangle 34" />
    </div>
  );
};

export const Rectangle40Component = () => {
  return (
    <ImageComponent src={Rectangle40Img} alt="Rectangle 40" />
  );
};

export const Rectangle6Component = () => {
  return (
    <div>
      <ImageComponent src={Rectangle6Img} alt="Rectangle 6" />
      <ImageComponent src={Rectangle6ImgM} alt="Rectangle 6" />
    </div>
  );
};

export const Rectangle5Component = () => {
  return (
    <div>
      <ImageComponent src={Rectangle5Img} alt="Rectangle 5" />
      <ImageComponent src={Rectangle5ImgM} alt="Rectangle 5" />
    </div>
  );
};

export const Rectangle4Component = () => {
  return (
    <div>
      <ImageComponent src={Rectangle4Img} alt="Rectangle 4" />
      <ImageComponent src={Rectangle4ImgM} alt="Rectangle 4" />
    </div>
  );
};