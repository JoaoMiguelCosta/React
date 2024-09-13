import React from 'react';
import DescriptiveText, { text1, text5 } from "../../Descriptive Text/DescriptiveText";
import styles from "./text1and5.module.css"



const Text1and5 = () => {
    return (
        <>
            
                <div className={styles.text1}>
                    <DescriptiveText text={text1} />
                </div>
         
        
                <div className={styles.text5}>
                    <DescriptiveText text={text5} />
                </div>
          
        </>
    );
};

export default Text1and5;