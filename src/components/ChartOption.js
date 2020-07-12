import React from "react";
import PropTypes from 'prop-types';

import "./ChartOption.scss";

import {
    DATA_DISPLAY_TYPES
} from "../constants/";

const ChartOption = (props) => {
    return (<div className="btn-group ">
        <button type="button" onClick={() => props.clickHandler(DATA_DISPLAY_TYPES.OPEN)}
            className={`btn btn-secondary first ${props.active === DATA_DISPLAY_TYPES.OPEN ? 'active' : ''} `}>Open</button>
        <button type="button" onClick={() => props.clickHandler(DATA_DISPLAY_TYPES.HIGH)}
            className={`btn btn-secondary ${props.active === DATA_DISPLAY_TYPES.HIGH ? 'active' : ''} `}>High</button>
        <button type="button" onClick={() => props.clickHandler(DATA_DISPLAY_TYPES.LOW)}
            className={`btn btn-secondary ${props.active === DATA_DISPLAY_TYPES.LOW ? 'active' : ''} `}>Low</button>
        <button type="button" onClick={() => props.clickHandler(DATA_DISPLAY_TYPES.CLOSE)}
            className={`btn btn-secondary last ${props.active === DATA_DISPLAY_TYPES.CLOSE ? 'active' : ''} `} >Close</button>
    </div>)
};

export default ChartOption;

ChartOption.propTypes = {
    active: PropTypes.string,
    clickHandler: PropTypes.func
};
