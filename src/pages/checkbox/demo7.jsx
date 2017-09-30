import React from 'react';
import BaseDemo from '../BaseDemo';
import CheckBox from 'r-cmui/components/CheckBox';
import CheckBoxGroup from 'r-cmui/components/CheckBoxGroup';
import FontIcon from 'r-cmui/components/FontIcon';
import Code from '../Code';

class Demo extends BaseDemo{
    render(){
        return (
            <div>
                <div className="code-box-demo">
                    <CheckBoxGroup name="type">
                        <CheckBox label="iphone" value="1"></CheckBox>
                        <CheckBox label="android" value="2"></CheckBox>
                        <CheckBox label="winphone" value="3"></CheckBox>
                    </CheckBoxGroup>
                </div>
                <div className="code-box-desc">
                    <div className="code-box-title">组合</div>
                    <div>
                        checkbox组 和CheckBox组件组合 。
                        <FontIcon icon={'chevron-circle-down'} ref="collapse" className="collapse" onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className="code-box-src" ref="boxSrc">
                    <Code className="language-jsx">
                        {`
import CheckBox from 'r-cmui/components/CheckBox';
import CheckBoxGroup from 'r-cmui/components/CheckBoxGroup';

ReactDOM.render(
<div>
    <CheckBoxGroup name='type'>
        <CheckBox label="iphone" value="1"></CheckBox>
        <CheckBox label="android" value="2"></CheckBox>
        <CheckBox label="winphone" value="3"></CheckBox>
    </CheckBoxGroup>
</div>, mountNode);
`}
                    </Code>
                </div>
            </div>
        );
    }
}

export default Demo;
