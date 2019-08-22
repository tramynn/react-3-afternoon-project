import React, { Component } from 'react';
import data from './data';
import './Textbox.css';

class Textbox extends Component {
    constructor() {
        super();
        this.state = {
            index: 0
        };
    }

    render() {

        let movies = data[this.state.index].favoriteMovies.map((element) => {
            return <li>{element}</li>;
        });


        return(
            <div className="Textbox">
                <div className="Textbox-info">
                    <section className="Name">
                        <h1>{data[this.state.index].name.first} {data[this.state.index].name.last}</h1>
                        <div className="linebreak"></div>
                    </section>
                    <section className="Demographics">
                        <h3>From: {data[this.state.index].country}, {data[this.state.index].city}</h3>
                        <h3>Job Title: {data[this.state.index].title}</h3>
                        <h3>Employer: {data[this.state.index].employer}</h3>
                    </section>
                    <section className="Movies">
                        <h3>Favorite Movies: </h3>
                            <ol>
                                {movies}
                            </ol>
                    </section>
                </div>
                <div className="Textbox-id">
                    <h1>{this.state.index + 1}/{data.length}</h1>
                </div>
            </div>
        );
    }
}

export default Textbox;