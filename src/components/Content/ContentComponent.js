import React, { Component } from 'react';
import './ContentComponent.css';
import SplitViewContainer from '../SplitView/SplitViewContainer';
import { cn } from '@bem-react/classname';

const cnContent = cn('content');

class ContentComponent extends Component {
    render() {
        return (
            <div className={cnContent()}>
                <SplitViewContainer
                    header="Твоё любимое животное?"
                    answers={[
                        { type: 'video', url: 'https://s3.eu-west-3.amazonaws.com/split-view/dog.mp4', answer: 'Котики' },
                        { type: 'video', url: 'https://s3.eu-west-3.amazonaws.com/split-view/cat.mp4', answer: 'Пёсики' },
                        // { type: 'image', url: 'https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&h=427', answer: 'Кот' },
                        // { type: 'image', url: 'https://www.ampravda.ru/files/articles-2/80488/2mm40ud6mvum-640.jpg', answer: 'Пёс' },
                        // { type: 'text', data: 'hello world', answer: 'Лево' },
                        // { type: 'text', data: 'hello lorem', answer: 'Право' }
                    ]}
                    setup={[
                        { type: 'input', text: 'Имя' },
                        { type: 'select', text: 'Есть ли домашние животные?', options: ['Один', 'Два'] },
                        { type: 'checkbox', text: 'Согласен, что котики милые' }
                    ]}
                    hasForm={true}
                />
            </div>
        );
    }
}

export default ContentComponent;
