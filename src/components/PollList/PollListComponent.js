import React, {Component} from 'react';
import axios from 'axios';
import './PollList.css';
import { cn } from '@bem-react/classname';

const cnPollList = cn('PollList');

class PollListComponent extends Component {


	constructor(props) {
		super(props);
	}

	componentDidMount() {
		axios.get('http://localhost:3001/api/poll', {
		}).then(res => {
			if (res.status === 200) {
				// eslint-disable-next-line no-console
				console.log(res);
			}
		});
	}

	render() {
		return (
			<div className={cnPollList()}>List</div>
		);
	}
}

export default PollListComponent;
