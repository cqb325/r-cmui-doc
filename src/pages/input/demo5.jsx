import React from 'react';
import BaseDemo from '../BaseDemo';
import FontIcon from 'r-cmui/components/FontIcon';
import Input from 'r-cmui/components/Input';
import Code from '../Code';

class Demo extends BaseDemo {
    render () {
        return (
            <div>
                <div className='code-box-demo'>
                    <div style={{width: 300}}>
                        <Input addonBefore='http://' addonAfter='.com'/>
                    </div>
                </div>
                <div className='code-box-desc'>
                    <div className='code-box-title'>addonBefore和addonAfter</div>
                    <div>
                        设置addonBefore和addonAfter
                        <FontIcon icon={'chevron-circle-down'} ref='collapse' className='collapse' onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className='code-box-src' ref='boxSrc'>
                    <Code>
                        {`
import Input from 'r-cmui/components/Input';

ReactDOM.render(
<div>
    <Input addonBefore='http://' addonAfter='.com'/>
</div>, mountNode);
`}
                    </Code>
                </div>
            </div>
        );
    }
}

export default Demo;
