import React, { Component } from 'react';
import './BottomNav.css';

class BottomNav extends Component {
    render() {
        return(
            <div className="bottom-nav-container">
                <section className="Textbox-previous">
                    <h2 onClick={() => this.props.previous()}> &lt; Previous </h2>
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
                    <h2 onClick={() => this.props.next()}>Next &gt;</h2>
                </section>
            </div>
        );
    }
}

export default BottomNav;