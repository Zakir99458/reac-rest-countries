import React from 'react';
import './Country.css'

const Country = (props) => {
    // const 
    console.log(props.name.common)

    return (
        <div className='country'>
            {/* <p> This is Country component</p> */}
            <h4>Country Name: {props.name.common}</h4>
        </div>
    );
};

export default Country;