import React, {PureComponent} from 'react';
import Label from 'r-cmui/components/Label';
import Table from 'r-cmui/components/Table';
import Row from 'r-cmui/components/Row';
import Col from 'r-cmui/components/Col';

import Demo1 from './demo1';
import Demo2 from './demo2';
import Demo3 from './demo3';
import Demo4 from './demo4';

class Page extends PureComponent {
    render () {
        return (
            <div className='main-container'>
                <h1 className='page-h1'>Dropdown 下拉</h1>
                <blockquote className='page-tip'>
                    下拉内容。
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
                <h3 className='page-h3'>Dropdown</h3>

                <Table columns={[
                    {name: 'param', text: '参数'},
                    {name: 'desc', text: '说明'},
                    {name: 'type', text: '类型'},
                    {name: 'default', text: '默认值'}
                ]} bordered={true} data={[
                    {param: 'action', desc: '触发类型click、hover', type: 'string', default: 'hover'},
                    {param: 'onVisibleChange', desc: '显示变化事件', type: 'function', default: ''},
                    {param: 'className', desc: '自定义class', type: 'string', default: ''},
                    {param: 'style', desc: '自定义样式', type: 'object', default: ''},
                    {param: 'overlay', desc: '下拉内容', type: 'ReactElement', default: ''},
                    {param: 'align', desc: '显示的位置', type: 'string', default: 'bottomLeft'}
                ]}></Table>

                <h3 className='page-h3'>Methods</h3>
            </div>
        );
    }
}

export default Page;
