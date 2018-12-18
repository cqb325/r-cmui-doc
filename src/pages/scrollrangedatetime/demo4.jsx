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
                    <ScrollRangeDateTime view='ymd' value='' endDate='2018-06-01' maxRange={7}/>
                </div>
                <div className='code-box-desc'>
                    <div className='code-box-title'>maxRange</div>
                    <div>
                        设置maxRange 可以限制区间的最大天数，这个属性目前只对日期起效
                        <FontIcon icon={'chevron-circle-down'} ref='collapse' className='collapse' onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className='code-box-src' ref='boxSrc'>
                    <Code>
                        {`
import ScrollDateTime from 'r-cmui/components/ScrollDateTime';

ReactDOM.render(
<div>
    <ScrollRangeDateTime view='ymd' value='' endDate='2018-06-01' maxRange={7}/>
</div>, mountNode);
`}
                    </Code>
                </div>
            </div>
        );
    }
}

export default Demo;
