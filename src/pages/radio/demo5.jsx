import React from 'react';
import BaseDemo from '../BaseDemo';
import RadioGroup from 'r-cmui/components/RadioGroup';
import FontIcon from 'r-cmui/components/FontIcon';
import Code from '../Code';

class Demo extends BaseDemo {
    render () {
        const groupData = [
            {type: '0', name: 'iPhone'},
            {type: '1', name: 'Android'},
            {type: '2', name: 'WinPhone'}
        ];
        return (
            <div>
                <div className='code-box-demo'>
                    <RadioGroup data={groupData} stick value='0' valueField='type' textField='name' />
                </div>
                <div className='code-box-desc'>
                    <div className='code-box-title'>样式</div>
                    <div>
                        可以设置 RadioGroup 的stick为true，将 RadioGroup 变为按钮组
                        <FontIcon icon={'chevron-circle-down'} ref='collapse' className='collapse' onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className='code-box-src' ref='boxSrc'>
                    <Code className='language-jsx'>
                        {`
import RadioGroup from 'r-cmui/components/RadioGroup';

let groupData = [
    {type: "0", name: "iPhone"},
    {type: "1", name: "Android"},
    {type: "2", name: "WinPhone"}
];

ReactDOM.render(
<div>
    <RadioGroup data={groupData} stick value="0" valueField="type" textField="name" />
</div>, mountNode);
`}
                    </Code>
                </div>
            </div>
        );
    }
}

export default Demo;
