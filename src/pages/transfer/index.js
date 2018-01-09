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
                <h1 className='page-h1'>Transfer 传送组件</h1>
                <blockquote className='page-tip'>
                    双栏穿梭选择框<br/>
                    用直观的方式在两栏中移动元素，完成选择行为。
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
                <h3 className='page-h3'>Transfer</h3>

                <Table columns={[
                    {name: 'param', text: '参数'},
                    {name: 'desc', text: '说明'},
                    {name: 'type', text: '类型'},
                    {name: 'default', text: '默认值'}
                ]} bordered data={[
                    {param: 'className', desc: '自定义class', type: 'string', default: ''},
                    {param: 'style', desc: '自定义样式', type: 'object', default: ''},
                    {param: 'data', desc: '所有数据', type: 'array', default: ''},
                    {param: 'transdered', desc: '已选中的数据项', type: 'string', default: ''},
                    {param: 'sourceTitle', desc: '源数据框的标题', type: 'string', default: 'source'},
                    {param: 'targetTitle', desc: '目标数据框的标题', type: 'string', default: 'target'},
                    {param: 'onChange', desc: '数据改变回调', type: 'function', default: ''},
                    {param: 'filter', desc: '是否显示过滤框', type: 'bool', default: 'false'}
                ]}></Table>
            </div>
        );
    }
}

export default Page;
