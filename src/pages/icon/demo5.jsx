import React from 'react';
import BaseDemo from '../BaseDemo';
import FontIcon from 'r-cmui/components/FontIcon';
import Label from 'r-cmui/components/Label';

class Demo extends BaseDemo {
    render () {
        let webIcons = ['american-sign-language-interpreting','american-sign-language-interpreting','assistive-listening-systems','audio-description','blind','braille','cc','deaf','deaf','deaf','low-vision','question-circle-o','sign-language','sign-language','tty','universal-access','volume-control-phone','wheelchair','wheelchair-alt'];
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
