import React from 'react';
import BaseDemo from '../BaseDemo';
import FontIcon from 'r-cmui/components/FontIcon';
import DateRange from 'r-cmui/components/DateRange';
import Code from '../Code';
import moment from 'moment';

class Demo extends BaseDemo{
    render(){
        let end = moment();
        end.add(15, 'days');
        let start = moment();
        start.add(-2, 'month');
        return (
            <div>
                <div className="code-box-demo">
                    <DateRange maxRange={7} />
                </div>
                <div className="code-box-desc">
                    <div className="code-box-title">限制选择</div>
                    <div>
                        设置 maxRange 可以限制最大选择天数。
                        <FontIcon icon={'chevron-circle-down'} ref="collapse" className="collapse" onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className="code-box-src" ref="boxSrc">
                    <Code className="language-jsx">
                        {`
import DateRange from 'r-cmui/components/DateRange';

ReactDOM.render(
<div>
    <DateRange maxRange={7} />
</div>, mountNode);
`}
                    </Code>
                </div>
            </div>
        );
    }
}

export default Demo;
