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
                <h1 className='page-h1'>Spin 加载中</h1>
                <blockquote className='page-tip'>
                    用于页面和区块的加载中状态。<br/>
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
                <h3 className='page-h3'>Spin.WaterSpin</h3>

                <Table columns={[
                    {name: 'param', text: '参数'},
                    {name: 'desc', text: '说明'},
                    {name: 'type', text: '类型'},
                    {name: 'default', text: '默认值'}
                ]} bordered data={[
                    {param: 'percent', desc: '百分比', type: 'number', default: '0'},
                    {param: 'onFinish', desc: '达到100%时触发', type: 'function', default: ''},
                    {param: 'size', desc: '尺寸', type: 'number', default: '250'}
                ]}></Table>

                <h3 className='page-h3'>Methods</h3>

                <ul className='code-methods'>
                    <li>
                        <i>getPercent()</i>
                        <span>获取百分比</span>
                        <ul>
                            <li>
                                return {'Number'} 当前的百分比
                            </li>
                        </ul>
                    </li>
                </ul>


                <h3 className='page-h3'>Spin.SVGSpin</h3>

                <Table columns={[
                    {name: 'param', text: '参数'},
                    {name: 'desc', text: '说明'},
                    {name: 'type', text: '类型'},
                    {name: 'default', text: '默认值'}
                ]} bordered={true} data={[
                    {param: 'spinning', desc: '是否显示spin', type: 'boolean', default: 'false'}
                ]}></Table>

                <h3 className='page-h3'>Methods</h3>

                <ul className='code-methods'>
                    <li>
                        <i>show()</i>
                        <span>显示Spin</span>
                    </li>
                    <li>
                        <i>hide()</i>
                        <span>隐藏Spin</span>
                    </li>
                </ul>


                <h3 className='page-h3'>Spin.CssSpin</h3>

                <Table columns={[
                    {name: 'param', text: '参数'},
                    {name: 'desc', text: '说明'},
                    {name: 'type', text: '类型'},
                    {name: 'default', text: '默认值'}
                ]} bordered={true} data={[
                    {param: 'spinning', desc: '是否显示spin', type: 'boolean', default: 'false'}
                ]}></Table>

                <h3 className='page-h3'>Methods</h3>

                <ul className='code-methods'>
                    <li>
                        <i>show()</i>
                        <span>显示Spin</span>
                    </li>
                    <li>
                        <i>hide()</i>
                        <span>隐藏Spin</span>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Page;
