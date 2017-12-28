import React, {PureComponent} from 'react';
import Label from 'r-cmui/components/Label';
import Table from 'r-cmui/components/Table';

import Demo1 from './demo1';
import Demo2 from './demo2';


class Page extends PureComponent {
    render () {
        return (
            <div className='main-container'>
                <h1 className='page-h1'>Tab 标签页</h1>
                <blockquote className='page-tip'>
                    Tab 标签页<br/>
                </blockquote>

                <h1 className='page-h1'>代码演示</h1>

                <Label grid={1} className='code-col'>
                    <Label className='code-box'>
                        <Demo1 />
                    </Label>
                </Label>

                <Label grid={1} className='code-col'>
                    <Label className='code-box'>
                        <Demo2 />
                    </Label>
                </Label>

                <h2 className='page-h2'>API</h2>
                <h3 className='page-h3'>Tab</h3>

                <Table columns={[
                    {name: 'param', text: '参数'},
                    {name: 'desc', text: '说明'},
                    {name: 'type', text: '类型'},
                    {name: 'default', text: '默认值'}
                ]} bordered={true} data={[
                    {param: 'className', desc: '自定义class', type: 'string', default: ''},
                    {param: 'style', desc: '自定义样式', type: 'object', default: ''},
                    {param: 'hasClose', desc: '是否显示关闭按钮', type: 'boolean', default: 'false'},
                    {param: 'activeKey', desc: '当前选中的tab的key', type: 'string', default: ''},
                    {param: 'onRemove', desc: '删除一个tab的回调', type: 'function', default: ''}
                ]}></Table>

                <h3 className='page-h3'>Methods</h3>

                <ul className='code-methods'>
                    <li>
                        <i>getActiveKey()</i>
                        <span>当前选中的key</span>
                    </li>
                </ul>


                <h3 className='page-h3'>Tab.Item</h3>

                <Table columns={[
                    {name: 'param', text: '参数'},
                    {name: 'desc', text: '说明'},
                    {name: 'type', text: '类型'},
                    {name: 'default', text: '默认值'}
                ]} bordered={true} data={[
                    {param: 'className', desc: '自定义class', type: 'string', default: ''},
                    {param: 'style', desc: '自定义样式', type: 'object', default: ''},
                    {param: 'title', desc: 'tab标题', type: 'string', default: ''},
                    {param: 'key', desc: 'tab的唯一标识', type: 'string', default: ''}
                ]}></Table>
            </div>
        );
    }
}

export default Page;
