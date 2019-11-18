import React from 'react'
import classes from "./DescriptionImg.module.css";

const DdescriptionImg = (props) => {
	return (
		<div className={classes.main}>
			<img onClick={() => { let win = window.open(props.member.intra_profil, "_blank");win.focus();}} width={props.width} height={props.height} src={props.member.picture_link} className={classes.rimg} />
			<span className={classes.text}>{props.text}</span>
		</div>
	)
}

export default DdescriptionImg;
