import React from 'react';
import DescriptiveText, { text2} from "../../Descriptive Text/DescriptiveText";
import styles from "./text2.module.css"



const Text2 = () => {
    return (
        <>
         
                <div className={styles.text2}>
                    <DescriptiveText text={text2} />
                </div>
         
          
        </>
    );
};

export default Text2;