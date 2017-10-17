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
                    <Input name='text' placeholder='Basic usage' />
                </div>
                <div className='code-box-desc'>
                    <div className='code-box-title'>基本用法</div>
                    <div>
                        简单用法
                        <FontIcon icon={'chevron-circle-down'} ref='collapse' className='collapse' onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className='code-box-src' ref='boxSrc'>
                    <Code>
                        {`
import Input from 'r-cmui/components/Input';

ReactDOM.render(
<div>
    <Input name="text"  placeholder="Basic usage" />
</div>, mountNode);
`}
                    </Code>
                </div>
            </div>
        );
    }
}

export default Demo;
