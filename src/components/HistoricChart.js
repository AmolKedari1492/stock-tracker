import React, { Component } from "react";

import Highchart from "./Highchart";
import ChartOption from "./ChartOption";

import APIService from "../services/API";

import {
    DATA_DISPLAY_TYPES
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
            active: DATA_DISPLAY_TYPES.OPEN
        };
    }

    componentDidMount() {
        this.fetchHistoricalData();
    }

    fetchHistoricalData = () => {
        APIService.getHistoricalData((resp) => {
            this.processData(resp.splice(0, 100))
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
        let {active} = this.state;
        let data = this.state.data.map((item, id) => {
            return {
                id,
                x: new Date(item.ts * 1),
                y: item[active] * 1,
                name: item.date

            }
        });
        return data;
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
                    formatter: function() {
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

    render() {
        if (this.state.data.length === 0) {
            return <div>Loading</div>;
        }

        const options = this.getOptionConfig();

        return (<div className="historic-data">
            <div className="chart-option">
                <ChartOption active={this.state.active } clickHandler={ this.onChartOptionChange } />
            </div>
            <div>
                <Highchart options={options} />
            </div>
        </div>)
    }
}

export default HistoricChart;
