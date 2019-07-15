import React, { Component } from 'react';
import { Link } from 'react-dom';

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <link to="/" className="navbar-brand" >ExcerTracker</link>
                <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="navbar-item">
                        <link to="/" className="nav-link">Exercises</link>
                    </li>
                    <li className="navbar-item">
                        <link to="/create" className="nav-link">Create Exercise log</link>
                    </li>
                    <li className="navbar-item">
                        <link to="/user" className="nav-link">Create User</link>
                    </li>
                </ul>
                </div>
            </nav>
        );
    }
}