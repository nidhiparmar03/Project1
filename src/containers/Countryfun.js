import React, { useState } from 'react';

function countryFun(props){
    const[CountryName, setCountryName]= useState ('India');

    const changeCountry=() =>{
        setCountryName: ('US')
    }
    return (
        <div>
            <P>{ CountryName }</P>
            <button onClick={() => changeCountry() }>Change Country</button>
        </div>
    );
}
export default countryFun;