import React, { Component } from "react";
import _ from "lodash";

import Highchart from "./Highchart";
import ChartOption from "./ChartOption";
import DateOption from "./DateOption";

import APIService from "../services/API";

import {
    DATA_DISPLAY_TYPES,
    DATA_DURATION
} from "../constants/";

import {
    processStockDayData,
    formatDate
} from "../utils";

class HistoricChart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            active: DATA_DISPLAY_TYPES.OPEN,
            duration: DATA_DURATION.FIVE_YEAR
        };
    }

    componentDidMount() {
        this.fetchHistoricalData();
    }

    fetchHistoricalData = () => {
        APIService.getHistoricalData((resp) => {
            this.processData(resp)
        }, err => console.error(err))
    }

    processData = (resData) => {
        let length = resData.length;
        let { data } = this.state;
        data = data || [];

        for (let i = 0; i < length; i++) {
            let item = processStockDayData(resData[i]);
            data.push(item);
        }

        this.setState({
            data
        })
    }

    getData = () => {
        let { active, data, duration } = this.state;
        let formattedData = [];
        formattedData = data.map((item, id) => {
            let currYear = new Date().getFullYear();
            let itemYear = new Date(item.ts * 1).getFullYear()
            let obj = null;
            if ((currYear - itemYear) <= duration) {
                obj = {
                    id,
                    x: new Date(item.ts * 1),
                    y: item[active] * 1,
                    name: item.date,
                    value: item.date,
                    mmyy: item.mmyy
                }
            };
            return obj;
        });

        formattedData = formattedData.filter(item => item);

        if (duration === DATA_DURATION.ALL_YEAR) {
            formattedData = _.uniqBy(formattedData, (item) => item.mmyy);
        }

        return formattedData;
    }

    getOptionConfig = () => {
        return {
            title: {
                text: 'Historic data'
            },
            series: [
                {
                    type: 'line',
                    data: this.getData()
                }
            ],
            xAxis: [{
                title: {
                    text: 'Date'
                },
                labels: {
                    formatter: function () {
                        return formatDate(this.value * 1);
                    }
                }
            }],
            yAxis: [{
                title: {
                    text: 'Price'
                }
            }],
            marker: {
                enabled: true,
                radius: 3
            }
        };
    }

    onChartOptionChange = (active) => {
        this.setState({
            active
        });
    }

    onChartdurationChange = (duration) => {
        this.setState({
            duration
        });
    }

    render() {
        if (this.state.data.length === 0) {
            return <div>Loading</div>;
        }

        const options = this.getOptionConfig();

        return (<div className="historic-data">
            <div className="chart-option">
                <ChartOption active={this.state.active} clickHandler={this.onChartOptionChange} />
                <DateOption duration={this.state.duration} clickHandler={this.onChartdurationChange} />
            </div>
            <div>
                {

                    options.series[0].data.length > 0
                        ?
                        <Highchart options={options} />
                        :
                        <div className="no-data">No data found.</div>
                }
            </div>
        </div>)
    }
}

export default HistoricChart;
