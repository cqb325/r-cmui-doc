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
                    <ScrollDateTime today clear placeholder='请选择日期' view='ymd' value='2018-05-20' endDate='2018-06-01'/>
                    <ScrollDateTime today clear placeholder='请选择时间' view='hms' value='10:10:00' endDate='23:10:00' className='ml-10'/>
                </div>
                <div className='code-box-desc'>
                    <div className='code-box-title'>今日和清除</div>
                    <div>
                        设置today 和 clear属性可以显示今日按钮和清除按钮
                        <FontIcon icon={'chevron-circle-down'} ref='collapse' className='collapse' onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className='code-box-src' ref='boxSrc'>
                    <Code>
                        {`
import ScrollDateTime from 'r-cmui/components/ScrollDateTime';

ReactDOM.render(
<div>
    <ScrollDateTime today clear placeholder='请选择日期' view='ymd' value='2018-05-20' endDate='2018-06-01'/>
    <ScrollDateTime today clear placeholder='请选择时间' view='hms' value='10:10:00' endDate='23:10:00' className='ml-10'/>
</div>, mountNode);
`}
                    </Code>
                </div>
            </div>
        );
    }
}

export default Demo;
