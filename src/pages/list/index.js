import React, {PureComponent} from 'react';
import Label from 'r-cmui/components/Label';
import Table from 'r-cmui/components/Table';

import Demo1 from './demo1';
import Demo2 from './demo2';
import Demo3 from './demo3';

class Page extends PureComponent {
    displayName = 'Page';
    
    render () {
        return (
            <div className='main-container'>
                <h1 className='page-h1'>List 列表组件</h1>
                <blockquote className='page-tip'>
                    最基础的列表展示，可承载文字、列表、图片、段落，常用于后台数据展示页面<br/>
                </blockquote>

                <h1 className='page-h1'>代码演示</h1>

                <Label grid={1} className='code-col'>
                    <Label className='code-box'>
                        <Demo1></Demo1>
                    </Label>
                </Label>

                <Label grid={1} className='code-col'>
                    <Label className='code-box'>
                        <Demo2></Demo2>
                    </Label>
                </Label>

                <Label grid={1} className='code-col'>
                    <Label className='code-box'>
                        <Demo3></Demo3>
                    </Label>
                </Label>

                <h2 className='page-h2'>API</h2>
                <h3 className='page-h3'>List</h3>

                <Table columns={[
                    {name: 'param', text: '参数'},
                    {name: 'desc', text: '说明'},
                    {name: 'type', text: '类型'},
                    {name: 'default', text: '默认值'}
                ]} bordered data={[
                    {param: 'className', desc: '自定义class', type: 'string', default: ''},
                    {param: 'style', desc: '自定义样式', type: 'object', default: ''},
                    {param: 'head', desc: '标题', type: 'any', default: ''},
                    {param: 'data', desc: '数据', type: 'array', default: ''},
                    {param: 'actions', desc: '列表项的操作', type: 'string', default: ''},
                    {param: 'border', desc: '显示边框', type: 'bool', default: 'false'},
                    {param: 'spinning', desc: '显示loading', type: 'bool', default: 'false'},
                    {param: 'size', desc: '尺寸 可选 large、small', type: 'string', default: ''}
                ]}></Table>
            </div>
        );
    }
}

export default Page;
