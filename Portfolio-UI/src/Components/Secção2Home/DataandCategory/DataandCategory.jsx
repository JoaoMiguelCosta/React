import React from 'react';



const DataandCategory = ({ DataComponent, CategoryComponent, className}) => {
    return (
        <>
            <DataComponent />
            <p className = {className}></p>
            <CategoryComponent />
            </>
    );
};

export default DataandCategory;