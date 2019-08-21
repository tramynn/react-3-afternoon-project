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
                </section>
                <section className="Textbox-middle-nav">
                </section>
                <section className="Textbox-edit">
                </section>
                <section className="Textbox-delete">
                </section>
                <section className="Textbox-new">
                </section>
                <section className="Textbox-next">
                </section>
            </div>
        );
    }
}

export default BottomNav;