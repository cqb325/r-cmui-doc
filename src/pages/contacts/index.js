import React, {PureComponent} from 'react';
import Label from 'r-cmui/components/Label';
import Table from 'r-cmui/components/Table';
import Row from 'r-cmui/components/Row';
import Col from 'r-cmui/components/Col';

import Demo1 from './demo1';
import Demo2 from './demo2';


class Page extends PureComponent {
    render () {
        return (
            <div className='main-container'>
                <h1 className='page-h1'>Contacts 联系人</h1>
                <blockquote className='page-tip'>
                联系人<br/>
                </blockquote>

                <h1 className='page-h1'>代码演示</h1>

                <Row>
                    <Col grid={0.5} className='code-col'>
                        <Label className='code-box'>
                            <Demo1></Demo1>
                        </Label>
                        {/* <Label className='code-box'>
                            <Demo3></Demo3>
                        </Label> */}
                    </Col>
                    <Col grid={0.5} className='code-col'>
                        <Label className='code-box'>
                            <Demo2></Demo2>
                        </Label>
                        {/* <Label className='code-box'>
                            <Demo4/>
                        </Label> */}
                    </Col>
                </Row>

                <h2 className='page-h2'>API</h2>
                <h3 className='page-h3'>Contacts</h3>

                <Table columns={[
                    {name: 'param', text: '参数'},
                    {name: 'desc', text: '说明'},
                    {name: 'type', text: '类型'},
                    {name: 'default', text: '默认值'}
                ]} bordered={true} data={[
                    {param: 'className', desc: '自定义class', type: 'string', default: ''},
                    {param: 'style', desc: '自定义样式', type: 'object', default: ''},
                    {param: 'data', desc: '数据', type: 'object', default: ''},
                    {param: 'selectable', desc: '是否可选', type: 'bool', default: ''}
                ]}></Table>

                <h3 className='page-h3'>Methods</h3>

                <ul className='code-methods'>
                    <li>
                        <i>setData(data)</i>
                        <span>设置数据</span>
                        <ul>
                            <li>
                                data {'Map'} 组件数据{'{\'A\': [\'xxx\',\'xxx\']}'}
                            </li>
                        </ul>
                    </li>
                    <li>
                        <i>addItem(char, item)</i>
                        <span>添加选项</span>
                        <ul>
                            <li>
                                char {'string'} A、B、C、D...首字母
                            </li>
                            <li>
                                item {'object'} 选项数据
                            </li>
                        </ul>
                    </li>
                    <li>
                        <i>removeItem(char, item)</i>
                        <span>删除选项</span>
                        <ul>
                            <li>
                                char {'string'} A、B、C、D...首字母
                            </li>
                            <li>
                                item {'object'} 选项数据
                            </li>
                        </ul>
                    </li>
                    <li>
                        <i>updateItem(char, oldItem, newItem)</i>
                        <span>更新选项</span>
                        <ul>
                            <li>
                                char {'string'} A、B、C、D...首字母
                            </li>
                            <li>
                                oldItem {'object'} 旧选项数据
                            </li>
                            <li>
                                newItem {'object'} 新选项数据
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Page;
