import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Countries = () => {
    const [countries, setCountries] = useState([])
    // console.log("countries", countries[0].name.common);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(response => response.json())
            .then(data => setCountries(data))
    }, [])

    return (
        <div>
            <h2>Hello All Countries: {countries.length}</h2>
            <div className='countries-container'>
            {
                // countries.map(country => console.log(country.flags.png))
                countries.map(country => <Country name={country.name} flag={country.flags.png}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;