import React, { Component } from "react";
import classes from "./countDown.module.css";
import CountBox from "../../components/countBox/countBox";
import moment from "moment";
import axios from "axios";
import { api } from "../../config";
import auth from "../../services/Auth";
import Timer from "react-compound-timer";
import Loading from '../../components/Loading/Loading'
class CountDown extends Component {
  state = {
    started: true,
    seconds: 0,
    isloading: false
  };
  getDate = () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.getToken()}`
      }
    };
    axios.get(api + "setting/", config).then(res => {
      let end = res.data[0].started ? moment(res.data[0].end_date) : moment();
      this.setState({
        started: res.data[0].started,
        seconds: end.diff(moment(), "seconds") * 1000,
        isloading: false
      });
    });
  };
  componentDidMount() {
    this.getDate();
  }
  componentWillMount() {
    this.setState({ isloading: true });
  }
  render() {
    if (this.state.isloading) return <Loading />;
    return (
      <div className={classes.main}>
        {!this.state.started ? (
          <h1 className={classes.disabled}>Voting is Disabled</h1>
        ) : (
          <Timer initialTime={this.state.seconds} direction="backward">
            {() => (
              <React.Fragment>
                <CountBox number={<Timer.Days />} text={"Days"} />
                <div className={classes.divider} />
                <CountBox number={<Timer.Hours />} text={"Hours"} />
                <div className={classes.divider} />
                <CountBox number={<Timer.Minutes />} text={"Minutes"} />
                <div className={classes.divider} />
                <CountBox number={<Timer.Seconds />} text={"Seconds"} />
              </React.Fragment>
            )}
          </Timer>
        )}
      </div>
    );
  }
}

export default CountDown;
