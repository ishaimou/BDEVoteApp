import React, { useEffect, useState } from "react";
import DetailsHeader from "../../containers/detailsHeader/DetailsHeader";
import NavBar from "../../components/navBar/navBar";
import GroupDetailedDescription from "../../components/groupDetailedDescription/GroupDetailedDescription";
import Footer from "../../components/Footer/Footer";
import { withRouter } from "react-router-dom";
import { api } from "../../config";
import auth from "../../services/Auth";
import axios from "axios";
import Loading from '../../components/Loading/Loading'

const Details = (props) => {

	const [group, setGroup] = useState(null);

	useEffect(() => {
		const config = {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${auth.getToken()}`
			}
		};
		axios
			.get(`${api}bde/${props.match.params.id}/`, config)
			.then(res => {
				console.log(res.data);
				setGroup(res.data);
			})
			.catch(e => {
				console.log(e);
			})
			;
	}, [])

	if (group === null)
		return (<Loading />);
	return (
		<div>
			<NavBar />
			<DetailsHeader group={group} />
			<GroupDetailedDescription group={group} />
			<Footer />
		</div>
	);
};

export default withRouter(Details);
