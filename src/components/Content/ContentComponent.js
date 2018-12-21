import React, { Component } from 'react';
import './ContentComponent.css';
import SplitViewContainer from '../SplitView/SplitViewContainer';
import { cn } from '@bem-react/classname';
import axios from 'axios';

const cnContent = cn('content');

class ContentComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pollQuestion: '',
            poll: [],
            pollSetup: []
        };
    }

    componentDidMount() {
        axios.get('https://kauzlein.ru:3443/api/poll/'+this.props.match.params.id,
            {
                withCredentials: true
            },  {
            }).then(res => {
            if (res.status === 200) {
                this.setState({poll: []});
                this.setState({pollQuestion: res.data.name});
                this.setState({pollSetup: res.data.forms});
                this.setState(prevState => ( {poll: [...prevState.poll, res.data.variant.a] }));
                this.setState(prevState => ( {poll: [...prevState.poll, res.data.variant.b] }));
            }
        });
    }

    render() {
        return (
            <div className={cnContent()}>
                <SplitViewContainer
                    header={this.state.pollQuestion || 'Выберите вариант'}
                    answers={this.state.poll}
                    setup={this.state.pollSetup}
                    hasForm={this.state.pollSetup.length ? true : false }
                    pollId={this.props.match.params.id}
                />
            </div>
        );
    }
}

export default ContentComponent;
