import React, {PureComponent} from 'react';
import Label from 'r-cmui/components/Label';
import Row from 'r-cmui/components/Row';
import Col from 'r-cmui/components/Col';
import Table from 'r-cmui/components/Table';

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
                <h1 className="page-h1">DateTime 时间选择器</h1>
                <blockquote className="page-tip">
                    选择日期和时间的控件。
                </blockquote>

                <h1 className="page-h1">代码演示</h1>

                <Row>
                    <Col grid={0.5} className="code-col">
                        <Label className="code-box">
                            <Demo1></Demo1>
                        </Label>
                        <Label className="code-box">
                            <Demo3></Demo3>
                        </Label>
                        <Label className="code-box">
                            <Demo5></Demo5>
                        </Label>
                        <Label className="code-box">
                            <Demo7></Demo7>
                        </Label>
                    </Col>
                    <Col grid={0.5} className="code-col">
                        <Label className="code-box">
                            <Demo2></Demo2>
                        </Label>
                        <Label className="code-box">
                            <Demo4></Demo4>
                        </Label>
                        <Label className="code-box">
                            <Demo6></Demo6>
                        </Label>
                    </Col>
                </Row>

                <h2 className="page-h2">API</h2>
                <h3 className="page-h3">DateTime</h3>

                <Table columns={[
                    {name: 'param', text: '参数'},
                    {name: 'desc', text: '说明'},
                    {name: 'type', text: '类型'},
                    {name: 'default', text: '默认值'}
                ]} bordered={true} data={[
                    {param: 'className', desc: '自定义class', type: 'string', default: ''},
                    {param: 'style', desc: '自定义样式', type: 'object', default: ''},
                    {param: 'disabled', desc: '禁用', type: 'boolean', default: 'false'},
                    {param: 'value', desc: '默认时间', type: 'string/moment', default: ''},
                    {param: 'format', desc: '格式化 moment的格式化规则', type: 'string', default: 'YYYY-MM-DD HH:mm:ss'},
                    {param: 'startDate', desc: '限定开始时间', type: 'string', default: ''},
                    {param: 'endDate', desc: '限定结束时间', type: 'string', default: ''},
                    {param: 'onSelectDate', desc: '选中日期时触发', type: 'function', default: ''},
                    {param: 'onChange', desc: '选中日期时触发', type: 'function', default: ''},
                    {param: 'placeholder', desc: '未选择时的placeholder', type: 'string', default: ''},
                    {param: 'maxRange', desc: '最多可选天数', type: 'number', default: '0'},
                    {param: 'hourStep', desc: '小时步长', type: 'number', default: '1'},
                    {param: 'minute', desc: '分钟步长', type: 'number', default: '1'},
                    {param: 'secondStep', desc: '秒步长', type: 'number', default: '1'},
                    {param: 'theme', desc: '主题 default dark ', type: 'string', default: 'defalt'}
                ]}></Table>

                <h3 className="page-h3">Methods</h3>

                <ul className="code-methods">
                    <li>
                        <i>getValue()</i>
                        <span>获取当前选中的日期</span>
                        <ul>
                            <li>
                                return {`String`} 选中的日期
                            </li>
                        </ul>
                    </li>
                    <li>
                        <i>setValue(value)</i>
                        <span>设置默认显示日期</span>
                        <ul>
                            <li>
                                value {`String`} 日期 格式与当前的view或format一致
                            </li>
                        </ul>
                    </li>

                    <li>
                        <i>hide()</i>
                        <span>隐藏操作</span>
                    </li>

                    <li>
                        <i>show()</i>
                        <span>显示日期面板</span>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Page;
