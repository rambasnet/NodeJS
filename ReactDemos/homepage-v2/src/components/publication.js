import React from 'react';
import ReactDOM from 'react-dom';
import publications from './data/publications.json'

/*
Goal is to generate HTML Component

<tr>
    <td>
        <a href="research/ClusteringSimilarityAndItsApplications.pdf" target="_blank">A Similarity Measure for Clustering and its Applications</a><br />
        <a href="research/ClusteringSimilarityAndItsApplications.pdf" target="_blank">PDF</a><br />
        Guadalupe J. Torres, Ram B. Basnet, Andrew H. Sung, and Srinivas Mukkamala,<br />
        <i>Proceedings of World Academy of Science, Engineering and Technology</i>, Vol. 31, ISSN 
        1307-6884, pp.490-496, Vienna, Austria, July 2008. 
    </td>
</tr>
*/

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