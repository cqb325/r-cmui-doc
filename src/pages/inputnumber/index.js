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


class Page extends PureComponent{
    render(){
        return (
            <div className="main-container">
                <h1 className="page-h1">InputNumber 数字框</h1>
                <blockquote className="page-tip">
                    数字框。
                </blockquote>

                <h1 className="page-h1">代码演示</h1>

                <Row>
                    <Col grid={0.5}>
                        <Label className="code-col">
                            <Label className="code-box">
                                <Demo1></Demo1>
                            </Label>
                        </Label>

                        <Label className="code-col">
                            <Label className="code-box">
                                <Demo3></Demo3>
                            </Label>
                        </Label>

                        <Label className="code-col">
                            <Label className="code-box">
                                <Demo5></Demo5>
                            </Label>
                        </Label>

                        <Label className="code-col">
                            <Label className="code-box">
                                <Demo7></Demo7>
                            </Label>
                        </Label>
                    </Col>
                    <Col grid={0.5}>
                        <Label className="code-col">
                            <Label className="code-box">
                                <Demo2></Demo2>
                            </Label>
                        </Label>
                        <Label className="code-col">
                            <Label className="code-box">
                                <Demo4></Demo4>
                            </Label>
                        </Label>
                        <Label className="code-col">
                            <Label className="code-box">
                                <Demo6></Demo6>
                            </Label>
                        </Label>
                    </Col>
                </Row>


                <h2 className="page-h2">API</h2>
                <h3 className="page-h3">InputNumber</h3>

                <Table columns={[
                    {name: 'param', text: '参数'},
                    {name: 'desc', text: '说明'},
                    {name: 'type', text: '类型'},
                    {name: 'default', text: '默认值'}
                ]} bordered={true} data={[
                    {param: 'className', desc: '自定义class', type: 'string', default: ''},
                    {param: 'style', desc: '自定义样式', type: 'object', default: ''},
                    {param: 'value', desc: '默认值', type: 'string/number', default: '0'},
                    {param: 'min', desc: '最小值', type: 'string/number', default: ''},
                    {param: 'max', desc: '最大值', type: 'string/number', default: ''},
                    {param: 'step', desc: '步长', type: 'string/number', default: '1'},
                    {param: 'disabled', desc: '禁用', type: 'boolean', default: 'false'},
                    {param: 'onChange', desc: '值变化回调', type: 'function', default: ''},
                    {param: 'formatter', desc: '格式化函数', type: 'function', default: ''},
                    {param: 'parser', desc: '解析函数', type: 'function', default: ''},
                    {param: 'itemClassName', desc: 'input上的class', type: 'string', default: ''},
                    {param: 'size', desc: '大小支持large和small', type: 'string', default: ''},
                    {param: 'name', desc: '作为表单元素的name', type: 'string', default: ''},
                ]}></Table>

                <h3 className="page-h3">Methods</h3>

                <ul className="code-methods">
                    <li>
                        <i>disable()</i>
                        <span>禁用</span>
                    </li>
                    <li>
                        <i>enable()</i>
                        <span>激活</span>
                    </li>
                    <li>
                        <i>setMin(min)</i>
                        <span>设置最小值</span>
                        <ul>
                            <li>
                                min {`Number`} 最小值
                            </li>
                        </ul>
                    </li>
                    <li>
                        <i>setMax(max)</i>
                        <span>设置最大值</span>
                        <ul>
                            <li>
                                max {`Number`} 最大值
                            </li>
                        </ul>
                    </li>
                    <li>
                        <i>setStep(step)</i>
                        <span>重新设置步长</span>
                        <ul>
                            <li>
                                step {`Number`} 步长值
                            </li>
                        </ul>
                    </li>
                    <li>
                        <i>setValue(value)</i>
                        <span>设置值</span>
                        <ul>
                            <li>
                                value {`Number`} 当前值
                            </li>
                        </ul>
                    </li>
                    <li>
                        <i>getFormatedValue()</i>
                        <span>获取格式化值</span>
                        <ul>
                            <li>
                                return {`String`} 当前格式化后的值
                            </li>
                        </ul>
                    </li>
                    <li>
                        <i>getValue()</i>
                        <span>获取值</span>
                        <ul>
                            <li>
                                return {`String`} 当前值
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Page;
