import React, {Component} from 'react';
import axios from 'axios';
import './ResultComponent.css';
import { Link } from 'lego-on-react';
import {Doughnut} from 'react-chartjs-2';
//import Icon from '../Icon/Icon';
import { cn } from '@bem-react/classname';
axios.defaults.withCredentials = true;

const cnPollList = cn('PollList');
const statuses = {
    'all':  'Все',
    'active': 'активен',
    'wait': 'ожидает',
    'closed': 'завершён'
};

class ResultComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            result: [],
            resultById: [],
            detailedAnalytic: [],
            data: {}
        };
    }

    getResults() {
        axios.post('https://kauzlein.ru:3443/api/base-analytic',
            {
                status: ['wait', 'active', 'close']
            },  {
            }).then(res => {
            if (res.status === 200) {
                // eslint-disable-next-line no-console
                console.log(res);
                this.setState({ result: res.data});
            }
        });
    }

    getDetailedAnalytic() {
        axios.post('https://kauzlein.ru:3443/api/detailed-analytic/'+this.props.match.params.id,
            {
            },  {
            }).then(res => {
            if (res.status === 200) {
                // eslint-disable-next-line no-console
                console.log(res);
                this.setState({ detailedAnalytic: res.data});
            }
        });
    }

    getResultById() {
        axios.post('https://kauzlein.ru:3443/api/base-analytic',
            {
                pollId: this.props.match.params.id
            },  {
            }).then(res => {
            if (res.status === 200) {
                // eslint-disable-next-line no-console
                this.setState({ resultById: res.data[0]});
                this.setState({ data: {
                    labels: [
                        'Первый вариант',
                        'Второй вариант'
                    ],
                    datasets: [{
                        data: [res.data[0].firstOptionCount, res.data[0].secondOptionCount],
                        backgroundColor: [
                            '#FF6384',
                            '#FFCE56'
                        ],
                        hoverBackgroundColor: [
                            '#FF6384',
                            '#FFCE56'
                        ]
                    }]
                }
                });
            }
        });
    }


    componentDidMount() {
        this.getResultById();
        this.getResults();
    }

    render() {
        return (
            <React.Fragment>
                <div className={cnPollList()}>
                    <div className={cnPollList('Head')}>
                        <h2>Аналитика на текущий опрос {'"' +this.state.resultById.name+ '"'}</h2>
                    </div>
                    {
                        this.state.resultById ?
                            <div className={cnPollList('Сard')}>
                                <div className={cnPollList('Chart')}>
                                    <Doughnut data={this.state.data} />
                                </div>
                                <div className={cnPollList('Details')}>
                                    <p>Статус: {statuses[this.state.resultById.status]}</p>
                                    <p>Всего проголосовало: {Number(this.state.resultById.firstOptionCount)+Number(this.state.resultById.secondOptionCount)}</p>
                                </div>
                            </div>
                            :
                            <div className={cnPollList('Сard')}>
                                <div className={cnPollList('Сard-Message')}>
                                    <h3 className={cnPollList('Сard-Title')}>Пока нет результатов</h3>
                                    <Link theme="normal" url="/constructor" text="Создайте новый опрос" /> или измените существующий.
                                </div>
                                <div className={cnPollList('Сard-Image')}></div>
                            </div>
                    }
                    <h3>Аналитика по всем созданным опросам</h3>
                    {
                        this.state.result.length ?
                            <div className={cnPollList('List')}>
                                <div className={cnPollList('List-Header') + ' ' + cnPollList('List-Row')}>
                                    <div className={cnPollList('List-RowCol')}>
                                                Имя опроса
                                    </div>
                                    <div className={cnPollList('List-RowCol')}>
                                                Статус
                                    </div>
                                    <div className={cnPollList('List-RowCol')}>
                                                За первый вариант
                                    </div>
                                    <div className={cnPollList('List-RowCol')}>
                                                За второй вариант
                                    </div>
                                </div>
                                <div className={cnPollList('List-Data')}>
                                    {
                                        this.state.result.map((item, index) =>
                                            <div className={cnPollList('List-Row')} key={index}>
                                                <div className={cnPollList('List-RowCol', { type: 'name' })}>
                                                    <Link theme="normal" text={ item.name } url={'/result/'+ item.pollId }/>
                                                </div>
                                                <div className={cnPollList('List-RowCol', { type: 'status' })}>
                                                    { statuses[item.status] }
                                                </div>
                                                <div className={cnPollList('List-RowCol', { type: 'date' })}>
                                                    { item.firstOptionCount }
                                                </div>
                                                <div className={cnPollList('List-RowCol', { type: 'controls' })}>
                                                    { item.secondOptionCount }
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
            </React.Fragment>
        );
    }
}

export default ResultComponent;
