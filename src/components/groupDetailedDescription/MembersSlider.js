import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./MembersSlider.css";
import { Icon, Popover } from "antd";

const MembersSlider = ({ group }) => {
	let Carousel = null;
	const get = () => {
		return group.members.map(item => (
			<Popover onClick={() => {
				let win = window.open(item.intra_profil, "_blank");
				win.focus();
			}}
				content={<div style={{textAlign:"center"}}><p>{item.username}</p> <p> {item.role}</p></div>}
				title={null}
			>
				<img
					width="62px"
					height="62px"
					style={{ borderRadius: "50%" }}
					src={item.picture_link}
					className="yours-custom-class"
				/>
			</Popover>
		));
	};
	const res = {
		0: {
			items: 3
		},
		1024: {
			items: 6
		}
	};
	return (
		<div id="members">
			<div id="left" onClick={() => Carousel.slidePrev()}>
				<Icon type="left" id="left-icon" />
			</div>
			<div id="members-carousel">
				<AliceCarousel
					buttonsDisabled={true}
					mouseTrackingEnabled
					dotsDisabled={true}
					responsive={res}
					items={get()}
					ref={el => (Carousel = el)}
				/>
			</div>
			<div id="right" onClick={() => Carousel.slideNext()}>
				<Icon type="right" id="right-icon" />
			</div>
		</div>
	);
};

export default MembersSlider;
