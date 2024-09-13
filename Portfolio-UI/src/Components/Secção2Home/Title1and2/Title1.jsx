import React from 'react';
import  Title, { title1} from "../../Title/Title"
import styles from "./title1andtitle2.module.css"



const Title1 = () => {
    return (
        <>
            
                <div className= {styles.title1}>
                    <Title title={title1}/>
                </div>
           
            
        </>
    );
};

export default Title1;