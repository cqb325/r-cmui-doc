import React from 'react';
import BaseDemo from '../BaseDemo';
import RadioGroup from 'r-cmui/components/RadioGroup';
import FontIcon from 'r-cmui/components/FontIcon';
import Code from '../Code';

class Demo extends BaseDemo{
    render(){
        return (
            <div>
                <div className="code-box-demo">
                    <RadioGroup url="checkboxData.json" value="1" valueField="type" textField="name" />
                </div>
                <div className="code-box-desc">
                    <div className="code-box-title">从数据源生成</div>
                    <div>
                        RadioGroup 可以通过获取数据源数据生成单选框组 。
                        <FontIcon icon={'chevron-circle-down'} ref="collapse" className="collapse" onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className="code-box-src" ref="boxSrc">
                    <Code>
                        {`
import RadioGroup from 'r-cmui/components/RadioGroup';

ReactDOM.render(
<div>
    <RadioGroup url="checkboxData.json" value="1" valueField="type" textField="name" />
</div>, mountNode);
`}
                    </Code>
                </div>
            </div>
        );
    }
}

export default Demo;
