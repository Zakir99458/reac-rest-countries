import React from 'react';
import './Country.css'

const Country = (props) => {
    // const 
    // console.log(props.name)

    return (
        <div className='country'>
            {/* <p> This is Country component</p> */}
            <p>Country Name: {props.name.common}</p>
            <img src={props.flag} alt=''></img>
        </div>
    );
};

export default Country;