import React, { Component } from 'react'

export default class City extends Component {
    constructor (props){
        super(props);

        this. state= {
            CountryName: 'Surat'
        }
    }
    changeCountry= () => {
        this. setState ({
            CountryName: 'Ahemdabad'
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