import React from 'react';
import BaseDemo from '../BaseDemo';
import CheckBox from 'r-cmui/components/CheckBox';
import FontIcon from 'r-cmui/components/FontIcon';
import Code from '../Code';

class Demo extends BaseDemo {
    render () {
        return (
            <div>
                <div className='code-box-demo'>
                    <CheckBox value='0' label='Iphone'/>
                    <CheckBox value='1' label='Android'/>
                    <CheckBox value='2' label='WinPhone'/>
                </div>
                <div className='code-box-desc'>
                    <div className='code-box-title'>基本用法</div>
                    <div>
                        简单的 checkbox
                        <FontIcon icon={'chevron-circle-down'} ref='collapse' className='collapse' onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className='code-box-src' ref='boxSrc'>
                    <Code>
                        {`
import CheckBox from 'r-cmui/components/CheckBox';

ReactDOM.render(
<div>
    <CheckBox value="0" label="Iphone"/>
    <CheckBox value="1" label="Android"/>
    <CheckBox value="2" label="WinPhone"/>
</div>, mountNode);
`}
                    </Code>
                </div>
            </div>
        );
    }
}

export default Demo;
