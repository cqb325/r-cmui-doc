import React, {PureComponent} from 'react';
import Row from 'r-cmui/components/Row';
import Col from 'r-cmui/components/Col';
import Label from 'r-cmui/components/Label';
import Table from 'r-cmui/components/Table';

import Demo1 from './demo1';
import Demo2 from './demo2';
import Demo3 from './demo3';
import Demo4 from './demo4';
import Demo5 from './demo5';
import Demo6 from './demo6';
import Demo7 from './demo7';

class Page extends PureComponent {
    render () {
        return (
            <div className='main-container'>
                <h1 className='page-h1'>Button 按钮</h1>
                <blockquote className='page-tip'>
                    按钮用于开始一个即时操作。响应用户点击行为，触发相应的业务逻辑。
                </blockquote>

                <h1 className='page-h1'>代码演示</h1>

                <Row>
                    <Col grid={0.5} className='code-col'>
                        <Label className='code-box'>
                            <Demo1></Demo1>
                        </Label>
                        <Label className='code-box'>
                            <Demo3></Demo3>
                        </Label>
                        <Label className='code-box'>
                            <Demo5></Demo5>
                        </Label>
                        <Label className='code-box'>
                            <Demo7 />
                        </Label>
                    </Col>
                    <Col grid={0.5} className='code-col'>
                        <Label className='code-box'>
                            <Demo2></Demo2>
                        </Label>
                        <Label className='code-box'>
                            <Demo4></Demo4>
                        </Label>
                        <Label className='code-box'>
                            <Demo6 />
                        </Label>
                    </Col>
                </Row>

                <h2 className='page-h2'>API</h2>
                <h3 className='page-h3'>Button</h3>

                <Table columns={[
                    {name: 'param', text: '参数'},
                    {name: 'desc', text: '说明'},
                    {name: 'type', text: '类型'},
                    {name: 'default', text: '默认值'}
                ]} bordered={true} data={[
                    {param: 'theme', desc: '主题default primary success warning danger', type: 'string', default: 'default'},
                    {param: 'className', desc: '自定义class', type: 'string', default: ''},
                    {param: 'style', desc: '自定义样式', type: 'object', default: ''},
                    {param: 'disabled', desc: '禁用', type: 'boolean', default: 'false'},
                    {param: 'raised', desc: '升起效果', type: 'bool', default: 'false'},
                    {param: 'flat', desc: '无边框效果', type: 'bool', default: 'false'},
                    {param: 'href', desc: '链接地址', type: 'string', default: ''},
                    {param: 'icon', desc: '按钮的图标', type: 'string', default: ''},
                    {param: 'circle', desc: '圆角', type: 'boolean', default: 'false'},
                    {param: 'iconAlign', desc: '图标位置 left right', type: 'string', default: 'left'},
                    {param: 'size', desc: '按钮尺寸 large small', type: 'string', default: ''},
                    {param: 'target', desc: '跳转的目标通a标签的target', type: 'string', default: ''},
                    {param: 'onClick', desc: '点击后触发', type: 'function', default: ''},
                    {param: 'animation', desc: '是否启用水滴效果', type: 'bool', default: 'true'},
                    {param: 'loadding', desc: '是否启用loadding', type: 'bool', default: 'false'}
                ]}></Table>

                <h3 className='page-h3'>Methods</h3>

                <ul className='code-methods'>
                    <li>
                        <i>disable()</i>
                        <span>禁用</span>
                    </li>
                    <li>
                        <i>enable()</i>
                        <span>激活</span>
                    </li>
                    <li>
                        <i>setActive(active)</i>
                        <span>设置激活状态 在ButtonGroup中使用</span>
                        <ul>
                            <li>
                                active {'Boolean'} true激活 false 失活
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        );
    }
}
export default Page;
