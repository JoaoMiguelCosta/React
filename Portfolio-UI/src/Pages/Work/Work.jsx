import React from 'react';
import styles from "./work.module.css";
import Header2 from "../../Components/Header/Header2"
import Title11 from "../../Components/Secção1Work/Title11/Title11"
import Title4 from "../../Components/Secção3Home/Title4/Title4"
import {MyComponent11, MyComponent12, MyComponent13, MyComponent15, MyComponent8} from "../../Components/Secção2Home/DataandCategory/DataandCategoryFusion"
import Text8 from "../../Components/Secção1Work/Text8/Text8"
import Title6 from "../../Components/Secção3Home/Title6/Title6"
import Title5 from "../../Components/Secção3Home/Title5/Title5"
import Title9 from "../../Components/Secção1Work/Title9/Title9"
import Text7 from "../../Components/Secção3Home/Text7/Text7"
import Title7 from "../../Components/Secção1Work/Title7/Title7"

import {Rectangle30Component, Rectangle32Component,Rectangle34Component, Rectangle40Component} from "../../Components/ImageComponent/Images"
import { useNavigate } from 'react-router-dom';









function Work() {

     
  const navigate = useNavigate(); 

  const handleClick = (Id) => {
    navigate(`/workdetail/${Id}`);
  };

  return (
    <div className = {styles.pai}>
         <div className = {styles.header}><Header2/></div>
         <div className = {styles.seccion}>
          <div className = {styles.seccion1}>
          <div  className = {styles.seccion33}>
          <div className = {styles.seccion33a}><Title11/></div>
          <div className = {styles.seccion33b}>
            <div  className = {styles.seccion33b1}>
              <div className = {styles.seccion33b1a}><div className = {styles.imagem}><Rectangle30Component/></div></div>
              <div className = {styles.seccion33b1b} >
                <div onClick={() => handleClick(1)} className = {styles.click}>
                  <div className = {styles.seccion33b1ba}><Title4/></div>
                  <div className = {styles.seccion33b1bb}><MyComponent11/></div>
                  <div className = {styles.seccion33b1bc}><Text8/><Text7/></div>
                </div>
              </div>
            </div>
            <div  className = {styles.seccion33b2}>
            <div className = {styles.seccion33b1a}><div className = {styles.imagem}><Rectangle32Component/></div></div>
              <div className = {styles.seccion33b1b}>
                
                  <div className = {styles.seccion33b1ba}><Title5/><Title7/></div>
                  <div className = {styles.seccion33b1bb}><MyComponent12/><MyComponent8/></div>
                  <div className = {styles.seccion33b1bc}><Text8/><Text7/></div>
                
              </div>
            </div>
            <div  className = {styles.seccion33b3}>
            <div className = {styles.seccion33b1a}><div className = {styles.imagem}><Rectangle34Component/></div></div>
              <div className = {styles.seccion33b1b}>
                <div className = {styles.seccion33b1ba}><Title6/></div>
                <div className = {styles.seccion33b1bb}><MyComponent13/></div>
                <div className = {styles.seccion33b1bc}><Text8/></div>
              </div>
            </div>
            <div  className = {styles.seccion33b4}>
            <div className = {styles.seccion33b1a}><div className = {styles.imagem}><Rectangle40Component/></div></div>
              <div className = {styles.seccion33b1b}>
                <div className = {styles.seccion33b1ba}><Title9/></div>
                <div className = {styles.seccion33b1bb}><MyComponent15/></div>
                <div className = {styles.seccion33b1bc}><Text8/></div>
              </div>
            </div>
          </div>
        </div>
            
          </div>
          
         </div>
     
   
       
     
    </div>
  );
}

export default Work ;

