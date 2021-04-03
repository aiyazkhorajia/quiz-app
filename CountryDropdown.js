import React from 'react'

const CountryDropdown = ({countryCode}) => {
    return (
        <div>
            <select>
                {props.data.map((x,y) => <option key={y}>{x}</option>)}
            </select>
        </div>
    )
}

export default CountryDropdown