import React, { Component } from 'react'

export default class City extends Component {
    constructor (props){
        super(props);

        this. state= {
            CityName: 'Surat'
        }
    }
    changeCity= () => {
        this. setState ({
            CityName: 'Ahemdabad'
        });
    }
    render() {
        return (
        <div>
            <p>{this.state.CityName}</p>
            <button onClick={() =>this.changeCity()}>Change City</button>
        </div>
        );
    }
}