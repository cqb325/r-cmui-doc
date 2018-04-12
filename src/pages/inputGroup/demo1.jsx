import React from 'react';
import BaseDemo from '../BaseDemo';
import FontIcon from 'r-cmui/components/FontIcon';
import Input from 'r-cmui/components/Input';
import InputGroup from 'r-cmui/components/InputGroup';
import Code from '../Code';

class Demo extends BaseDemo {
    render () {
        return (
            <div>
                <div className='code-box-demo'>
                    <InputGroup size='small'>
                        <Input style={{width: '30%'}}/>
                        <Input style={{width: '50%'}}/>
                        <Input style={{width: '20%'}}/>
                    </InputGroup>
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
import InputGroup from 'r-cmui/components/InputGroup';

ReactDOM.render(
<div>
    <InputGroup size='small'>
        <Input style={{width: '30%'}}/>
        <Input style={{width: '50%'}}/>
        <Input style={{width: '20%'}}/>
    </InputGroup>
</div>, mountNode);
`}
                    </Code>
                </div>
            </div>
        );
    }
}

export default Demo;
