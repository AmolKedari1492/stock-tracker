import React, { Component } from "react";
import "../scss/_common.scss";

import Highchart from "./Highchart";
import ChartOption from "./ChartOption";

import {
    processStockDayData,
    getHHMM,
} from "../utils";

import {
    DATA_DISPLAY_TYPES
} from "../constants/";

import {
    connect,
    onPing,
    onError,
    emitPing,
    emitSub,
    onData,
    onSub,
    emitUnSub
} from "../services/SocketService";

class LiveChart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            active: DATA_DISPLAY_TYPES.OPEN
        };

        this.configuration();
    }

    componentWillUnmount() {
        emitUnSub();
    }

    configuration = () => {
        connect();
        onData(this.handler);
        onError(this.handler)
        onSub(this.handler);
        setInterval(() => {
            emitSub();
            onData(this.handler);
        }, 10000)
    }

    handler = (data, cb) => {
        if(cb) {
            cb(1);
        }
        if(data && typeof data === "string") {
            this.processData([data])
        }
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
        let { active } = this.state;
        let data = this.state.data.map((item, id) => {
            return {
                id,
                x: new Date(item.ts * 1),
                y: item[active] * 1,
                name: new Date(item.ts * 1)

            }
        });
        return data;
    }

    onChartOptionChange = (active) => {
        this.setState({
            active
        });
    }

    getOptionConfig = () => {
        return {
            title: {
                text: 'Live data'
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
                        return getHHMM(this.value * 1);
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

    onChartdurationChange = (duration) => {
        this.setState({
            duration
        });
    }

    render() {
        if (this.state.data.length === 0) {
            return <div  className="loading-text">Loading...</div>;
        }

        const options = this.getOptionConfig();

        return (<div className="historic-data">
            <div className="chart-option">
                <ChartOption active={this.state.active} clickHandler={this.onChartOptionChange} />
            </div>
            <div>
                <Highchart options={options} />
            </div>
        </div>)
    }
}

export default LiveChart;
