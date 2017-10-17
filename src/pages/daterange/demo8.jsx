import React from 'react';
import BaseDemo from '../BaseDemo';
import FontIcon from 'r-cmui/components/FontIcon';
import DateRange from 'r-cmui/components/DateRange';
import Code from '../Code';

class Demo extends BaseDemo {
    render () {
        return (
            <div>
                <div className='code-box-demo'>
                    <DateRange value='2017-01-01~2017-01-15' showTime format='YYYY-MM-DD HH:mm' />
                </div>
                <div className='code-box-desc'>
                    <div className='code-box-title'>时间选择</div>
                    <div>
                        设置 showTime 可以进行时间的选择。
                        <FontIcon icon={'chevron-circle-down'} ref='collapse' className='collapse' onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className='code-box-src' ref='boxSrc'>
                    <Code className='language-jsx'>
                        {`
import DateRange from 'r-cmui/components/DateRange';

ReactDOM.render(
<div>
    <DateRange value="2017-01-01~2017-01-15" showTime format="YYYY-MM-DD HH:mm" />
</div>, mountNode);
`}
                    </Code>
                </div>
            </div>
        );
    }
}

export default Demo;
