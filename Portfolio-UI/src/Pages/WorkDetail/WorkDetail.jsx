import React from 'react';
import Header2 from "../../Components/Header/Header2"
import styles from "./workdetail.module.css"
import {MyComponent9,MyComponent10} from"../../Components/Secção2Home/DataandCategory/DataandCategoryFusion"
import Text6 from "../../Components/Secção1WorkDetail/Text6/Text6"
import Text7 from "../../Components/Secção3Home/Text7/Text7"
import Title8 from "../../Components/Secção1WorkDetail/Title8/Title8"
import Title14 from "../../Components/Secção1WorkDetail/Title14/Title14"
import Title13 from "../../Components/Secção2WorkDetail/Title13/Title13"
import Title12 from "../../Components/Secção2WorkDetail/Title12/Title12"
import {Rectangle4Component, Rectangle5Component, Rectangle6Component } from "../../Components/ImageComponent/Images"






function WorkDetail() {

 
 
  return (
    <div className ={styles.Pai}>
    <div className ={styles.Header}><Header2/></div>
    <div className ={styles.Seccao1}>
      <div  className ={styles.Seccao11}><Title8/><Title14/></div>
      <div  className ={styles.Seccao12}><MyComponent9/><MyComponent10/></div>
      <div  className ={styles.Seccao13}><Text6/><Text7/></div>
      <div  className ={styles.Seccao14}>
        <div className ={styles.Seccao141}> <Rectangle4Component/></div>
        
      </div>
      
      
    </div>
    <div className ={styles.Seccao2}>
      <div className ={styles.Seccao21}><Title12/></div>
      <div className ={styles.Seccao22}><Title13/></div>
      <div className ={styles.Seccao23}><Text6/><Text7/></div>
      <div className ={styles.Seccao24}><Rectangle5Component/></div>
      <div className ={styles.Seccao25}><Rectangle6Component/></div>
    

    </div>
     
    </div>
  );
}

export default WorkDetail;

