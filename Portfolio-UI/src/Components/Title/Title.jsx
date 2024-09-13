import React from 'react';



const Title = ({ title, className }) => {
    return (
      <>
        {title.map((line, index) => (
          <p key={index} className={className}>{line}</p>
        ))}
        </>
    );
  };

export const title1 = [
  "Making a Design System from",
"Scratch"

 ];

 export const title2 = [
   "Creating Pixel perfect icons in",
"Figma"
];


export const title3 = [
  "UI Interactions of the week"
];


export const title4 = [
  "Designing Dashboards"
];

export const title5 = [
  "Vibrant Portraits of 2020"
];

export const title6 = [
  "36 Days of Malayalam type"
];


export const title7 = [
  "Designing Lading pages"
];

export const title8 = [
  "Designing Dashboards with",
  "usability in mind"

 ];

 export const title9 = [
  "Components"
 

 ];

 export const title10 = [
  "Blog"
 

 ];

 export const title11 = [
  "Work"
 

 ];

 export const title12 = [
  "Heading 1"
 

 ];

 export const title13 = [
  "Heading 2"
 

 ];


 export const title14 = [
  "Designing Dashboards",
  "with usability in mind"

 ];
  
  export default Title;