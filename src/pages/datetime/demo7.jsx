import React from 'react';
import BaseDemo from '../BaseDemo';
import FontIcon from 'r-cmui/components/FontIcon';
import DateTime from 'r-cmui/components/DateTime';
import Code from '../Code';

class Demo extends BaseDemo{
    render(){
        return (
            <div>
                <div className="code-box-demo">
                    <DateTime dateOnly disabled value="2017-01-01" />
                </div>
                <div className="code-box-desc">
                    <div className="code-box-title">禁用</div>
                    <div>
                        设置 disabled 可以禁用选择器。
                        <FontIcon icon={'chevron-circle-down'} ref="collapse" className="collapse" onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className="code-box-src" ref="boxSrc">
                    <Code className="language-jsx">
                        {`
import DateTime from 'r-cmui/components/DateTime';

ReactDOM.render(
<div>
    <DateTime dateOnly disabled value="2017-01-01" />
</div>, mountNode);
`}
                    </Code>
                </div>
            </div>
        );
    }
}

export default Demo;
