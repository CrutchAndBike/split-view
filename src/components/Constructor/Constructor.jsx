import React, { Component } from 'react';
import CanvasContainer from '../Canvas/CanvasContainer';
import ToolbarContainer from '../Toolbar/ToolbarContainer';
import Icon from '../Icon/Icon';
import { Link, Button, Modal } from 'lego-on-react';

import Editor from '../Editor/Editor';
import Links from '../Links/Links';

import './Constructor.css';
import './Constructor-Body.css';
import './Constructor-Title.css';
import './Constructor-Head.css';
import './Constructor-Edit.css';
import './Constructor-Links.css';

import { cn } from '@bem-react/classname';

const cnConstructor = cn('Constructor');

class Constructor extends Component {
	constructor(props) {
		super(props);
		this.state = {
			modalVisible: true
		};
	}

	openModal() {
		this.setState({ modalVisible: true });
	}

	closeModal() {
		this.setState({ modalVisible: false });
	}

	render() {
		return (
			<div className={cnConstructor()}>
				<div className={cnConstructor('Head')}>
					<h3 className={cnConstructor('Title')}>Новый опрос</h3>
					<div className={cnConstructor('Edit')}>
						<Icon glyph="pen" size="m" />
					</div>
				</div>
				<Links className={cnConstructor('Links')}>
					<Link href="#" theme="islands" text="Конструктор" disabled={true} />
					<Link href="#" theme="islands" text="Ответы" />
					<Link href="#" theme="islands" text="Что-то еще" />
					<div className={cnConstructor('Action')}>
						<Button size="m"
							theme="raised"
							view="default"
							tone="default"
							icon={{
								'mods': {
									'glyph': 'eye'
								}
							}}
							text="Предпросмотр"
						/>
						<Button size="m"
							theme="raised"
							view="default"
							tone="default"
							icon={{
								'mods': {
									'glyph': 'dots'
								}
							}}
						/>
					</div>
				</Links>
				<div className={cnConstructor('Body')}>
					<ToolbarContainer className={cnConstructor('Toolbar')} />
					<CanvasContainer className={cnConstructor('Canvas')} />
				</div>
				<Modal
					theme="normal"
					autoclosable={true}
					visible={this.state.modalVisible}
					onOutsideClick={() => {
						this.setState({ modalVisible: false });
					}}
				>
					<Editor type="input" />
				</Modal>
			</div>
		);
	}
}

export default Constructor;
