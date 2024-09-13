import React from 'react';
import DescriptiveText, { text8} from "../../Descriptive Text/DescriptiveText";
import styles from "./text8.module.css"



const Text8 = () => {
    return (
        <>
           
                <div className={styles.text8}>
                    <DescriptiveText text={text8} />
                </div>
           
          
        </>
    );
};

export default Text8;