import React, {PureComponent} from 'react';
import Label from 'r-cmui/components/Label';
import Table from 'r-cmui/components/Table';

import Demo1 from './demo1';
import Demo2 from './demo2';
import Demo3 from './demo3';
import Demo4 from './demo4';
// import Demo5 from './demo5';

class Page extends PureComponent {
    displayName='Page';

    render () {
        return (
            <div className='main-container'>
                <h1 className='page-h1'>滚动的日期时间选择</h1>
                <blockquote className='page-tip'>
                日期时间选择。
                </blockquote>

                <h1 className='page-h1'>代码演示</h1>

                <Label grid={0.5} className='code-col'>
                    <Label className='code-box'>
                        <Demo1></Demo1>
                    </Label>
                    <Label className='code-box'>
                        <Demo3></Demo3>
                    </Label>
                    {/* <Label className='code-box'>
                        <Demo5></Demo5>
                    </Label> */}
                </Label>
                <Label grid={0.5} className='code-col'>
                    <Label className='code-box'>
                        <Demo2></Demo2>
                    </Label>
                    <Label className='code-box'>
                        <Demo4></Demo4>
                    </Label>
                </Label>

                <h2 className='page-h2'>API</h2>
                <h3 className='page-h3'>ScrollDateTime</h3>

                <Table columns={[
                    {name: 'param', text: '参数'},
                    {name: 'desc', text: '说明'},
                    {name: 'type', text: '类型'},
                    {name: 'default', text: '默认值'}
                ]} bordered={true} data={[
                    {param: 'value', desc: '默认值', type: 'string', default: ''},
                    {param: 'disabled', desc: '禁用', type: 'boolean', default: 'false'},
                    {param: 'className', desc: '自定义class', type: 'string', default: ''},
                    {param: 'style', desc: '自定义样式', type: 'object', default: ''},
                    {param: 'name', desc: 'name属性', type: 'string', default: ''},
                    {param: 'placeholder', desc: '占位文案', type: 'string', default: ''},
                    {param: 'size', desc: '可选空和small', type: 'string', default: ''},
                    {param: 'view', desc: '当前组件的视图可选 ymdhms, ymdhm, ymdh, ymd, ym, y, hms, hm, h', type: 'string', default: 'ymdhms'},
                    {param: 'format', desc: '显示日期的格式化', type: 'string', default: ''},
                    {param: 'startDate', desc: '起始日期', type: 'string', default: ''},
                    {param: 'endDate', desc: '截止日期', type: 'string', default: ''},
                    {param: 'onChange', desc: '值变化后触发', type: 'function', default: ''}
                ]}></Table>

                <h3 className='page-h3'>Methods</h3>

                <ul className='code-methods'>
                    <li>
                        <i>getValue()</i>
                        <span>获取当前选中的值</span>
                        <ul>
                            <li>
                                return {'String'} 选中的值
                            </li>
                        </ul>
                    </li>
                    <li>
                        <i>setValue(value)</i>
                        <span>设置选中的值</span>
                        <ul>
                            <li>
                                value {'String'} 要设置的值
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Page;
