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
                    <CheckBoxGroup data={groupData} value='0,1' valueField='type' textField='name' />
                </div>
                <div className='code-box-desc'>
                    <div className='code-box-title'>CheckBox 组</div>
                    <div>
                        checkbox组的例子，从数据源生成checkbox组
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
    <CheckBoxGroup data={groupData} value="0,1" valueField="type" textField="name"></CheckBoxGroup>
</div>, mountNode);
`}
                    </Code>
                </div>
            </div>
        );
    }
}

export default Demo;
