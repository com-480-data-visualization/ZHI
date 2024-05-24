import * as React from 'react'
import ReactApexChart from 'react-apexcharts'

class RadarChart extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [{
          name: 'Level',
          data: props.data || [],
        }],
        options: {
          chart: {
            height: 350,
            type: 'radar',
            toolbar: {
                show: true,
                tools:{
                  download:false 
                }
              }
          },
          title: {
            text: 'Skills'
          },
          yaxis: {
            stepSize: 20
          },
          xaxis: {
            categories: ['Shooting', 'Passing', 'Dribling', 'Defending', 'Physique', 'Pace']
          }
        },
      
      
      };
    }

    componentDidUpdate(prevProps) {
      if (prevProps.data !== this.props.data) {
        this.setState({
          series: [{
            name: 'Level',
            data: this.props.data
          }]
        })
      }
    }

  

    render() {
      return (
        <div>
          <div id="chart">
            <ReactApexChart options={this.state.options} series={this.state.series} type="radar" height={350} />
          </div>
          <div id="html-dist"></div>
        </div>
      );
    }
  }

  export default RadarChart;
