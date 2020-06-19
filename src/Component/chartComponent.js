import React, { Component } from 'react';
import { HorizontalBar } from 'react-chartjs-2';


const data = {
    type: 'HorizontalBar',
    datasets: [{
        data: [92, 96, 90, 83, 85, 97 ],
        backgroundColor: ['#111D5E', '#c70039', '#f37121', '#ffbd69', '#01a9b4', '#086972'],
        borderColor: ['#111D5E', '#c70039', '#f37121', '#ffbd69', '#01a9b4', '#086972'],
        borderWidth: 1,
        hoverBackgroundColor: ['#6a197d', '#900c3f', '#eebb4d', '#fbfd8a', '#a6dcef', '#709fb0'],
        hoverBorderColor: ['#6a197d', '#900c3f', '#eebb4d', '#fbfd8a', '#a6dcef', '#709fb0'],
        label: 'HorizontalBar-Value'
    }],
    labels: ['HTML', 'CSS', 'Bootstrap', 'Javascript', 'jQuery', 'React'],
};

const options = {
    responsive: true,
    animation: {
        duration: 15000,
        easing: 'easeInOutBounce'
    },
    legend: {
        position: 'bottom',
        fontFamily: "Open Sans"
    },
    title: {
        display: true,
        text: 'Skills',
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
            ticks: {
                min: 0,
                max: 150,
                fontFamily: "Open Sans"
            },
            scaleLabel: {
                display: true,
                labelString: 'Rating',
                fontFamily: "Open Sans"
            }
        }],
        yAxes: [{
            display: true,
            scaleLabel: {
                display: true,
                labelString: 'Skills',
                fontFamily: "Open Sans"
            }
        }]
    }
}



class Chart extends Component {

    render() {
        return (
            <div className='charts container ' >
                <h3>Test div</h3>
                <h3>Test div</h3>
                <h3>Test div</h3>
                <h3>Test div</h3>
                <h3>Test div</h3>
                <h3>Test div</h3>
                <h3>Test div</h3>
                <h3>Test div</h3>
                <h3>Test div</h3>
                <h3>Test div</h3>
                <h3>Test div</h3>
                <h3>Test div</h3>
                <h3>Test div</h3>
                <h3>Test div</h3>
                <HorizontalBar 
                data= { data } 
                options= { options }
                />
            </div>
        );
    }
}

export default Chart;