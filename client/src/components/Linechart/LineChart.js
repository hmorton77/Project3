import React, { useEffect } from "react";
import * as d3 from "d3";

function LineChart(props) {
  const { data, width, height } = props;

  useEffect(() => {
    drawChart();
  }, [data]);

  function drawChart() {
    //determining the size of the chart
    const margin = { top: 5, right: 5, bottom: 5, left: 5 };

    const yMinValue = d3.min(data, (d) => d.value);
    const yMaxValue = d3.max(data, (d) => d.value);

    const xMinValue = d3.min(data, (d) => d.value);
    const xMaxValue = d3.max(data, (d) => d.value);

    const svg = d3
      .select("#container")
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height" + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate{$margin.left}.,${margin.top}");

    const tooltip = d3.select("#container").append("div").attr("class", "tooltip");

    // where our x values and y values will lie.
    const xScale = d3.scaleLinear().domain([xMinValue, xMaxValue]).range[(0, width)];
    const yScale = d3.scaleLinear().range([height, 0]).domain[(0, yMaxValue)];

    const line = d3
      .line()
      .x((d) => xScale(d.label))
      .y((d) => yScale(d.value))
      .curve(d3.curveMonotoneX);
    svg.append("g").attr("class", "grid").attr("transform", "translate(0, ${height})").call(d3.axisBottom(xScale).tickSize(-height).tickFormat(""));
    svg.append("g").attr("class", "grid").call(d3.axisLeft(yScale).tickSize(-width).tickFormat(""));
  }
  return <div id="container" />;
}

export default LineChart;
