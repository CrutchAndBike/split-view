import React, {Component} from 'react';
import axios from 'axios';
import './PollListComponent.css';
import { Link, Icon, Button } from 'lego-on-react';
import Links from '../Links/Links';
//import Icon from '../Icon/Icon';
import { cn } from '@bem-react/classname';

const cnPollList = cn('PollList');
const statuses = {
	'active': 'Активен',
	'wait': 'Ожидает',
	'closed': 'Завершён'
};

class PollListComponent extends Component {

	constructor(props) {
		super(props);

		this.state = {
			activeFilter: 'all',
			pollList: []
		};
	}

	deletePoll(id) {
		if(window.confirm('Вы уверены, что хотите удалить опрос?')) {
			alert('Опрос '+id+' успешно удалён');
		}
	}

	getPolls(status = '', limit = 10, offset = 0) {
		axios.get('http://localhost:3001/api/poll', 
			{
				params: {
					status: status,
					limit: limit,
					offset: offset
				}
			},  
			{
			})
			.then(res => {
				if (res.status === 200) {
					// eslint-disable-next-line no-console
					console.log(res);
					this.setState({ pollList: res.data});
				}
			});
	}

	changeFilter(filter) {
		if(filter) {
			this.setState({ activeFilter: filter });
			this.getPolls(filter);
		}
	}

	componentDidMount() {
		this.getPolls();
	}

	render() {
		return (
			<div className={cnPollList()}>
				<div className={cnPollList('Submenu')}>
					<Links className={cnPollList('Filter')}>
						<Link disabled={this.state.activeFilter === 'all'} cls={cnPollList('Link')} text="Все" onClick={ () => this.changeFilter('all') } />
						<Link disabled={this.state.activeFilter === 'active'} cls={cnPollList('Link')} text="Активные" onClick={ () => this.changeFilter('active') } />
						<Link disabled={this.state.activeFilter === 'wait'} cls={cnPollList('Link')} text="Ожидающие" onClick={ () => this.changeFilter('wait') } />
						<Link disabled={this.state.activeFilter === 'closed'} cls={cnPollList('Link')} text="Завершённые" onClick={ () => this.changeFilter('closed') } />
					</Links>
					<Button cls={cnPollList('AddButton')} theme="action" size="m" view="default" tone="default" type="link" text="Добавить опрос" url="/constructor" />
				</div>
				{
					this.state.pollList.length ?
						<div className={cnPollList('List')}>
							<div className={cnPollList('List-Header') + ' ' + cnPollList('List-Row')}>
								<div className={cnPollList('List-RowCol')}>
									Имя опроса
									<Icon size="xs" сls={cnPollList('List-RowCol')} glyph="carets-v"/>
								</div>
								<div className={cnPollList('List-RowCol')}>
									Статус
									<Icon size="xs" glyph="carets-v"/>
								</div>
								<div className={cnPollList('List-RowCol')}>
									Изменения
									<Icon size="xs" glyph="carets-v"/>
								</div>
								<div className={cnPollList('List-RowCol')}>
									Управление
								</div>
							</div>
							<div className={cnPollList('List-Data')}>
								{
									this.state.pollList.map((item, index) =>
										<div className={cnPollList('List-Row')} key={index}>
											<div className={cnPollList('List-RowCol', { type: 'name' })}>
												<Link theme="normal" text={ item.name } url={'/poll/'+ item._id }/>
											</div>
											<div className={cnPollList('List-RowCol', { type: 'status' })}>
												{ statuses[item.status] }
											</div>
											<div className={cnPollList('List-RowCol', { type: 'date' })}>
												{ item.date }
											</div>
											<div className={cnPollList('List-RowCol', { type: 'controls' })}>
												<Button theme="normal" size="s" pin="circle-brick" text="Изменить" type="link" url="/constructor"/>
												<Button theme="normal" size="s" pin="brick-circle" text="Удалить" onClick={ () => this.deletePoll(item._id) }/>
											</div>
										</div>
									)
								}
							</div>
						</div>
						:
						<div className={cnPollList('Сard')}>
							<div className={cnPollList('Сard-Message')}>
								<h3 className={cnPollList('Сard-Title')}>У вас пока нет таких опросов</h3>
								<Link theme="normal" url="/constructor" text="Создайте новый опрос" /> или измените существующий.
							</div>
							<div className={cnPollList('Сard-Image')}></div>
						</div>
				}
			</div>
		);
	}
}

export default PollListComponent;
