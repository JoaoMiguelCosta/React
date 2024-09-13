import React from 'react';
import DescriptiveText, { text3, text4 } from "../../Descriptive Text/DescriptiveText";
import styles from "../../Secção1Home/Text3and4/text3andtext4.module.css"


const Text3and4 = () => {
    return (
        <>
           
                <div className={styles.text3}>
                    <DescriptiveText text={text3}/>
                </div>
           
           <div  className={styles.text4} >
               
                    <DescriptiveText text={text4}  />
           </div>
           
        </>
    );
};

export default Text3and4;