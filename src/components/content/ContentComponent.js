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
                    header="Заголовок"
                    answers={[
                        {type: "image", url: "https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&h=427", answer: "Кот"},
                        {type: "image", url: "https://www.ampravda.ru/files/articles-2/80488/2mm40ud6mvum-640.jpg", answer: "Пёс"}
                    ]}
                    setup={[
                            {type: "select", text: "Имя",options:['Один','Два']},
                            {type:"input", text: "Поле"},
                            {type:"checkbox", text:"Чекбокс"}
                        ]}
                />
            </div>
        );
    }
}

export default ContentComponent;
