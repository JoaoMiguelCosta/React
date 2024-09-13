import React from 'react';
import { Data1, Data2, Data3, Data4 } from "../../Secção2Home//Data/Datas";
import { Category1, Category2, Category3, Category4, Category5, Category6, Category7, Category8, Category9, Category10} from "../../Secção2Home/Category/Categorys";
import DataandCategory from "./DataandCategory";
import styles from "./dataandcategoryfusion.module.css"


export const MyComponent1 = () => {
   
  

    return (
     
            <div className = {styles.Pai} >
                <DataandCategory
                    DataComponent={Data1}
                    CategoryComponent={Category1}
                    className = {styles.paragrafo1}
                />


            </div>
       
    );
};

export const MyComponent2 = () => (
   
    
    
        <div className = {styles.Pai}>
            <DataandCategory
            DataComponent={Data1}
            CategoryComponent={Category2}
            className = {styles.paragrafo1}
                 />
        </div>
    
);

export const MyComponent3 = () => (
    <DataandCategory DataComponent={Data2} CategoryComponent={Category4} />
);

export const MyComponent4 = () => (
    <DataandCategory DataComponent={Data3} CategoryComponent={Category5} />
);

export const MyComponent5 = () => (
    <DataandCategory DataComponent={Data3} CategoryComponent={Category6} />
);

export const MyComponent6 = () => (
    <div className = {styles.Pai}>
        <DataandCategory DataComponent={Data4} CategoryComponent={Category3}  className = {styles.paragrafo1}/>
    </div>
);

export const MyComponent7 = () => (
    <DataandCategory DataComponent={Data3} CategoryComponent={Category7} />
);

export const MyComponent8 = () => (
    <div className = {styles.Pai12}>
        <DataandCategory DataComponent={Data2} CategoryComponent={Category8} className = {styles.paragrafo2} />
    </div>
);

export const MyComponent9 = () => (
    <div className = {styles.Pai14}>
        <DataandCategory DataComponent={Data2} CategoryComponent={Category9} className = {styles.paragrafo2} />
    </div>
);

export const MyComponent10 = () => (
    <div className = {styles.Pai15}>
        <DataandCategory DataComponent={Data2} CategoryComponent={Category10} className = {styles.paragrafo2}/>
    </div>
);

export const MyComponent11 = () => (
    <div  className = {styles.Pai11}>
        <DataandCategory DataComponent={Data2} CategoryComponent={Category4} className = {styles.paragrafo2}/>
    </div>
);

export const MyComponent12 = () => (
    <div className = {styles.Pai13}>
        <DataandCategory DataComponent={Data3} CategoryComponent={Category5} className = {styles.paragrafo2}/>
    </div>
);

export const MyComponent13 = () => (
    <div className = {styles.Pai11}>
        <DataandCategory DataComponent={Data3} CategoryComponent={Category6} className = {styles.paragrafo2} />
    </div>
);



export const MyComponent14 = () => (
    <DataandCategory DataComponent={Data1} CategoryComponent={Category3} />
);

export const MyComponent15 = () => (
    <div className = {styles.Pai11}>
        <DataandCategory DataComponent={Data2} CategoryComponent={Category7} className = {styles.paragrafo2} />
    </div>
);





