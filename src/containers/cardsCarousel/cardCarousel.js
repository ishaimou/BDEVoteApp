import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import VoteCard from "../../components/voteCard/voteCard";
import classes from "./cardCarousel.module.css";
import axios from "axios";
import { api } from "../../config";
import auth from "../../services/Auth";
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from "react-alice-carousel";
import Loading from '../../components/Loading/Loading'
class CardCarousel extends Component {
  state = {
    groups: null,
    canVote: false
  };
  getGroups = () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.getToken()}`
      }
    };
    axios
      .get(api + "bde/", config)
      .then(e => {
        if (e.data) this.setState({ groups: e.data });
      })
      .catch(e => console.log(e.response));
  };
  componentDidMount() {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.getToken()}`
      }
    };
    axios
      .get(api + "setting/", config)
      .then(res => {
        this.setState({ canVote: res.data[0].started });
        console.log();
      })
      .then(() => this.getGroups());
  }
  items = () => {
    return this.state.groups.map(item => (
      <VoteCard item={item} canVote={this.state.canVote} />
    ));
  };
  responsive = {
    0: {
      items: 1
    },
    576: {
      items: 2
    },
    1024: {
      items: 4
    },
    1400: {
      items: 4
    }
  };

	render() {
		if (this.state.groups === null) return <Loading />;
		return (
			<div className={classes.main}>
				<AliceCarousel
					duration={1000}
					items={this.items()}
					responsive={this.responsive}
					autoPlayInterval={5000}
					autoPlayDirection="rtl"
					autoPlay={true}
					fadeOutAnimation={true}
					mouseTrackingEnabled={true}
					disableAutoPlayOnAction={true}
					buttonsDisabled={true}
					showSlideIndex={false}
				></AliceCarousel>
			</div>
		);
	}
}

export default CardCarousel;
