import React from 'react';
import BaseDemo from '../BaseDemo';
import FontIcon from 'r-cmui/components/FontIcon';
import DateTime from 'r-cmui/components/DateTime';
import Code from '../Code';

class Demo extends BaseDemo {
    render () {
        return (
            <div>
                <div className='code-box-demo'>
                    <DateTime timeOnly minuteStep={10} secondStep={15} />
                </div>
                <div className='code-box-desc'>
                    <div className='code-box-title'>时间</div>
                    <div>
                        设置 timeOnly 为 true 只能选择时间。hourStep,minuteStep,secondStep可以设置时间步长
                        <FontIcon icon={'chevron-circle-down'} ref='collapse' className='collapse' onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className='code-box-src' ref='boxSrc'>
                    <Code className='language-jsx'>
                        {`
import DateTime from 'r-cmui/components/DateTime';

ReactDOM.render(
<div>
    <DateTime timeOnly />
</div>, mountNode);
`}
                    </Code>
                </div>
            </div>
        );
    }
}

export default Demo;
