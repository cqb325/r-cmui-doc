import React, {PureComponent} from 'react';
import Label from 'r-cmui/components/Label';
import Table from 'r-cmui/components/Table';
import Row from 'r-cmui/components/Row';
import Col from 'r-cmui/components/Col';

import Demo1 from './demo1';
import Demo2 from './demo2';
import Demo3 from './demo3';
import Demo4 from './demo4';
import Demo5 from './demo5';
import Demo6 from './demo6';
import Demo7 from './demo7';

class Page extends PureComponent {
    displayName = 'Page';
    render () {
        return (
            <div className='main-container'>
                <h1 className='page-h1'>Input 输入框</h1>
                <blockquote className='page-tip'>
                    输入框。
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
                            <Demo5/>
                        </Label>
                        <Label className='code-box'>
                            <Demo7/>
                        </Label>
                    </Col>
                    <Col grid={0.5} className='code-col'>
                        <Label className='code-box'>
                            <Demo2></Demo2>
                        </Label>
                        <Label className='code-box'>
                            <Demo4/>
                        </Label>
                        <Label className='code-box'>
                            <Demo6/>
                        </Label>
                    </Col>
                </Row>

                <h2 className='page-h2'>API</h2>
                <h3 className='page-h3'>Input</h3>

                <Table columns={[
                    {name: 'param', text: '参数'},
                    {name: 'desc', text: '说明'},
                    {name: 'type', text: '类型'},
                    {name: 'default', text: '默认值'}
                ]} bordered={true} data={[
                    {param: 'className', desc: '自定义class', type: 'string', default: ''},
                    {param: 'style', desc: '自定义样式', type: 'object', default: ''},
                    {param: 'value', desc: '默认值', type: 'string', default: ''},
                    {param: 'type', desc: 'input的类型 外加integer和number', type: 'string', default: 'text'},
                    {param: 'trigger', desc: 'change触发的事件', type: 'string', default: 'blur'},
                    {param: 'onChange', desc: '值变化触发 时机同trigger', type: 'function', default: ''},
                    {param: 'grid', desc: '定义Input的长度如：grid={1/4}', type: 'number/object', default: ''},
                    {param: 'size', desc: '定义Input的尺可选large和small', type: 'string', default: ''},
                    {param: 'addonBefore', desc: '前置信息', type: 'any', default: ''},
                    {param: 'addonAfter', desc: '后置信息', type: 'any', default: ''},
                    {param: 'prefix', desc: '前置信息', type: 'any', default: ''},
                    {param: 'suffix', desc: '后置信息', type: 'any', default: ''}
                ]}></Table>
                <div className='mt-5'>其他属性同html的input标签</div>

                <h3 className='page-h3'>Methods</h3>

                <ul className='code-methods'>
                    <li>
                        <i>getValue()</i>
                        <span>当前的值</span>
                        <ul>
                            <li>
                                return {'String'} Input的值
                            </li>
                        </ul>
                    </li>
                    <li>
                        <i>setValue(value)</i>
                        <span>设置当前的值</span>
                        <ul>
                            <li>
                                value {'String'} Input的值
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Page;
