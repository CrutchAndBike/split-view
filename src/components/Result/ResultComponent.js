import React, {Component} from 'react';
import axios from 'axios';
import './ResultComponent.css';
import { Link } from 'lego-on-react';
import {Doughnut} from 'react-chartjs-2';
//import Icon from '../Icon/Icon';
import { cn } from '@bem-react/classname';
axios.defaults.withCredentials = true;

const cnPollList = cn('PollList');

class PollListComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            result: [],
            data: {}
        };
    }

    getResult() {
        axios.post('https://kauzlein.ru:3443/api/base-analytic',
            {
                poll: this.props.match.params.id,
                status: ['wait', 'active', 'close']
            },  {
            }).then(res => {
            if (res.status === 200) {
                // eslint-disable-next-line no-console
                console.log(res);
                this.setState({ result: res.data});
                this.setState({ data: {
                    labels: [
                        'Red',
                        'Yellow'
                    ],
                    datasets: [{
                        data: [10, 15],
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
        console.log(this.props);
        this.getResult();
    }

    render() {
        return (
            <div className={cnPollList()}>
                {
                    this.state.result.length ?
                        <div className={cnPollList('Сard')}>
                            <Doughnut data={this.state.data} />
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
            </div>
        );
    }
}

export default PollListComponent;
