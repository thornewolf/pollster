import React, { useState, useEffect } from 'react'
import Paper from '@material-ui/core/Paper' 
import { HorizontalBar } from 'react-chartjs-2'

const PollResultsChart = props => {
    const data = {
        labels: props.pollData.answers.map(answer => answer.body),
        datasets: [
            {
                label: 'Count',
                data: props.pollData.answers.map(answer => answer.count),
                backgroundColor: 'rgba(51, 102, 204, 0.5)' 
            }
        ]
    }
    const options = {
        maintainAspectRatio: false,
        title: {
            display: true,
            text: props.pollData.question,
            fontSize: 25
        },
        legend: {
            display: false
        },
        scales: {
            xAxes: [{
                gridLines: {
                    display:false
                }
            }],
            yAxes: [{
                gridLines: {
                    display:false
                }, 
                ticks: {
                    fontSize: 20 
                }
            }]
        }
    }
    return(
        <Paper variant="outlined">
            <HorizontalBar 
                data={data} 
                options={options}
            />
        </Paper>
    )
}

export default PollResultsChart