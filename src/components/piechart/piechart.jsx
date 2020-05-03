import React, { Component } from "react";
import { PieChart } from "react-minimal-pie-chart";
import { withRouter } from "react-router-dom";

// code borrowed from:
// https://toomuchdesign.github.io/react-minimal-pie-chart/index.html?path=/story/donut-chart--custom-arcs-width

const present = "330"; //insert present value of backend here
const absent = "10"; //insert absences value of backend here
const leave = "25"; //insert leave value of backend here
class piechart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onClickAttendance(event) {
    this.props.history.push("/view_info");
  }
  render() {
    return (
      <React.Fragment>
        <div className="chartBackground">
          <PieChart
            animationDuration={500}
            animationEasing="ease-out"
            center={[50, 50]}
            data={[
              {
                color: "#039A4E",
                title: present,
                value: 330,
              },
              {
                color: "#0B3954",
                title: absent,
                value: 10,
              },
              {
                color: "#E63946",
                title: leave,
                value: 25,
              },
            ]}
            lengthAngle={360}
            lineWidth={45}
            paddingAngle={0}
            radius={50}
            startAngle={0}
            viewBoxSize={[100, 100]}
          />
        </div>
        ]{" "}
      </React.Fragment>
    );
  }
}
export default withRouter(piechart);

// import React, { Component } from "react";
// import Paper from "@material-ui/core/Paper";
// import {
//   Chart,
//   PieSeries,
//   Title,
// } from "@devexpress/dx-react-chart-material-ui";
// import { Animation } from "@devexpress/dx-react-chart";

// /* code borrowed fron:
// https://devexpress.github.io/devextreme-reactive/react/chart/demos/pie/doughnut/
// */

// var data = [
//   { stats: "Leave", val: 25 },
//   { stats: "Absent", val: 10 },
//   { stats: "Present", val: 330 },
// ];

// class piechart extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       data,
//     };
//   }

//   render() {
//     const { data: chartData } = this.state;

//     return (
//       <React.Fragment>
//         <div className="chartBackground">
//           <Chart data={chartData}>
//             <PieSeries
//               valueField="val"
//               argumentField="stats"
//               innerRadius={0.2}
//               outerRadius={0.5}
//             />
//             <Animation />
//           </Chart>
//         </div>
//       </React.Fragment>
//     );
//   }
// }
// export default piechart;
