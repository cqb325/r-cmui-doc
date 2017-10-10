import React from 'react';
import BaseDemo from '../BaseDemo';
import FontIcon from 'r-cmui/components/FontIcon';
import Code from '../Code';
import InputNumber from 'r-cmui/components/InputNumber';

class Demo extends BaseDemo{
    render(){
        return (
            <div>
                <div className="code-box-demo">
                    <InputNumber min={10} max={20} value={15.5} step={0.1} />
                </div>
                <div className="code-box-desc">
                    <div className="code-box-title">step</div>
                    <div>
                        step为数字框的步长
                        <FontIcon icon={'chevron-circle-down'} ref="collapse" className="collapse" onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className="code-box-src" ref="boxSrc">
                    <Code className="language-jsx">
                        {`
import InputNumber from 'r-cmui/components/InputNumber';

ReactDOM.render(
<div>
    <InputNumber min={10} max={20} value={15.5} step={0.1} />
</div>, mountNode);
`}
                    </Code>
                </div>
            </div>
        );
    }
}

export default Demo;
