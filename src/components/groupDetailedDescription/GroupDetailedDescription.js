import React from "react";
import classes from "./GroupDetailedDescription.module.css";
import DescriptionImg from "./DescriptionImg";
import MembersSlider from "./MembersSlider";

const GroupDetailedDescription = ({ group }) => {
	return (
		<div className={classes.root}>
			<div className={classes.mainDiv}>
				<div style={{backgroundImage: `url("${group.logo}")`}} className={classes.logo}>
				</div>
				<p className={classes.discriptionText} >
					{group.description}
				</p>
				<div className={classes.divider}></div>
				<div className={classes.mainCondidats}>
					<MainMembers group={group} />
				</div>
			</div>
			<div className={classes.memberaContainer}>
				<MembersSlider group={group} />
			</div>
		</div>
	)
}

const MainMembers = ({ group }) => {
	let res = [];

	group.members
		.forEach(m => { if (m.role.toLowerCase() === "visepresident") res.push(<DescriptionImg  key={1} member={m} width={76} height={76} text="Vise president" />) });
	group.members.forEach(m => { if (m.role.toLowerCase() === "president") res.push(<DescriptionImg key={2} member={m}  width={90} height={90} text="President" />) });
	group.members.forEach(m => { if (m.role.toLowerCase() === "treasury") res.push(<DescriptionImg key={3} member={m} width={76} height={76} text="Treasury" />) });

	return (res);
}


export default GroupDetailedDescription;
