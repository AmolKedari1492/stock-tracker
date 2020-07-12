import React from "react";
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import PropTypes from 'prop-types';


const Highchart = (props) => <div>
  <HighchartsReact
    highcharts={Highcharts}
    options={props.options}
  />
</div>;

export default Highchart;

Highchart.propTypes = {
  options: PropTypes.object
};

