import React from 'react';
import ReactDOM from 'react-dom';
import publications from './data/publications.json'

class Publication extends React.Component {
    constructor(props) {
        super(props);
        this.state = 
            { 
        };
    }

    render() {
        return (
            <tbody>
                {publications.map( (pub) => (
                    <tr>
                        <td>
                            <a href={pub.link} target="_blank" rel="noreferrer">{pub.title}</a><br />
                            {pub.author}<br />
                            <em>{pub.detail}</em>
                        </td>
                    </tr>
                ))}    
            </tbody>
        );
    }
}

ReactDOM.render(
    <Publication />,
    document.getElementById("publications")
);