import React from 'react';
import BaseDemo from '../BaseDemo';
import FontIcon from 'r-cmui/components/FontIcon';
import DateTime from 'r-cmui/components/DateTime';
import Code from '../Code';

class Demo extends BaseDemo {
    render () {
        return (
            <div>
                <div className='code-box-demo'>
                    <DateTime theme='black' value='2017-01-01' />
                </div>
                <div className='code-box-desc'>
                    <div className='code-box-title'>主题</div>
                    <div>
                        设置DateTime的theme属性可以设置样式主题。支持的主题是black,不设置默认为白色。
                        <FontIcon icon={'chevron-circle-down'} ref='collapse' className='collapse' onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className='code-box-src' ref='boxSrc'>
                    <Code className='language-jsx'>
                        {`
import DateTime from 'r-cmui/components/DateTime';

ReactDOM.render(
<div>
    <DateTime theme="black" value="2017-01-01" />
</div>, mountNode);
`}
                    </Code>
                </div>
            </div>
        );
    }
}

export default Demo;
