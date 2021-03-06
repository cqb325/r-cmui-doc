import React from 'react';
import BaseDemo from '../BaseDemo';
import FontIcon from 'r-cmui/components/FontIcon';
import Tooltip from 'r-cmui/components/Tooltip';
import Code from '../Code';

class Demo extends BaseDemo {
    render () {
        return (
            <div>
                <div className='code-box-demo'>
                    <Tooltip title='tip text' trigger='click'>
                        <span>Tooltip will show when mouse click.</span>
                    </Tooltip>
                </div>
                <div className='code-box-desc'>
                    <div className='code-box-title'>触发条件</div>
                    <div>
                        设置 trigger 属性为 click 时 点击的时候触发显示和隐藏提示。默认为hover
                        <FontIcon icon={'chevron-circle-down'} ref='collapse' className='collapse' onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className='code-box-src' ref='boxSrc'>
                    <Code className='language-jsx'>
                        {`
import Tooltip from 'r-cmui/components/Tooltip';

ReactDOM.render(
<div>
    <Tooltip title="tip text" trigger="click">
        <span>Tooltip will show when mouse click.</span>
    </Tooltip>
</div>, mountNode);
`}
                    </Code>
                </div>
            </div>
        );
    }
}

export default Demo;
