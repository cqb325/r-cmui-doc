import React from 'react';
import BaseDemo from '../BaseDemo';
import FontIcon from 'r-cmui/components/FontIcon';
import DateTime from 'r-cmui/components/DateTime';
import Code from '../Code';
import moment from 'moment';

class Demo extends BaseDemo {
    render () {
        const start = moment();
        start.add('-1', 'month');
        const end = moment();
        return (
            <div>
                <div className='code-box-demo'>
                    <DateTime dateOnly startDate={start.format('YYYY-MM-DD')} endDate={end} />
                </div>
                <div className='code-box-desc'>
                    <div className='code-box-title'>限制选择</div>
                    <div>
                        设置 startDate 可以限制可选的开始日期， endDate 可以限制可选的结束日期。
                        <FontIcon icon={'chevron-circle-down'} ref='collapse' className='collapse' onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className='code-box-src' ref='boxSrc'>
                    <Code>
                        {`
import DateTime from 'r-cmui/components/DateTime';

ReactDOM.render(
<div>
    <DateTime dateOnly startDate={start.format("YYYY-MM-DD")} endDate={end} />
</div>, mountNode);
`}
                    </Code>
                </div>
            </div>
        );
    }
}

export default Demo;
