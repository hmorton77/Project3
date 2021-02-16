import React, { Component } from "react";
import API, { iex } from "../../utils/API.js";
import { iexKey } from "../../keys";

class StockRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }

  componentDidMount() {

    

    //query the API
    const url = `${iex.base_url}/stock/${this.props.ticker}/intraday-prices?chartLast=1&token=${iexKey}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        this.setState({
          data: data[data.length - 1],
        });
      });
  }

  render() {
    return (
      <tr>
        <td>{this.props.ticker}</td>
        <td>{this.state.data.open}</td>
        <td>{this.state.data.high}</td>
        <td>{this.state.data.low}</td>
        <td>{this.state.data.close}</td>
        <td>{this.state.data.date}</td>
      </tr>
    );
  }
}

export default StockRow;
