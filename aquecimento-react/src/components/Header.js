import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <span id="titulo">{this.props.titulo}</span>
                <ul id="menu">
                    <li>
                        <Link to="/">
                            Início
                        </Link>
                    </li>
                    <li>
                        <Link to="/sobre">
                            Sobre
                        </Link>
                    </li>
                    <li>
                        <Link to="/agenda">
                            Agenda
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }
}
