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
                    <DateRange value='2017-01-01~2017-01-15' />
                </div>
                <div className='code-box-desc'>
                    <div className='code-box-title'>默认值</div>
                    <div>
                        设置value属性xxxx-xx-xx~xxxx-xx-xx可以设置默认值。
                        <FontIcon icon={'chevron-circle-down'} ref='collapse' className='collapse' onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className='code-box-src' ref='boxSrc'>
                    <Code>
                        {`
import DateRange from 'r-cmui/components/DateRange';

ReactDOM.render(
<div>
    <DateRange value="2017-01-01~2017-01-15" />
</div>, mountNode);
`}
                    </Code>
                </div>
            </div>
        );
    }
}

export default Demo;
