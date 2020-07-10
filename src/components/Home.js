import React, { Component } from "react";
import io from 'socket.io-client';

import APIService from "../services/API";
import {
    connect, onPing, onError,  emitPing, emitSub, onData, onSub, emitUnSub
} from "../services/SocketService";

import {
    BASE_API,
    WS_URL
} from "../constants/";

class Home extends Component {
    constructor(props) {
        super(props);
        connect();
        onData(handler);
        onError(handler)
        onSub(handler);
        // onPing(handler);
        setInterval(() => {
            emitSub();
            onData(handler);
            // emitPing();
        }, 1000)
    }

    componentDidMount() {
        // emitUnSub();
        this.fetchHistoricalData();
    }

    handler = () => {}

    fetchHistoricalData = () => {
        APIService.getHistoricalData((resp) => {
            console.log(resp)
        }, (err) => {
            console.log(err)
        })
    }

    render() {
        return(<div className="home">
            Home page
        </div>)
    }
}

export default Home;
