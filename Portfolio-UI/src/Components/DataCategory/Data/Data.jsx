import React from 'react';

const Data = ({ data, className}) => {
    return (
     <>
        {data.map((line, index) => (
          <p key={index} className={className}>{line}</p>
        ))}
        </>
    );
  };

export const data1 = [
   "12 Feb 2020"

 ];

 export const data2 = [
    "2020"
 
  ];

  
 export const data3 = [
    "2018"
 
  ];

  export const data4 = [
    "12 Feb 2019"
 
  ];


  
  export default Data;