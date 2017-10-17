import React from 'react';
import BaseDemo from '../BaseDemo';
import FontIcon from 'r-cmui/components/FontIcon';
import Code from '../Code';
import Table from 'r-cmui/components/Table';

class Demo extends BaseDemo {
    render () {
        const columns = [
            {name: 'index', text: '序号', type: 'index'},
            {name: 'field1', text: '数字'},
            {name: 'field2', text: '日期', format: 'DateFormat'},
            {name: 'field3', text: '文字'}
        ];
        const data = [];
        for (let i = 0; i < 10; i++) {
            data.push({
                field1: i + 1,
                field2: new Date(),
                field3: '文字abc'
            });
        }
        return (
            <div>
                <div className='code-box-demo'>
                    <Table data={data} columns={columns} bordered />
                </div>
                <div className='code-box-desc'>
                    <div className='code-box-title'>典型用法</div>
                    <div>
                        包含标题、内容、操作区域。
                        <FontIcon icon={'chevron-circle-down'} ref='collapse' className='collapse' onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className='code-box-src' ref='boxSrc'>
                    <Code className='language-jsx'>
                        {`
import Table from 'r-cmui/components/Table';

let columns = [
    {type: 'checkbox'},
    {name: 'field1', text: '数字'},
    {name: 'field2', text: '日期', format: 'DateFormat'},
    {name: 'field3', text: '文字'}
];
let data = [];
for(let i = 0; i < 10; i++){
    data.push({
        field1: i+1,
        field2: new Date(),
        field3: '文字abc'
    });
}

ReactDOM.render(
    <Table data={data} columns={columns} bordered />, mountNode);
`}
                    </Code>
                </div>
            </div>
        );
    }
}

export default Demo;
