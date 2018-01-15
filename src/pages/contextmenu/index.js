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
                <h1 className='page-h1'>ContextMenu 右键菜单</h1>
                <blockquote className='page-tip'>
                    右键菜单<br/>
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
                <h3 className='page-h3'>ContextMenu</h3>

                <Table columns={[
                    {name: 'param', text: '参数'},
                    {name: 'desc', text: '说明'},
                    {name: 'type', text: '类型'},
                    {name: 'default', text: '默认值'}
                ]} bordered data={[
                    {param: 'overlay', desc: '菜单对象', type: 'element', default: ''},
                    {param: 'onSelect', desc: '选择菜单的回调', type: 'function', default: ''},
                    {param: 'target', desc: '响应的对象选择器', type: 'string', default: 'body'}
                ]}></Table>
            </div>
        );
    }
}

export default Page;
