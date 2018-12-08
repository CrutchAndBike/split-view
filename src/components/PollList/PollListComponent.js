import React, {Component} from 'react';
import axios from 'axios';
import './PollList.css';
import { Link } from 'lego-on-react';
import { cn } from '@bem-react/classname';

const cnPollList = cn('PollList');

class PollListComponent extends Component {


	constructor(props) {
		super(props);

		this.state = {
			activeFilter: 'active'
		}
	}

	componentDidMount() {
		axios.get('http://localhost:3001/api/poll', {filter: this.state.activeFilter, limit: 10, offset: 0},  {
		}).then(res => {
			if (res.status === 200) {
				// eslint-disable-next-line no-console
				console.log(res);
				
			}
		});
	}

	changeFilter(filter) {
		if(filter) {
			//this.setState({ activeFilter: filter })
		}
	}

	render() {
		return (
			<div className={cnPollList()}>
				<div className={cnPollList('Submenu')}>
					<div className={cnPollList('Filter')}>
						<Link theme="normal" cls={cnPollList('Link')} text="Активные" onClick={ this.changeFilter('active') } />
						<Link theme="normal" cls={cnPollList('Link')} text="Неактивные" onClick={ this.changeFilter('closed') } />
						<Link theme="normal" cls={cnPollList('Link')} text="Все" onClick={ this.changeFilter('all') } />
					</div>
				</div>
				<div className={cnPollList('List')}>
					<div className={cnPollList('List-Header') + ' ' + cnPollList('List-Row')}>
						<div className={cnPollList('List-RowCol')}>
							Название
						</div>
						<div className={cnPollList('List-RowCol')}>
							Статус
						</div>
						<div className={cnPollList('List-RowCol')}>
							Изменения
						</div>
					</div>
					<div className={cnPollList('List-Data')}>

					</div>
				</div>
			</div>
		);
	}
}

export default PollListComponent;
