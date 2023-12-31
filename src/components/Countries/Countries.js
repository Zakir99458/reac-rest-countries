import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Countries = () => {
    const [countries, setCountries] = useState([])

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(response => response.json())
            .then(data => setCountries(data))
    }, [])

    return (
        <div>
            <h2>Hello All Countries: {countries.length}</h2>
            {
                countries.map(country => <Country name={country.name} email={country.email}></Country>)
            }
        </div>
    );
};

export default Countries;