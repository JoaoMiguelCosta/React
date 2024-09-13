import React from 'react';
import styles from "./blog.module.css";
import Header2 from "../../Components/Header//Header2"
import {MyComponent6} from "../../Components/Secção2Home/DataandCategory/DataandCategoryFusion"
import Text7 from "../../Components/Secção3Home/Text7/Text7"
import Text6 from "../../Components/Secção1Blog/Text6/Text6"
import Title3 from "../../Components/Secção1Blog/Title3/Title3"
import Title10 from "../../Components/Secção1Blog/Title10/Title10"




function Blog() {
  return (
    <div className = {styles.pai}>
         <div className = {styles.header}><Header2/></div>
         <div className = {styles.seccion}>
          <div className = {styles.seccion1}>
            <div className = {styles.seccionTitle}><Title10/></div>
            <div className = {styles.seccion1a}>
              <div className = {styles.seccion1a1}><Title3/></div>
              <div className = {styles.seccion1a2}><MyComponent6/></div>
              <div className = {styles.seccion1a3}><Text7/><Text6/></div>
            </div>
            <div className = {styles.seccion1b}>
            <div className = {styles.seccion1a1}><Title3/></div>
              <div className = {styles.seccion1a2}><MyComponent6/></div>
              <div className = {styles.seccion1a3}><Text7/><Text6/></div>
            </div>
            <div className = {styles.seccion1c}>
            <div className = {styles.seccion1a1}><Title3/></div>
              <div className = {styles.seccion1a2}><MyComponent6/></div>
              <div className = {styles.seccion1a3}><Text7/><Text6/></div>
            </div>
            <div className = {styles.seccion1d}>
               <div className = {styles.seccion1a1}><Title3/></div>
              <div className = {styles.seccion1a2}><MyComponent6/></div>
              <div className = {styles.seccion1a3}><Text7/><Text6/></div>
            </div>
          </div>
         </div>
     
   
       
     
    </div>
  );
}

export default Blog;

