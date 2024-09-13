import React from 'react';

const DescriptiveText = ({text}) => {
    return (
      <>
        {text.map((line, index) => (
          <p key={index} >{line}</p>
        ))}
     </>
    );
  };

export const text1 = [
  "Amet minim mollit non deserunt ullamco est sit",
"aliqua dolor do amet sint. Velit officia consequat",
"duis enim velit mollit. Exercitation veniam",
"consequat sunt nostrud amet."
 ];

 export const text2 = [
  "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit",
  "officia consequat duis enim velit mollit. Exercitation veniam consequat sunt",
  "nostrud amet."
];

export const text3 = [
  "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet",
  "sint. Velit officia consequat duis enim velit mollit. Exercitation veniam",
  "consequat sunt nostrud amet."
];


export const text4 = [
  "Amet minim mollit non deserunt ullamco est",
  "sit aliqua dolor do amet sint. Velit officia",
  "consequat duis enim velit mollit. Exercitation",
  "veniam consequat sunt nostrud amet."
];


export const text5 = [
  "Amet minim mollit non deserunt ullamco",
  "est sit aliqua dolor do amet sint. Velit officia",
  "consequat duis enim velit mollit.",
  "Exercitation veniam consequat sunt nostrud",
  "amet."
];

export const text6 = [
  "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia",
  "consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
];

export const text7 = [
  "Amet minim mollit non deserunt ullamco est sit",
  "aliqua dolor do amet sint. Velit officia",
  "consequat duis enim velit mollit. Exercitation",
  "veniam consequat sunt nostrud amet."
];

export const text8 = [
  "Amet minim mollit non deserunt ullamco est sit aliqua",
  "dolor do amet sint. Velit officia consequat duis enim velit",
   "mollit. Exercitation veniam consequat sunt nostrud amet."
];

  
  export default DescriptiveText;