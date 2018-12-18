import React from 'react';
import BaseDemo from '../BaseDemo';
import ScrollDateTime from 'r-cmui/components/ScrollDateTime';
import FontIcon from 'r-cmui/components/FontIcon';
import Code from '../Code';

class Demo extends BaseDemo {
    render () {
        return (
            <div>
                <div className='code-box-demo'>
                    <ScrollDateTime view='ymd' value='2018-05-20' endDate='2018-06-01'/>
                    <ScrollDateTime view='ymd' value='2018-05-20' startDate='2017-06-01' className='ml-10'/>
                </div>
                <div className='code-box-desc'>
                    <div className='code-box-title'>截止日期</div>
                    <div>
                        设置endDate 可以限制选择
                        <FontIcon icon={'chevron-circle-down'} ref='collapse' className='collapse' onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className='code-box-src' ref='boxSrc'>
                    <Code>
                        {`
import ScrollDateTime from 'r-cmui/components/ScrollDateTime';

ReactDOM.render(
<div>
    <ScrollDateTime view='ymd' value='2018-05-20' endDate='2018-06-01'/>
    <ScrollDateTime view='ymd' value='2018-05-20' startDate='2017-06-01' className='ml-10'/>
</div>, mountNode);
`}
                    </Code>
                </div>
            </div>
        );
    }
}

export default Demo;
