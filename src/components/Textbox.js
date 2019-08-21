import React, { Component } from 'react';
import data from './data';
import './Textbox.css';

class Textbox extends Component {
    constructor() {
        super();
        this.state = {
            counter: 0
        };
    }

    render() {

        // let movies = data[0].favoriteMovies.map


        return(
            <div className="Textbox">
                <div className="Textbox-info">
                    <section className="Name">
                        <h1>Tramy Nguyen</h1>
                        <div className="linebreak"></div>
                    </section>
                    <section className="Demographics">
                        <h3>From: </h3>
                        <h3>Job Title: </h3>
                        <h3>Employer: </h3>
                    </section>
                    <section className="Movies">
                        <h3>Favorite Movies: </h3>
                            <ol>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ol>
                    </section>
                </div>
                <div className="Textbox-id">
                    <h1>{0 + 1}/{data.length}</h1>
                </div>
            </div>
        );
    }
}

export default Textbox;