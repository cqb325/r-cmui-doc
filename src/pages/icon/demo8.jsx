import React from 'react';
import BaseDemo from '../BaseDemo';
import FontIcon from 'r-cmui/components/FontIcon';
import Label from 'r-cmui/components/Label';

class Demo extends BaseDemo {
    render () {
        let webIcons = ['genderless','transgender','mars','mars-double','mars-stroke','mars-stroke-h','mars-stroke-v','mercury','neuter','transgender','transgender-alt','venus','venus-double','venus-mars'];
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
