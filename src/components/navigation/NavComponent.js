import React, { Component } from 'react';
import { Link } from 'lego-on-react';
import './NavComponent.css';
import { cn } from '@bem-react/classname';

const cnNavigation = cn('navigation');

class NavComponent extends Component {
    render() {
        return (
            <div className={cnNavigation()}>
                {
                    this.props.links.map((link, index) =>
                        <Link key={index} cls={cnNavigation("link")} theme="black" text={link}/>)
                }
            </div>
        );
    }
}

export default NavComponent;
