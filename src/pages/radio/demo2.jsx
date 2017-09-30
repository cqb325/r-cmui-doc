import React from 'react';
import BaseDemo from '../BaseDemo';
import RadioGroup from 'r-cmui/components/RadioGroup';
import FontIcon from 'r-cmui/components/FontIcon';
import Code from '../Code';

class Demo extends BaseDemo{
    render(){
        let groupData = [
            {id: '0', text: 'iPhone'},
            {id: '1', text: 'Android'},
            {id: '2', text: 'WinPhone'}
        ];

        return (
            <div>
                <div className="code-box-demo">
                    <RadioGroup data={groupData} disabled value="0" />
                </div>
                <div className="code-box-desc">
                    <div className="code-box-title">禁用状态</div>
                    <div>
                        禁用状态下的radio组
                        <FontIcon icon={'chevron-circle-down'} ref="collapse" className="collapse" onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className="code-box-src" ref="boxSrc">
                    <Code>
                        {`
const RadioGroup = require("RadioGroup");

let groupData = [
    {id: "0", text: "iPhone"},
    {id: "1", text: "Android"},
    {id: "2", text: "WinPhone"}
];

ReactDOM.render(
<div>
    <RadioGroup data={groupData} disabled value="0" />
</div>, mountNode);
`}
                    </Code>
                </div>
            </div>
        );
    }
}

export default Demo;
