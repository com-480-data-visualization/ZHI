import * as React from 'react'
import ReactApexChart from 'react-apexcharts'

class TimelineChart extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [
          {
            data : props.data.map(item => ({
              x: item.club_name,
              y: [
                new Date(item.start_date).getTime(),
                new Date(item.end_date).getTime()
              ]
            }))
          }
        ],
        options: {
          chart: {
            height: 350,
            type: 'rangeBar',
            zoom: {
                enabled: false
              },
            toolbar: {
                tools:{
                  download:false 
                }
              }
          },
          title: {
            text: 'Transfers'
          },
          plotOptions: {
            bar: {
              horizontal: true
            }
          },
          xaxis: {
            type: 'datetime'
          }
        },
      
      
      };
    }

  

    render() {
      return (
        <div>
          <div id="chart">
            <ReactApexChart options={this.state.options} series={this.state.series} type="rangeBar" height={350} />
          </div>
          <div id="html-dist"></div>
        </div>
      );
    }
  }

  export default TimelineChart;