import React, { Component } from 'react';
import Chart from 'react-apexcharts'

class Grafica extends Component {
    constructor(props) {
      super(props);

       this.state = {
          
        series: [{
          name: 'Cantidad',
          data: [this.props.cant]
        }],
        options: {
          chart: {
            height: 350,
            type: 'bar',
          },
          colors:['#1a1e20'],
          plotOptions: {
            bar: {
              columnWidth: '50%',
              endingShape: 'flat'  
            }
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            width: 2
          },
          
          grid: {
            row: {
              colors: ['#82a1b1', '#6b8491']
            }
          },
          xaxis: {
            labels: {
              rotate: -45
            },
            categories: [this.props.total],
            tickPlacement: 'on'
          },
          yaxis: {
            title: {
              text: 'Cantidad',
            },
          },
          fill: {
            type: 'gradient',
            gradient: {
              shade: 'light',
              type: "horizontal",
              shadeIntensity: 0.25,
              gradientToColors: undefined,
              inverseColors: true,
              opacityFrom: 0.85,
              opacityTo: 0.85,
              stops: [50, 0, 100]
            },
          }
        }
    }; 
  }

    render() {
      return (
            <div id="chart">
                <Chart options={this.state.options} series={this.state.series} type="bar"  />
            </div>
        );
    }   
}

export default Grafica;