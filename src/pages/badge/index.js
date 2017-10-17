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


class Page extends PureComponent {
    render () {
        return (
            <div className='main-container'>
                <h1 className='page-h1'>Badge 徽标</h1>
                <blockquote className='page-tip'>
                    图标右上角的圆形徽标数字。
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
                    </Col>
                    <Col grid={0.5} className='code-col'>
                        <Label className='code-box'>
                            <Demo2></Demo2>
                        </Label>
                        <Label className='code-box'>
                            <Demo4></Demo4>
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
                    {param: 'count', desc: '数量', type: 'number/string', default: ''},
                    {param: 'status', desc: '状态', type: 'string', default: ''},
                    {param: 'dot', desc: '是否显示红点', type: 'string/bool', default: ''}
                ]}></Table>

                <h3 className='page-h3'>Methods</h3>

                <ul className='code-methods'>
                    <li>
                        <i>addCount(num)</i>
                        <span>添加num数量</span>
                        <ul>
                            <li>
                                num {'Number'} 要添加的数量
                            </li>
                        </ul>
                    </li>

                </ul>
            </div>
        );
    }
}

export default Page;
