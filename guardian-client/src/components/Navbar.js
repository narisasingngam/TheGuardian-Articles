import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './../style/nav.css'

export default class Navbar extends Component {
    render() {
        return (
            <div className="nav">
                    <Link to="/" className="nav-link">
                <div className="nav-home">
                        Home
                </div>
                    </Link>
            </div>
        )
    }
}
