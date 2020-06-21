import React from 'react';
import Plot from 'react-plotly.js';


class PollResults extends React.Component {
    render() {
        var data = [{
            values: [19, 26, 55],
            labels: ['one', '2', 'zalgo'],
            type: 'pie'
          }];
        return (
          <Plot
            data={data}
            layout={ {width: 800, height: 800, title: 'What is your favorite number'} }
          />
        );
      }
}

export default PollResults