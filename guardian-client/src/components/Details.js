import React, { Component } from 'react'
import './../style/details.css'

export class Details extends Component {

    render() {
        const { state } = this.props.location
        return (
            <div className="container-detail">
                <div className="details">
                    <h1>{state.title}</h1>
                    <div className="wrap-detail">
                        <div className="date">
                            Public date: {state.date}
                        </div>
                        <div className="section">
                            Section: {state.section}
                        </div>
                    </div>
                        <div className="url">
                            Check out url: {state.url}
                        </div>
                </div>
            </div>
        )
    }
}

export default Details
