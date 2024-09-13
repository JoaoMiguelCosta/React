import React from 'react';
import  Title, { title2} from "../../Title/Title"
import styles from "./title1andtitle2.module.css"



const Title2 = () => {
    return (
        <>
           <div className={styles.title1}>
               <Title title={title2}/>
           </div>
            
        </>
    );
};

export default Title2;