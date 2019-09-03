import React, { Component } from 'react';

import Header from '../components/Header';

export default class Sobre extends Component {
    render() {
        return (
            <div>
                <Header titulo="Sobre" />
                <p>Este app foi implementado com React</p>
            </div>
        )
    }
}
