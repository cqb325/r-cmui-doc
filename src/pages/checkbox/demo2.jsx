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
                    <CheckBox value='0' label='Iphone' disabled/>
                    <CheckBox value='1' label='Android' disabled checked/>
                </div>
                <div className='code-box-desc'>
                    <div className='code-box-title'>禁用状态</div>
                    <div>
                        禁用状态下的checkbox
                        <FontIcon icon={'chevron-circle-down'} ref='collapse' className='collapse' onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className='code-box-src' ref='boxSrc'>
                    <Code className='language-jsx'>
                        {`
import CheckBox from 'r-cmui/components/CheckBox';

ReactDOM.render(
<div>
    <CheckBox value="0" label="Iphone" disabled/>
    <CheckBox value="1" label="Android" disabled checked/>
</div>, mountNode);
`}
                    </Code>
                </div>
            </div>
        );
    }
}

export default Demo;
