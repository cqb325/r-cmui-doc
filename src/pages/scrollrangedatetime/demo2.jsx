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
                    <ScrollRangeDateTime view='ymd' value='2018-05-20~2018-05-25'/>
                    <ScrollRangeDateTime view='hms' value='10:10:00~15:15:00' className='ml-10'/>
                </div>
                <div className='code-box-desc'>
                    <div className='code-box-title'>视图和初始值</div>
                    <div>
                        选择view 呈现不一样的日期格式和视图 支持ymdhms, ymdhm, ymdh, ymd, ym, y, hms, hm, h
                        <FontIcon icon={'chevron-circle-down'} ref='collapse' className='collapse' onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className='code-box-src' ref='boxSrc'>
                    <Code>
                        {`
import ScrollRangeDateTime from 'r-cmui/components/ScrollRangeDateTime';

ReactDOM.render(
<div>
    <ScrollRangeDateTime view='ymd' value='2018-05-20~2018-05-25'/>
    <ScrollRangeDateTime view='hms' value='10:10:00~15:15:00' className='ml-10'/>
</div>, mountNode);
`}
                    </Code>
                </div>
            </div>
        );
    }
}

export default Demo;
