import React from 'react';
import BaseDemo from '../BaseDemo';
import RadioGroup from 'r-cmui/components/RadioGroup';
import FontIcon from 'r-cmui/components/FontIcon';
import Code from '../Code';

class Demo extends BaseDemo {
    render () {
        const groupData = [
            {id: '0', text: 'iPhone'},
            {id: '1', text: 'Android'},
            {id: '2', text: 'WinPhone'}
        ];
        return (
            <div>
                <div className='code-box-demo'>
                    <RadioGroup data={groupData} layout='stack' value='0' />
                </div>
                <div className='code-box-desc'>
                    <div className='code-box-title'>堆积布局</div>
                    <div>
                        设置RadioGroup的layout为stack可以设置为堆积布局
                        <FontIcon icon={'chevron-circle-down'} ref='collapse' className='collapse' onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className='code-box-src' ref='boxSrc'>
                    <Code>
                        {`
import RadioGroup from 'r-cmui/components/RadioGroup';

let groupData = [
    {type: "0", name: "iPhone"},
    {type: "1", name: "Android"},
    {type: "2", name: "WinPhone"}
];

ReactDOM.render(
<div>
    <RadioGroup data={groupData} layout="stack" value="0" />
</div>, mountNode);
`}
                    </Code>
                </div>
            </div>
        );
    }
}

export default Demo;
