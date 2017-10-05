import React, {PureComponent} from 'react';
import Label from 'r-cmui/components/Label';
import Table from 'r-cmui/components/Table';

import Demo1 from './demo1';
import Demo2 from './demo2';
import Demo3 from './demo3';
import Demo4 from './demo4';
import Demo5 from './demo5';


class Page extends PureComponent {

    render(){
        return (
            <div className="main-container">
                <h1 className="page-h1">Switch 开关</h1>
                <blockquote className="page-tip">
                    开关选择器。<br/>
                    需要表示开关状态/两种状态之间的切换时使用。
                </blockquote>

                <h1 className="page-h1">代码演示</h1>

                <Label grid={0.5} className="code-col">
                    <Label className="code-box">
                        <Demo1 />
                    </Label>
                    <Label className="code-box">
                        <Demo3 />
                    </Label>
                    <Label className="code-box">
                        <Demo5 />
                    </Label>
                </Label>

                <Label grid={0.5} className="code-col">
                    <Label className="code-box">
                        <Demo2 />
                    </Label>
                    <Label className="code-box">
                        <Demo4 />
                    </Label>
                </Label>

                <h2 className="page-h2">API</h2>
                <h3 className="page-h3">Switch</h3>

                <Table columns={[
                    {name: 'param', text: '参数'},
                    {name: 'desc', text: '说明'},
                    {name: 'type', text: '类型'},
                    {name: 'default', text: '默认值'}
                ]} bordered={true} data={[
                    {param: 'className', desc: '自定义class', type: 'string', default: ''},
                    {param: 'style', desc: '自定义样式', type: 'object', default: ''},
                    {param: 'checked', desc: '是否选中', type: 'boolean', default: 'false'},
                    {param: 'disabled', desc: '是否禁用', type: 'boolean', default: 'false'},
                    {param: 'onChange', desc: '选中状态变化时触发', type: 'function', default: ''},
                    {param: 'size', desc: 'switch的尺寸 small', type: 'string', default: ''},
                    {param: 'checkedText', desc: '选中时的提示字符串', type: 'string', default: ''},
                    {param: 'unCheckedText', desc: '未选中时的提示字符串', type: 'string', default: ''},
                    {param: 'name', desc: '作为form表单元素的name', type: 'string', default: ''}
                ]}></Table>

                <h3 className="page-h3">Methods</h3>

                <ul className="code-methods">
                    <li>
                        <i>toggleSwitch()</i>
                        <span>改变Switch的状态</span>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Page;
