import React, { Component } from 'react';
import './BottomNav.css';

class BottomNav extends Component {
    constructor() {
        super();
    }
    
    render() {
        return(
            <div className="bottom-nav-container">
                <section className="Textbox-previous">
                    <h2> &lt; Previous </h2>
                </section>
                <section className="Textbox-middle-nav">
                    <section className="Textbox-edit">
                        <button className="button">Edit</button>
                    </section>
                    <section className="Textbox-delete">
                        <button className="button">Delete</button>
                    </section>
                    <section className="Textbox-new">
                        <button className="button">New</button>
                    </section>
                </section>
                <section className="Textbox-next">
                    <h2>Next &gt;</h2>
                </section>
            </div>
        );
    }
}

export default BottomNav;