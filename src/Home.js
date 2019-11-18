import React, { Component } from "react";
import NavBar from "./components/navBar/navBar";
import CardCarousel from "./containers/cardsCarousel/cardCarousel";
import CountDown from "./containers/countDown/countDown";
export default class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <CountDown />
        <CardCarousel />
      </React.Fragment>
    );
  }
}
