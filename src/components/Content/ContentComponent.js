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
                        // { type: 'image', url: 'https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&h=427', answer: 'Кот' },
                        // { type: 'image', url: 'https://www.ampravda.ru/files/articles-2/80488/2mm40ud6mvum-640.jpg', answer: 'Пёс' }
                        { type: 'audio', url: 'https://s3.eu-west-3.amazonaws.com/split-view/Jamezy+-+Soulduck+(Original+Mix)+%5BChannel+Six+Music+Company%5D.mp3', answer: 'Кот' },
                        { type: 'audio', url: 'https://s3.eu-west-3.amazonaws.com/split-view/Jamezy+-+All+Right+(Original+Mix)+%5BChannel+Six+Music+Company%5D.mp3', answer: 'Пёс' }
                    ]}
                    setup={[
                        { type: 'select', text: 'Имя', options: ['Один', 'Два'] },
                        { type: 'input', text: 'Поле' },
                        { type: 'checkbox', text: 'Чекбокс' }
                    ]}
                />
            </div>
        );
    }
}

export default ContentComponent;
