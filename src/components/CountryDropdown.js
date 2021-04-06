import React, { useState, useEffect } from 'react';
//import Moment from 'react-moment';

const CountryDropdown = ({countryCodes}) => {
    const [selectedCountry, setSelectedCountry] = useState(countryCodes[0]);
    const [timeAndDate, setTimeAndDate] = useState();
    
    useEffect(() => {
        const date = new Date();
        setTimeAndDate(new Intl.DateTimeFormat(selectedCountry, {
            year: 'numeric', month: 'numeric', day: 'numeric',
            hour: 'numeric', minute: 'numeric', second: 'numeric'
        }).format(date).toString());
    }, [selectedCountry])

    const handleChange = (e) => {
        setSelectedCountry(e.target.value);
    }
    return (
        <div>
            <select value={selectedCountry} onChange={(e) => handleChange(e)}>
                {countryCodes.map((country) => (
                    <option key={country} value={country}>{country}</option>
                ))}
            </select>
            <p>Selected Locale: {selectedCountry}</p>
            <p>Date & Time: {timeAndDate}</p>
        </div>
    )
}

export default CountryDropdown