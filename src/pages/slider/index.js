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
                <h1 className='page-h1'>Slick 幻灯片</h1>
                <blockquote className='page-tip'>
                    一组轮播的区域。<br/>
                    用于一组图片或卡片轮播
                </blockquote>

                <h1 className='page-h1'>代码演示</h1>

                <Row>
                    <Col grid={0.5} className='code-col'>
                        <Label className='code-box'>
                            {<Demo1 />}
                        </Label>

                        <Label className='code-box'>
                            {<Demo3 />}
                        </Label>

                        <Label className='code-box'>
                            {<Demo5 />}
                        </Label>
                    </Col>
                    <Col grid={0.5} className='code-col'>
                        <Label className='code-box'>
                            {<Demo2 />}
                        </Label>

                        <Label className='code-box'>
                            {<Demo4 />}
                        </Label>
                    </Col>
                </Row>

                <h2 className='page-h2'>API</h2>
                <h3 className='page-h3'>Slider</h3>

                <Table columns={[
                    {name: 'param', text: '参数'},
                    {name: 'desc', text: '说明'},
                    {name: 'type', text: '类型'},
                    {name: 'default', text: '默认值'}
                ]} bordered={true} data={[
                    {param: 'className', desc: '自定义class', type: 'string', default: ''},
                    {param: 'style', desc: '自定义样式', type: 'object', default: ''},
                    {param: 'value', desc: '当前值, range为true时是数组形式', type: 'number/array', default: '0'},
                    {param: 'min', desc: '最小值', type: 'number', default: '0'},
                    {param: 'max', desc: '最大值', type: 'number', default: '100'},
                    {param: 'step', desc: '步长', type: 'number', default: '1'},
                    {param: 'range', desc: '一个范围', type: 'bool', default: 'false'},
                    {param: 'vertical', desc: '竖向布局', type: 'bool', default: 'false'},
                    {param: 'marks', desc: '标签', type: 'object', default: ''},
                    {param: 'onChange', desc: '数据变化回调', type: 'function', default: ''}
                ]}></Table>

                <h3 className='page-h3'>Methods</h3>

                <ul className='code-methods'>
                    <li>
                        <i>getValue()</i>
                        <span>获取值</span>
                        <ul>
                            <li>
                                return {'Number/Array'} 当前的值
                            </li>
                        </ul>
                    </li>
                    <li>
                        <i>setValue(value)</i>
                        <span>设置当前值</span>
                        <ul>
                            <li>
                                value {'Number/Array'} 要设置的值, range为true时是数组
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Page;
