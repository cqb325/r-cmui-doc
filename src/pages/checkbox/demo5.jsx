import React from 'react';
import BaseDemo from '../BaseDemo';
import CheckBoxGroup from 'r-cmui/components/CheckBoxGroup';
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
                    <CheckBoxGroup data={groupData} value='0' valueField='type' textField='name' />

                    <div className='mt-15'>
                        <CheckBoxGroup data={groupData} value='0,1' disabled={true} valueField='type' textField='name' />
                    </div>
                </div>
                <div className='code-box-desc'>
                    <div className='code-box-title'>CheckBox 组 禁用状态</div>
                    <div>
                        checkbox组 通过设置disabled为true 也可以设置禁用状态 。
                        <FontIcon icon={'chevron-circle-down'} ref='collapse' className='collapse' onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className='code-box-src' ref='boxSrc'>
                    <Code>
                        {`
import CheckBoxGroup from 'r-cmui/components/CheckBoxGroup';

let groupData = [
    {type: "0", name: "iPhone"},
    {type: "1", name: "Android"},
    {type: "2", name: "WinPhone"}
];

ReactDOM.render(
<div>
    <CheckBoxGroup data={groupData} value="0" valueField="type" textField="name"></CheckBoxGroup>
    <CheckBoxGroup data={groupData} value="0,1" disabled={true} valueField="type" textField="name"></CheckBoxGroup>
</div>, mountNode);
`}
                    </Code>
                </div>
            </div>
        );
    }
}

export default Demo;
