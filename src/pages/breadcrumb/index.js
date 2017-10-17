import React, {PureComponent} from 'react';
import Label from 'r-cmui/components/Label';
import Row from 'r-cmui/components/Row';
import Col from 'r-cmui/components/Col';
import Table from 'r-cmui/components/Table';

import Demo1 from './demo1';
import Demo2 from './demo2';
import Demo3 from './demo3';

class Page extends PureComponent {
    render () {
        return (
            <div className='main-container'>
                <h1 className='page-h1'>Breadcrumb 面包屑</h1>
                <blockquote className='page-tip'>
                    显示当前页面在系统层级结构中的位置，并能向上返回。
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
                    </Col>
                </Row>

                <h2 className='page-h2'>API</h2>
                <h3 className='page-h3'>Breadcrumb</h3>

                <Table columns={[
                    {name: 'param', text: '参数'},
                    {name: 'desc', text: '说明'},
                    {name: 'type', text: '类型'},
                    {name: 'default', text: '默认值'}
                ]} bordered={true} data={[
                    {param: 'className', desc: '自定义class', type: 'string', default: ''},
                    {param: 'style', desc: '自定义样式', type: 'object', default: ''}
                ]}></Table>

                <h3 className='page-h3'>Breadcrumb.Item</h3>

                <Table columns={[
                    {name: 'param', text: '参数'},
                    {name: 'desc', text: '说明'},
                    {name: 'type', text: '类型'},
                    {name: 'default', text: '默认值'}
                ]} bordered={true} data={[
                    {param: 'className', desc: '自定义class', type: 'string', default: ''},
                    {param: 'style', desc: '自定义样式', type: 'object', default: ''},
                    {param: 'link', desc: '链接地址', type: 'string', default: ''}
                ]}></Table>
            </div>
        );
    }
}

export default Page;
