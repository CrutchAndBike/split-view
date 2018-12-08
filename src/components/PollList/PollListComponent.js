import React, {Component} from 'react';
import axios from 'axios';
import './PollListComponent.css';
import { Link, Icon, Button } from 'lego-on-react';
//import Icon from '../Icon/Icon';
import { cn } from '@bem-react/classname';

const cnPollList = cn('PollList');

class PollListComponent extends Component {


	constructor(props) {
		super(props);

		this.state = {
			activeFilter: 'active',
			pollList: []
		};
	}

	statuses = {
		'active': 'Активен',
		'wait': 'Ожидает',
		'closed': 'Завершён'
	}

	componentDidMount() {
		axios.get('http://localhost:3001/api/poll', {filter: this.state.activeFilter, limit: 10, offset: 0},  {
		}).then(res => {
			if (res.status === 200) {
				// eslint-disable-next-line no-console
				console.log(res);
				this.setState({ pollList: res.data});
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
							<Icon сls={cnPollList('List-RowCol', 'Control')} glyph="carets-v"/>
						</div>
						<div className={cnPollList('List-RowCol')}>
							Статус
							<Icon glyph="carets-v"/>
						</div>
						<div className={cnPollList('List-RowCol')}>
							Изменения
							<Icon glyph="carets-v"/>
						</div>
						<div className={cnPollList('List-RowCol')}>
							
						</div>
					</div>
					<div className={cnPollList('List-Data')}>
						{
							this.state.pollList.map((item, index) =>
								<div className={cnPollList('List-Row')} key={index}>
									<div className={cnPollList('List-RowCol', { type: 'name' })}>
										<Icon type="arrow" direction="right" style={{ 'width': "16px", 'height': "16px" }} attrs={{ 'style': { 'width': "16px", 'height': "16px" } }}/>
										<Link theme="normal" text={ item.name } url={'/poll/'+ item._id }/>
									</div>
									<div className={cnPollList('List-RowCol', { type: 'status' })}>
										{ this.statuses[item.status] }
									</div>
									<div className={cnPollList('List-RowCol', { type: 'date' })}>
										{ item.date }
									</div>
									<div className={cnPollList('List-RowCol', { type: 'controls' })}>
										<Button theme="normal" size="s" view="default" tone="default" text="Удалить"/>
									</div>
								</div>
							)
						}
					</div>
				</div>
			</div>
		);
	}
}

export default PollListComponent;
