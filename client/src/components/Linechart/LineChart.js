import Chart from "react-google-charts";
import react, { useEffect, useState } from "react";
import { iexKey } from "../../keys";

// function LineChart(props) {
//   const [stockPrices, setStockPrices] = useState([]);
//   const [counter, setCounter] = useState(0);

//   useEffect(() => {
//     let promises = [];
//     console.log("Entering use effect");
//     for (let ticker of props.tickers) {
//       console.log(ticker);
//       let url = "https://cloud.iexapis.com/stable/stock/" + ticker + "/chart/5d?token=" + iexKey;
//       console.log("sending request");
//       let promise = fetch(url);
//       promises.push(promise);
//     }

//     let megaPromise = Promise.all(promises);

//     megaPromise.then((res) => {
//       for (let response of res) {
//         response.json().then((resB) => {
//           let opens = resB.map((stock) => stock.open);
//           let stockInfo = { ticker: "hello", opens: opens };
//           setStockPrices(stockPrices.concat([stockInfo]));
//         });
//       }
//     });
//   }, []);
//   let descriptors = [{ type: "number", label: "x" }];
//   let dataPoints = [[1], [2], [3], [4], [5]];

//   if (stockPrices.length == 0) {
//     descriptors.push({ type: "number", label: "sadness" });
//     dataPoints = dataPoints.map((element, i) => element.concat(dataPoints[i]));
//   }
//   for (let stockInfo of stockPrices) {
//     descriptors.push({ type: "number", label: stockInfo.ticker });
//     /*zip dataPoints and stockInfo.opens */
//     dataPoints = dataPoints.map((element, i) => element.concat(stockInfo.opens[i]));
//   }
//   let data = [descriptors];
//   data = data.concat(dataPoints);
//   return (
//     <div>
//       <p>Chart:</p>
//       <Chart
//         width={"50rem"}
//         height={"15rem"}
//         chartType="Line"
//         loader={<div>Loading Chart</div>}
//         data={data}
//         options={{
//           intervals: { style: "sticks" },
//           legend: "none",
//         }}
//       />
//     </div>
//   );
// }
function LineChart() {
  return (
    <Chart
      width={"600px"}
      height={"400px"}
      chartType="LineChart"
      loader={<div>Loading Chart</div>}
      data={[
        ["x", "dogs", "cats"],
        [0, 0, 0],
        [1, 10, 5],
        [2, 23, 15],
        [3, 17, 9],
        [4, 18, 10],
        [5, 9, 5],
        [6, 11, 3],
        [7, 27, 19],
      ]}
      options={{
        hAxis: {
          title: "Time",
        },
        vAxis: {
          title: "Popularity",
        },
        series: {
          1: { curveType: "function" },
        },
      }}
      rootProps={{ "data-testid": "2" }}
    />
  );
}
export default LineChart;
