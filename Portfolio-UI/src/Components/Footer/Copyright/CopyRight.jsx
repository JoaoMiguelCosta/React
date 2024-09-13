import React from 'react';

function CopyRight() {

    const estiloParagrafo = {
        fontFamily: 'Heebo',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '14px',
        lineHeight: '21px',
    };

    return (
        <>
            <p style={estiloParagrafo}>Copyright &copy;2024</p>
            <p style={estiloParagrafo}>All rights reserved</p>
        </>
    );
}

export default CopyRight;
