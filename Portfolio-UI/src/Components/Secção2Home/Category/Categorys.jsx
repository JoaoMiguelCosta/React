import React from 'react';
import Category, { category1, category2, category3, category4, category5, category6, category7, category8, category9, category10}  from "../../DataCategory/Category/Category"
import styles from "./category.module.css"


    export const Category1 = () => (
        
          <Category category={category1} className={styles.category1}/>
        
      );
      
      export const Category2 = () => (
       
          <Category category={category2} className={styles.category1}/>
       
      );
      
      export const Category3 = () => (
      
          <Category category={category3} className={styles.category4}/>
        
      );
      
      export const Category4 = () => (
      
          <Category category={category4} className={styles.category4}/>
        
      );
      
      export const Category5 = () => (
        
          <Category category={category5} className={styles.category4}/>
        
      );
      
      export const Category6 = () => (
        
          <Category category={category6} className={styles.category4}/>
        
      );
      
      export const Category7 = () => (
       
          <Category category={category7} className={styles.category4} />
        
      );
      
      export const Category8 = () => (
        
          <Category category={category8} className={styles.category4}/>
        
      );
      
      export const Category9 = () => (
       
          <Category category={category9} className={styles.category9}/>
       
      );
      
      export const Category10 = () => (
        
          <div className={styles.pai}>
              <Category category={category10} className={styles.category10}/>
          </div>
        
      );