import React from 'react';
import BaseDemo from '../BaseDemo';
import FontIcon from 'r-cmui/components/FontIcon';
import Code from '../Code';
import Notification from 'r-cmui/components/Notification';
import Button from 'r-cmui/components/Button';

class Demo extends BaseDemo {
    openNotification () {
        Notification.open({
            title: 'Notification Title',
            desc: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
            duration: 0
        });
    }

    render () {
        return (
            <div>
                <div className='code-box-demo'>
                    <Button theme='primary' raised onClick={this.openNotification.bind(this)}>open default notification</Button>
                </div>
                <div className='code-box-desc'>
                    <div className='code-box-title'>取消自动关闭</div>
                    <div>
                        取消自动关闭，只需设置duration的值为0即可， 默认为4.5s。
                        <FontIcon icon={'chevron-circle-down'} ref='collapse' className='collapse' onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className='code-box-src' ref='boxSrc'>
                    <Code className='language-jsx'>
                        {`
import Notification from 'r-cmui/components/Notification';
import Button from 'r-cmui/components/Button';

openNotification(){
    notification.open({
        title: "Notification Title",
        desc: "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
        duration: 0
    });
}

ReactDOM.render(
<div>
    <Button onClick={this.openNotification.bind(this)}>open default notification</Button>
</div>, mountNode);
`}
                    </Code>
                </div>
            </div>
        );
    }
}

export default Demo;
