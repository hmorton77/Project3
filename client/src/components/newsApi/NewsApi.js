import React, { Component } from "react";

class NewsApi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //we'll be generating a list of articles
      articles: [],
      //dynamic url for our 2 api calls
      url: "https://" + props.domain + "/api/v1/category?section=general&items=5&token=" + props.token,
    };
  }

  componentDidMount() {
    //query the API
    fetch(this.state.url)
      .then((res) => res.json())
      .then((data) => {
        //Response is of the form {data: [...]}
        this.setState({
          articles: data.data,
        });
      });
  }

  render() {
    const rows = [];
    for (const row of this.state.articles) {
      rows.push(
        <tr key={this.state.articles.indexOf(row)}>
          <td>
            <a href={row.news_url} target="_blank">
              {row.title}
            </a>
          </td>
        </tr>
      );
    }
    return (
      <table>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

export default NewsApi;
