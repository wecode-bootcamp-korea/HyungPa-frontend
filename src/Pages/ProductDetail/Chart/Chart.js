import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import "./Chart.scss";

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        maintainAspectRatio: false,
        layout: {
          padding: {
            left: 50,
            right: 50,
            top: 20,
            bottom: 10,
          },
        },
        tooltips: {
          mode: "point",
        },
        legend: {
          display: false,
        },
        scales: {
          xAxes: [
            {
              ticks: {
                fontColor: "#555555",
                fontWeight: 300,
                fontSize: 12,
              },
              gridLines: {
                display: false,
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                display: false,
              },
              gridLines: {
                display: false,
              },
            },
          ],
        },
      },
    };
  }
  data = (canvas) => {
    const ctx = canvas.getContext("2d");
    let gradientStroke = ctx.createLinearGradient(0, 0, 0, 340);
    gradientStroke.addColorStop(1, "#ff5527");
    gradientStroke.addColorStop(0, "#FF8E19");

    return {
      labels: ["", 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0, ""],
      datasets: [
        {
          label: "",
          fill: true,
          lineTension: 0,
          backgroundColor: gradientStroke,
          borderColor: "#ff5527",
          borderWidth: 1,
          borderJoinStyle: "miter",
          pointColor: "#ff5527",
          pointBorderColor: "#ffffff",
          pointBackgroundColor: "#ff5527",
          pointBorderWidth: 2,
          pointHoverRadius: 6,
          pointHoverBackgroundColor: "#ffffff",
          pointHoverBorderColor: "#ff5527",
          pointHoverBorderWidth: 2,
          pointRadius: 6,
          pointHitRadius: 1,
          data: [0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 4, 0],
        },
      ],
    };
  };
  render() {
    const { options } = this.state;
    return (
      <div className="Chart">
        <Line
          className="chartInfo"
          ref="chart"
          data={this.data}
          height={360}
          options={options}
        />
      </div>
    );
  }
}

export default Chart;
