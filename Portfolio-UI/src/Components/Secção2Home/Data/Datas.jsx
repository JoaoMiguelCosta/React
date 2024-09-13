import React from 'react';
import Data, { data1, data2, data3, data4 } from "../../DataCategory/Data/Data";
import styles from "./data.module.css"
import { useLocation } from 'react-router-dom';



export const Data1 = () => (

    <Data data={data1} className={styles.data1}/>
 
);

export const Data2 = () => {
    const location = useLocation();

   
    const isWorkDetailPage = location.pathname === '/workdetail/1';

    return (
        <Data 
            data={data2} 
            className={isWorkDetailPage ? styles.data2diferente : styles.data2} 
        />
    );
};

export const Data3 = () => (

    <Data data={data3} className={styles.data2} />

);

export const Data4 = () => (
 
    <Data data={data4} className={styles.data4} />
 
);