import React from 'react';

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nav_text:['Home', 'Teaching', 'Research', 'Resources', 'Contact'],
            nav_urls:['index.html', 'teaching.html', 'research.html', 'resources.html', 'contact.html'],
            current_nav:0 //current navigation id
        };
        this.year = new Date();
        this.year = this.year.getFullYear();
    }

    render() {
        return (
            <p className="text-center">
                <span>|</span>
                {
                    this.state.nav_text.map( (text, index) =>
                    <span>&nbsp;<a href={this.state.nav_urls[index]}>{text}</a>&nbsp;|</span>
                )}
            <span> &nbsp;&nbsp; &copy; {this.year}</span>
            </p>
        );
    }
}

module.exports = Footer;