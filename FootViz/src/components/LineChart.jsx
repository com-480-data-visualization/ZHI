import * as React from 'react'
import ReactApexChart from 'react-apexcharts'

class LineChart extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [{
            name: "Rating",
            data: props.data || [],
        }],
        options: {
          chart: {
            height: 350,
            type: 'line',
            zoom: {
              enabled: false
            },
            toolbar: {
              show: true,
              tools:{
                download:false 
              }
            }
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'straight'
          },
          title: {
            text: 'Rating evolution',
            align: 'left'
          },
          grid: {
            row: {
              colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
              opacity: 0.5
            },
          },
          xaxis: {
            categories: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'],
          }
        },
      
      
      };
    }

    componentDidUpdate(prevProps) {
      if (prevProps.data !== this.props.data) {
        this.setState({
          series: [{
            name: "Rating",
            data: this.props.data
          }]
        })
      }
    }
    
    render() {
      return (
        <div>
          <div id="chart">
             <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={350} />
          </div>
          <div id="html-dist"></div>
        </div>
      );
    }
  }

  export default LineChart;