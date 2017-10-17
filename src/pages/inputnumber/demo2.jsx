import React from 'react';
import BaseDemo from '../BaseDemo';
import FontIcon from 'r-cmui/components/FontIcon';
import Code from '../Code';
import InputNumber from 'r-cmui/components/InputNumber';

class Demo extends BaseDemo {
    render () {
        return (
            <div>
                <div className='code-box-demo'>
                    <InputNumber min={10} max={20} />
                </div>
                <div className='code-box-desc'>
                    <div className='code-box-title'>min and max</div>
                    <div>
                        设置min和max可以限制数字框的最大最小值
                        <FontIcon icon={'chevron-circle-down'} ref='collapse' className='collapse' onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className='code-box-src' ref='boxSrc'>
                    <Code className='language-jsx'>
                        {`
import InputNumber from 'r-cmui/components/InputNumber';

ReactDOM.render(
<div>
    <InputNumber min={10} max={20} />
</div>, mountNode);
`}
                    </Code>
                </div>
            </div>
        );
    }
}

export default Demo;
