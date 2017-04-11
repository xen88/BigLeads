import React from 'react';
import ECharts from 'react-echarts';

import option from '../components/echarts/option.js';

class Stats extends React.Component {
  constructor(props) {
    super()
    this.state = {

    }
  }
  render() {
    return (
      <div className="chart">
        <ECharts
          option={ option }
          notMerge
          style={{ height: '500px' }}
        />
      </div>
    )
  }
}

Stats.propTypes = {

}
export default Stats;
