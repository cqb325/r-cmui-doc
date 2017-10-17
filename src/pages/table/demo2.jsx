import React from 'react';
import BaseDemo from '../BaseDemo';
import FontIcon from 'r-cmui/components/FontIcon';
import Code from '../Code';
import Table from 'r-cmui/components/Table';

class Demo extends BaseDemo {
    render () {
        const columns = [
            {type: 'checkbox'},
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
                    <div className='code-box-title'>内置checkbox的表格</div>
                    <div>
                        column的type为checkbox可以设置该列为checkbox列。
                        <FontIcon icon={'chevron-circle-down'} ref='collapse' className='collapse' onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className='code-box-src' ref='boxSrc'>
                    <Code>
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
