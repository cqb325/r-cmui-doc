import React from 'react';
import BaseDemo from '../BaseDemo';
import FontIcon from 'r-cmui/components/FontIcon';
import Label from 'r-cmui/components/Label';

class Demo extends BaseDemo {
    render () {
        let webIcons = ['file','file-archive-o','file-audio-o','file-code-o','file-excel-o','file-image-o','file-video-o','file-o','file-pdf-o','file-image-o','file-image-o','file-powerpoint-o','file-audio-o','file-text','file-text-o','file-video-o','file-word-o','file-archive-o'];
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
