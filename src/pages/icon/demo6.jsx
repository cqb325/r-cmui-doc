import React from 'react';
import BaseDemo from '../BaseDemo';
import FontIcon from 'r-cmui/components/FontIcon';
import Label from 'r-cmui/components/Label';


class Demo extends BaseDemo {
    render () {
        let webIcons = ['hand-rock-o','hand-lizard-o','hand-o-down','hand-o-left','hand-o-right','hand-o-up','hand-paper-o','hand-peace-o','hand-pointer-o','hand-rock-o','hand-scissors-o','hand-spock-o','hand-paper-o','thumbs-down','thumbs-o-down','thumbs-o-up','thumbs-up'];
        webIcons = webIcons.map((icon, index) => {
            return (
                <Label grid={1 / 8} className='iconItem' key={index}>
                    <FontIcon icon={icon}></FontIcon>
                    <span>{icon}</span>
                </Label>
            );
        });

        return (
            <div className='icons icon-list'>
                {webIcons}
            </div>
        );
    }
}

export default Demo;
