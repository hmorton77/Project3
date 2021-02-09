import React, { useEffect, useState } from "react";
import LineChart from "../Linechart/LineChart";

function Chart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    regenData();
  }, []);

  function regenData() {
    const chartData = [];
    for (let i = 0; i < 20; i++) {
      const value = Math.floor(Math.random() * i + 3);
      chartData.push({
        label: i,
        value,
        tooltipContent: "<b>x: </b>${i}<br><b>y: </b>${value}",
      });
    }
    setData(chartData);
  }

  return (
    <div className="Chart">
      <button onClick={regenData}>Chart Page rendering!</button>
      <LineChart data={data} width={50} height={50} />
    </div>
  );
}
export default Chart;
