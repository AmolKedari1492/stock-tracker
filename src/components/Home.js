import React, { Component } from "react";

import "./Home.scss";

import HistoricChart from "./HistoricChart";
import LiveChart from "./LiveChart";

const VIEW = {
    HISTORIC: 1,
    LIVE: 2
};

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: VIEW.HISTORIC
        };
    }

    toggleView = (active) => {
        this.setState({
            active
        });
    }

    render() {
        let { active } = this.state;

        return (<div className="home">
            <ul className="nav">
                <li className={`nav-item ${active === VIEW.HISTORIC ? 'active' : ''}`} onClick={() => this.toggleView(VIEW.HISTORIC)}>
                    <a className="nav-link" href="/">Historic Chart</a>
                </li>
                <li className={`nav-item ${active === VIEW.LIVE ? 'active' : ''}`} onClick={() => this.toggleView(VIEW.LIVE)}>
                    <a className="nav-link" href="/">Live Chart</a>
                </li>
            </ul>
            {
                active === VIEW.HISTORIC
                    ?
                    <HistoricChart />
                    :
                    null
            }
            {
                active === VIEW.LIVE
                    ?
                    <LiveChart />
                    :
                    null
            }
        </div>)
    }
}

export default Home;
