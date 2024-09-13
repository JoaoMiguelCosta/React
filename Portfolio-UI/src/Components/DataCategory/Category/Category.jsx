import React from 'react';

const Category = ({ category, className}) => {
    return (
      <>
        {category.map((line, index) => (
          <p key={index} className={className}>{line}</p>
        ))}
     </>
    );
  };

export const category1 = [
   "Design, Pattern"

 ];

 export const category2 = [
  "Figma, Icon Design"

];

export const category3 = [
  "Express, Handlebars"

];


export const category4 = [
  "Dashboard"

];


export const category5 = [
  "Illustration"

];
export const category6 = [
  "Typography"

];


export const category7 = [
  "Components, Design"

];

export const category8 = [
  "Website"

];

export const category9 = [
  "Dashboard, User Experience Design"

];


export const category10 = [
  "Dashboard, User Experience",
  "Design"

];
  
  export default Category;