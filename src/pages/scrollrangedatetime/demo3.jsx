import React from 'react';
import BaseDemo from '../BaseDemo';
import ScrollRangeDateTime from 'r-cmui/components/ScrollRangeDateTime';
import FontIcon from 'r-cmui/components/FontIcon';
import Code from '../Code';

class Demo extends BaseDemo {
    render () {
        return (
            <div>
                <div className='code-box-demo'>
                    <ScrollRangeDateTime view='ymd' value='2018-05-20~2018-06-01' endDate='2018-06-01'/>
                    <ScrollRangeDateTime view='ymd' value='2018-05-20~2018-06-01' startDate='2017-06-01' className='ml-10'/>
                </div>
                <div className='code-box-desc'>
                    <div className='code-box-title'>截止日期</div>
                    <div>
                        设置startDate/endDate 可以限制选择
                        <FontIcon icon={'chevron-circle-down'} ref='collapse' className='collapse' onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className='code-box-src' ref='boxSrc'>
                    <Code>
                        {`
import ScrollDateTime from 'r-cmui/components/ScrollDateTime';

ReactDOM.render(
<div>
    <ScrollRangeDateTime view='ymd' value='2018-05-20~2018-06-01' endDate='2018-06-01'/>
    <ScrollRangeDateTime view='ymd' value='2018-05-20~2018-06-01' startDate='2017-06-01' className='ml-10'/>
</div>, mountNode);
`}
                    </Code>
                </div>
            </div>
        );
    }
}

export default Demo;
