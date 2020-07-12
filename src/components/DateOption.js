import React from "react";
import PropTypes from 'prop-types';

import "./ChartOption.scss";

import {
    DATA_DURATION
} from "../constants/";

const DateOption = (props) => {
    return (<div className="btn-group date-group">
        <button type="button" onClick={ () => props.clickHandler(DATA_DURATION.ONE_YEAR) } 
            className={`btn btn-secondary first ${props.duration === DATA_DURATION.ONE_YEAR ? 'active' : ''} `}>1Y</button>
        <button type="button" onClick={ () => props.clickHandler(DATA_DURATION.TWO_YEAR) }  
            className={`btn btn-secondary ${props.duration === DATA_DURATION.TWO_YEAR ? 'active' : ''} `}>2Y</button>
        <button type="button" onClick={ () => props.clickHandler(DATA_DURATION.FIVE_YEAR) }  
            className={`btn btn-secondary ${props.duration === DATA_DURATION.FIVE_YEAR ? 'active' : ''} `}>5Y</button>
        <button type="button" onClick={ () => props.clickHandler(DATA_DURATION.ALL_YEAR) }  
            className={`btn btn-secondary last ${props.duration === DATA_DURATION.ALL_YEAR ? 'active' : ''} `}>ALL</button>
    </div>)
};

export default DateOption;

DateOption.propTypes = {
    active: PropTypes.string,
    clickHandler: PropTypes.func
};
