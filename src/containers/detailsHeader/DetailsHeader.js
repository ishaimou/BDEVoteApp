import React, { useEffect, useState } from "react";
import classes from "./DetailsHeader.module.css";
import { Icon, Button, notification, Modal } from "antd";
import { withRouter } from "react-router-dom";
import axios from "axios";
import { api } from "../../config";
import auth from "../../services/Auth";
const { confirm } = Modal;

const DetailsHeader = ({group, history}) => {
	const [canvote, setvote] = useState(0);
	useEffect(() => {
		const config = {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${auth.getToken()}`
			}
		};
		axios.get(api + "setting/", config).then(res => {
			setvote(res.data[0].started);
		});
	}, []);
	function showConfirm() {
		confirm({
		  title: 'Are you sure?',
		  content: `Are you sure you want to vote to ${group.name}`,
		  onOk() {
			
			vote()
		  },
		  onCancel() {},
		});
	}
	const vote = () => {
		const config = {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${auth.getToken()}`
			}
		};
		let body = JSON.stringify({
			group_id: group.id,
			user_id: auth.getId()
		})
		axios.post(api + "vote/",body, config).then(res => {
			notification['success']({
				message: 'Notification Title',
				description:
				  'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
			  });
		}).catch((e) => {
			console.log(e.response)
			notification['error']({
				message:  e.response ? e.response.data.msg : 'something went wrong',
				description:
				  e.response ? e.response.data.msg : 'something went wrong',
			  });
			  if (e.response &&  e.response.data.msg)
			  setvote(true)
		})
	 };
	return (
		<>
			<div className={classes.container}>
				<button
					onClick={() => {
						history.push("/");
					}}
					className={classes.leftButton}
				>
					<Icon type="left" />
				</button>
				<h1 className={classes.goupName}>{group.name}</h1>
				<div className={classes.buttonsContainer}>
					<Button
						className={`${classes.rightButtons} ${classes.voteButton}`}
						disabled={!canvote}
						onClick={showConfirm}
					>
						Vote
          </Button>
					<Button
						className={`${classes.rightButtons} ${classes.downloadButton}`}
						onClick={() => {
							let win = window.open(group.program_pdf, "_blank");
							win.focus();
						}}
					>
						Download Program
          </Button>
				</div>
			</div>
		</>
	);
};

export default withRouter(DetailsHeader);
