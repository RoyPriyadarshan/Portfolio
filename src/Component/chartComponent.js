import React, { Component } from 'react';
import { HorizontalBar } from 'react-chartjs-2';


const data = {
    type: 'HorizontalBar',
    datasets: [{
        data: [92, 90, 90, 97, 85, 97, 85, 89, 70],
        backgroundColor: ['#111D5E', '#c70039', '#f37121', '#ffbd69', '#01a9b4', '#086972', '#393e46', '#562349', '#f96d80'],
        borderColor: ['#111D5E', '#c70039', '#f37121', '#ffbd69', '#01a9b4', '#086972', '#393e46', '#562349', '#f96d80'],
        borderWidth: 1,
        hoverBackgroundColor: ['#6a197d', '#900c3f', '#eebb4d', '#fbfd8a', '#a6dcef', '#709fb0', '#84a9ac', '#900c3f', '#ffcac2'],
        hoverBorderColor: ['#6a197d', '#900c3f', '#eebb4d', '#fbfd8a', '#a6dcef', '#709fb0', '#84a9ac', '#900c3f', '#ffcac2'],
        label: 'HorizontalBar-Value'
    }],
    labels: ['HTML', 'CSS', 'Bootstrap', 'Javascript', 'jQuery', 'React', 'C++', 'Python', 'C'],
};

const options = {
    responsive: true,
    animation: {
        duration: 15000,
        easing: 'easeInOutBounce'
    },
    legend: {
        display: false,
    },
    title: {
        display: false,
        text: 'My Skills',
        fontSize: '100',
        fontFamily: "Bevan",
        fontColor: 'black'
    },
    tooltips: {
        mode: 'index',
        intersect: false,
    },
    hover: {
        mode: 'nearest',
        intersect: true
    },
    scales: {
        xAxes: [{
            display: true,
            gridLines: {
                color: "rgba(0, 0, 0, 0)",
            },
            ticks: {
                min: 0,
                max: 140,
                fontColor: 'black',
                fontFamily: "Delius Swash Caps"
            },
            scaleLabel: {
                display: true,
                labelString: 'Rating',
                fontSize: '20',
                fontColor: 'black',
                fontFamily: "Aclonica"
            }
        }],
        yAxes: [{
            display: true,
            gridLines: {
                color: "rgba(0, 0, 0, 0)",
            },
            ticks: {
                fontColor: 'black',
                fontFamily: "Delius Swash Caps"
            },
            scaleLabel: {
                display: true,
                labelString: 'Skills',
                fontSize: '20',
                fontColor: 'black',
                fontFamily: "Aclonica"
            }
        }]
    }
}



class Chart extends Component {

    render() {
        return (
            <div className='charts container' >
                <div className='row'>
                    <h3>My Skills</h3>
                </div>

                <HorizontalBar
                    data={data}
                    options={options}
                />
            </div>
        );
    }
}

export default Chart;