import React, {PureComponent} from 'react';
import Label from 'r-cmui/components/Label';
import Table from 'r-cmui/components/Table';

import Demo1 from './demo1';
import Demo2 from './demo2';

class Page extends PureComponent {
    displayName = 'Page';
    
    render () {
        return (
            <div className='main-container'>
                <h1 className='page-h1'>Grid 大数据表格</h1>
                <blockquote className='page-tip'>
                    表头可以固定，可拖拽列，支持排序，动态加载
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

                <h2 className='page-h2'>API</h2>
                <h3 className='page-h3'>Grid</h3>

                <Table columns={[
                    {name: 'param', text: '参数'},
                    {name: 'desc', text: '说明'},
                    {name: 'type', text: '类型'},
                    {name: 'default', text: '默认值'}
                ]} bordered data={[
                    {param: 'className', desc: '自定义class', type: 'string', default: ''},
                    {param: 'style', desc: '自定义样式', type: 'object', default: ''},
                    {param: 'data', desc: '所有数据', type: 'array', default: ''},
                    {param: 'columns', desc: '表头信息， 类似Table', type: 'array', default: ''},
                    {param: 'selectMode', desc: '选择模式， row cell', type: 'string', default: ''},
                    {param: 'source', desc: '数据源来源方式 dynamic', type: 'string', default: ''},
                    {param: 'action', desc: '远程数据服务地址', type: 'string', default: ''},
                    {param: 'border', desc: '表格边框', type: 'bool', default: 'false'},
                    {param: 'total', desc: '数据总数', type: 'number', default: ''},
                    {param: 'pageSize', desc: '每页数量', type: 'number', default: '10'},
                    {param: 'pageNum', desc: '分页的时候当前页号', type: 'number', default: '1'},
                    {param: 'smart', desc: '动态渲染', type: 'bool', default: 'false'},
                    {param: 'onSelectRow', desc: '选中行的回调', type: 'function', default: ''}
                ]}></Table>
            </div>
        );
    }
}

export default Page;
