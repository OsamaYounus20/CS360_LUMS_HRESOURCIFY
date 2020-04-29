import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import {
  Chart,
  PieSeries,
  Title,
} from "@devexpress/dx-react-chart-material-ui";
import { Animation } from "@devexpress/dx-react-chart";

/* code borrowed fron:
https://devexpress.github.io/devextreme-reactive/react/chart/demos/pie/doughnut/
*/

var data = [
  { stats: "Leave", val: 25 },
  { stats: "Absent", val: 10 },
  { stats: "Present", val: 330 },
];

class piechart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data,
    };
  }

  render() {
    const { data: chartData } = this.state;

    return (
      <React.Fragment>
        <div className="chartBackground">
          <Paper
            style={{
              background: "#d3c1c3",
              maxWidth: "400px",
              maxHeight: "420px",
              minWidth: "400px",
              minHeight: "420px",
              borderRadius: "30px",
            }}
          >
            <Chart data={chartData}>
              <PieSeries
                valueField="val"
                argumentField="stats"
                innerRadius={0.2}
                outerRadius={0.5}
              />
              <Title text="Attendance" />
              <Animation />
            </Chart>
          </Paper>
        </div>
      </React.Fragment>
    );
  }
}
export default piechart;