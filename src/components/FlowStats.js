import React, { Component } from 'react';
import {Bar} from 'react-chartjs-2';

export default class FlowStats extends Component {
  render() {
    var chartData = {
        labels: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],
        datasets: [{
            label: "Sessions",
            data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            type: 'bar',
            pointRadius: 0,
            fill: true,
            lineTension: 0,
            borderWidth: 0,
            backgroundColor: '#444'
        }]
    };
    var chartOptions = {
        maintainAspectRatio: false,
        height: 50,
        legend: {
            display: false,
            position: 'bottom'
        },
        animation: {
            duration: 0
        },
        scales: {
            xAxes: [{
                gridLines: {
                    display: false
                },
                ticks: {
                    autoSkip: false,
                    fontSize: 9
                }
            }],
            yAxes: [{
                gridLines: {
                    display: false
                },
                ticks: {
                    beginAtZero: true,
                    display: false
                },
                scaleLabel: {
                    display: false,
                    labelString: '# Sessions'
                }
            }]
        }
    };

    if(this.props.stats && this.props.stats[this.props.todayString] && this.props.stats[this.props.todayString].keys) {
        for(var i = 0; i < 24; i++) {
            if(this.props.stats[this.props.todayString][i]) {
                chartData.datasets[0].data[i] = this.props.stats[this.props.todayString][i].sessions;
            }
        }    
    }

    return (
      <div className="stats">
        <div className="sessionChart">
            <Bar data={chartData} options={chartOptions} height={'100px'}/>
        </div>
      </div>
    )
  }
}