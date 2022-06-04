import React, { Component } from 'react'

export default class Country extends Component {
    constructor (props){
        super(props);

        this. state= {
            CountryName: 'India'
        }
    }
    changeCountry= () => {
        this. setState ({
            CountryName: 'US'
        });
    }
    render() {
        return (
        <div>
            <p>{this.state.CountryName}</p>
            <button onClick={() =>this.changeCountry()}>Change Country</button>
        </div>
        );
    }
}