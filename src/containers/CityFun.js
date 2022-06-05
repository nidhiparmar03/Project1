import React, { useState } from 'react';

function cityFun(props){
    const[CityName, setCityName]= useState ('Surat');

    const changeCity=() =>{
        setCityName: ('Ahemdabad')
    }
    return (
        <div>
            <P>{ CityName }</P>
            <button onClick={() => changeCity() }>Change City</button>
        </div>
    );
}
export default cityFun;