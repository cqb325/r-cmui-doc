import React from 'react';
import BaseDemo from '../BaseDemo';
import FontIcon from 'r-cmui/components/FontIcon';
import Code from '../Code';
import Uploadify from 'r-cmui/components/Uploadify';
// const Mock = require("mock");
//
// Mock.mock(/uploadify\/upload/, {
//     "OK": 1
// });

class Demo extends BaseDemo {
    render () {
        return (
            <div>
                <div className='code-box-demo'>
                    <Uploadify url='http://192.168.105.202:8415/mock/test/uploadify/upload' auto />
                </div>
                <div className='code-box-desc'>
                    <div className='code-box-title'>基本用法</div>
                    <div>
                        简单用法
                        <FontIcon icon={'chevron-circle-down'} ref='collapse' className='collapse' onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className='code-box-src' ref='boxSrc'>
                    <Code className='language-jsx'>
                        {`
const Uploadify = require("Uploadify");

ReactDOM.render(
<div>
    <Uploadify url="http://192.168.105.202:8415/mock/test/uploadify/upload" auto />
</div>, mountNode);
`}
                    </Code>
                </div>
            </div>
        );
    }
}

export default Demo;
