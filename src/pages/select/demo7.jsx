import React from 'react';
import BaseDemo from '../BaseDemo';
import FontIcon from 'r-cmui/components/FontIcon';
import Code from '../Code';
import Select from 'r-cmui/components/Select';

class Demo extends BaseDemo {
    render () {
        const data = [
            {'id':'110000','text':'北京'},
            {'id':'120000','text':'天津'},
            {'id':'310000','text':'上海'},
            {'id':'310001','text':'杭州'},
            {'id':'310002','text':'金华'},
            {'id':'310003','text':'苏州'}
        ];
        return (
            <div>
                <div className='code-box-demo'>
                    <Select data={data} filter group placeholder='选择城市' hasEmptyOption choiceText='--请选择--' />
                </div>
                <div className='code-box-desc'>
                    <div className='code-box-title'>分组</div>
                    <div>
                    分组显示选项
                        <FontIcon icon={'chevron-circle-down'} ref='collapse' className='collapse' onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className='code-box-src' ref='boxSrc'>
                    <Code>
                        {`
import Select from 'r-cmui/components/Select';

const data = [
    {'id':'110000','text':'北京'},
    {'id':'120000','text':'天津'},
    {'id':'310000','text':'上海'},
    {'id':'310001','text':'杭州'},
    {'id':'310002','text':'金华'},
    {'id':'310003','text':'苏州'}
];

ReactDOM.render(
<div>
    <Select data={data} filter group placeholder='选择城市' hasEmptyOption choiceText='--请选择--' />
</div>, mountNode);
`}
                    </Code>
                </div>
            </div>
        );
    }
}

export default Demo;
