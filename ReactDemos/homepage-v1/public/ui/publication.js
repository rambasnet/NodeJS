'use strict';

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
      pub:
        [
          {
            link: "https://www.online-journals.org/index.php/i-jai/article/view/16759",
            title: "Fearing the Robot Apocalypse: Correlates of AI Anxiety",
            author: "D. J. Lemay, R. B. Basnet, and T. Doleck",
            detail: "iJAI - International Journal of Learning Analytics and Artificial Intelligence for Education, Vol. 2, No. 2, pp. 24-33, Aug. 2020"
          },
          {
            link: "https://rambasnet.github.io/pdfs/ClusteringSimilarityAndItsApplications.pdf",
            title: "A Similarity Measure for Clustering and its Applications",
            author: "Guadalupe J. Torres, Ram B. Basnet, Andrew H. Sung, and Srinivas Mukkamala",
            detail: "Proceedings of World Academy of Science, Engineering and Technology, Vol. 31, ISSN \
                1307-6884, pp.490-496, Vienna, Austria, July 2008."
          }
        ]
    };
  }

  render() {
    return (
      <tbody>
        {this.state.pub.map((pub) => (
          <tr>
            <td>
              <a href={pub.link} target="_blank">{pub.title}</a><br />
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