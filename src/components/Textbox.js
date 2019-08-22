import React, { Component } from 'react';
import data from './data';
import BottomNav from './BottomNav/BottomNav'
import './Textbox.css';

class Textbox extends Component {
    constructor() {
        super();
        this.state = {
            index: 0
        };

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.changeCounter = this.changeCounter.bind(this);
    }

    increment() {
        this.setState({
            index: this.state.index + 1
        });
    }

    decrement() {

    }

    changeCounter() {

    }

    render() {

        let movies = data[this.state.index].favoriteMovies.map((item) => {
            return <li>{item}</li>;
        });


        return(
            <div>
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
                <BottomNav />
            </div>
            
        );
    }
}

export default Textbox;