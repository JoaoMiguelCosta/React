import React from 'react';
import styles from "./home.module.css"
import Header1 from "../../Components/Header/Header1"
import {Presentacion1, Presentacion2} from "../../Components/Secção1Home/Presentacion/Presentacion"
import Text3and4 from "../../Components/Secção1Home/Text3and4/Text3and4"
import Button from "../../Components/Secção1Home/Button/Button"
import RecentPosts from "../../Components/Secção2Home/RecentPosts/RecentPosts"
import ViewAll from "../../Components/Secção2Home/ViewAll/ViewAll"
import Text1and5 from "../../Components/Secção2Home/Text1and5/Text1and5"
import Title1 from "../../Components/Secção2Home/Title1and2/Title1"
import Title2 from "../../Components/Secção2Home/Title1and2/Title2"
import { MyComponent1, MyComponent2, MyComponent11, MyComponent12, MyComponent13 } from "../../Components/Secção2Home/DataandCategory/DataandCategoryFusion"
import FeaturedWorks from "../../Components/Secção3Home/FeaturedWorks/FeaturedWorks"
import Title4 from "../../Components/Secção3Home/Title4/Title4"
import Title5 from "../../Components/Secção3Home/Title5/Title5"
import Title6 from "../../Components/Secção3Home/Title6/Title6"
import Text2 from "../../Components/Secção3Home/Text2/Text2"
import Text3 from "../../Components/Secção3Home/Text3/Text3"
import Text7 from "../../Components/Secção3Home/Text7/Text7"
import { useNavigate } from 'react-router-dom';


import {Ellipse1Component, Ellipse1Component2, Rectangle30Component, Rectangle32Component, Rectangle34Component } from "../../Components/ImageComponent/Images"







function Home() {
   
  const navigate = useNavigate(); 

  const handleClick = (Id) => {
    navigate(`/workdetail/${Id}`);
  };



  return (
    <div className = {styles.pai}>
    <div className = {styles.header}><Header1/></div>
    <div className = {styles.seccion}>
      <div className = {styles.seccion1}>
        <div className = {styles.seccion11}>
          <div className = {styles.seccion111a}>
            <div className = {styles.seccion111a1}>
              <div className = {styles.seccion111a15}><Presentacion1/><Presentacion2/></div>
              <div className = {styles.seccion111a16}><Text3and4/></div>
              <div className = {styles.seccion111a17}><Button/></div>
          </div>
            <div className = {styles.seccion111a2}>
              <div className = {styles.seccion111a25}><Ellipse1Component/><Ellipse1Component2/></div>
            </div>
          </div>
          <div className = {styles.seccion111b}></div>
        </div>
      </div>
      <div className = {styles.seccion2}>
        <div  className = {styles.seccion22}>
          <div className = {styles.seccion22a}>
            <div  className = {styles.seccion22a1}><RecentPosts/></div>
            <div  className = {styles.seccion22a2}><ViewAll/></div>
          </div>
          <div className = {styles.seccion22b}>
            <div className = {styles.seccion22b1}>
              <div className = {styles.seccion22b11}><div ><Title1/></div>
              </div>
              <div className = {styles.seccion22b12}><MyComponent1 /></div>
              <div className = {styles.seccion22b13}><Text1and5/>
              </div>
            </div>
            <div className = {styles.seccion22b2}>
            <div className = {styles.seccion22b11}><Title2/></div>
              <div className = {styles.seccion22b12}><div  className = {styles.component2}>
                <MyComponent2 />
              </div><div className = {styles.component1}>
                <MyComponent1 />
              </div></div>
              <div className = {styles.seccion22b13}><Text1and5/></div>
            </div>
            <div className = {styles.seccion22b3}></div>
            
          </div>
        </div>
      </div>
      <div className = {styles.seccion3}>
        <div  className = {styles.seccion33}>
          <div className = {styles.seccion33a}><div className = {styles.seccion33a1}><FeaturedWorks/></div></div>
          <div className = {styles.seccion33b}>
          <div  className = {styles.seccion33b1}>
          <div className = {styles.seccion33b1a}><div className = {styles.seccion3imagem}><Rectangle30Component/></div></div>
              <div className = {styles.seccion33b1b} >
                <div onClick={() => handleClick(1)} className = {styles.click} >
                  <div className = {styles.seccion33b1ba}><Title4/></div>
                  <div className = {styles.seccion33b1bb}><MyComponent11/></div>
                  <div className = {styles.seccion33b1bc}><Text2/><Text7/></div>
                </div>
              </div>
          </div>
            <div  className = {styles.seccion33b2}>
            <div className = {styles.seccion33b1a}><div className = {styles.seccion3imagem} ><Rectangle32Component/></div></div>
              <div className = {styles.seccion33b1b}>
                <div className = {styles.seccion33b1ba}><Title5/></div>
                <div className = {styles.seccion33b1bb}><MyComponent12/></div>
                <div className = {styles.seccion33b1bc}><Text2/></div>
              </div>
            </div>
            <div  className = {styles.seccion33b3}>
            <div className = {styles.seccion33b1a}><div className = {styles.seccion3imagem} ><Rectangle34Component/></div></div>
              <div className = {styles.seccion33b1b}>
                <div className = {styles.seccion33b1ba}><Title6/></div>
                <div className = {styles.seccion33b1bb}><MyComponent13/></div>
                <div className = {styles.seccion33b1bc}><Text3/></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
       
     
    </div>
  );
}

export default Home;


