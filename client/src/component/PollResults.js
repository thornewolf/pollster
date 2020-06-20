import React, { useState, useEffect } from 'react'
import Card from '@material-ui/core/Card'
import Chart from 'react-apexcharts'

const PollResults = props => {
    const [options, setOptions] = useState({
        chart: {
          id: "basic-bar"
        },
    })
    const [xaxis, setXaxis] = useState({
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
    })
    const [series, setSeries] = useState([{
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        }])

    return(
        <Chart
            options={options}
            series={series}
            xaxis= {xaxis}
            type="bar"
            width="500"
        />
    )
}

export default PollResults;