import React from 'react';
import BaseDemo from '../BaseDemo';
import FontIcon from 'r-cmui/components/FontIcon';
import DateRange from 'r-cmui/components/DateRange';
import Code from '../Code';

class Demo extends BaseDemo{
    render(){
        return (
            <div>
                <div className="code-box-demo">
                    <DateRange value="2017-01-01至2017-01-15" sep="至" shortcuts={['一周内','一个月内','三个月内','半年内','一个月后','半年后']} />
                </div>
                <div className="code-box-desc">
                    <div className="code-box-title">快捷选择</div>
                    <div>
                        设置 shortcuts 可以设置快捷选择。
                        <FontIcon icon={'chevron-circle-down'} ref="collapse" className="collapse" onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className="code-box-src" ref="boxSrc">
                    <Code className="language-jsx">
                        {`
import DateRange from 'r-cmui/components/DateRange';

ReactDOM.render(
<div>
    <DateRange value="2017-01-01至2017-01-15" sep="至" shortcuts={["一周内","一个月内","三个月内","半年内","一个月后","半年后"]} />
</div>, mountNode);
`}
                    </Code>
                </div>
            </div>
        );
    }
}

export default Demo;
