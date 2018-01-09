import React, {PureComponent} from 'react';
import Label from 'r-cmui/components/Label';
import Table from 'r-cmui/components/Table';

import Demo1 from './demo1';
import Demo2 from './demo2';
import Demo3 from './demo3';

class Page extends PureComponent {
    displayName = 'Page';
    
    render () {
        return (
            <div className='main-container'>
                <h1 className='page-h1'>Tag 标签</h1>
                <blockquote className='page-tip'>
                    进行标记和分类的小标签<br/>
                </blockquote>

                <h1 className='page-h1'>代码演示</h1>

                <Label grid={1} className='code-col'>
                    <Label className='code-box'>
                        <Demo1></Demo1>
                    </Label>
                </Label>

                <Label grid={1} className='code-col'>
                    <Label className='code-box'>
                        <Demo2></Demo2>
                    </Label>
                </Label>

                <Label grid={1} className='code-col'>
                    <Label className='code-box'>
                        <Demo3></Demo3>
                    </Label>
                </Label>

                <h2 className='page-h2'>API</h2>
                <h3 className='page-h3'>Tag</h3>

                <Table columns={[
                    {name: 'param', text: '参数'},
                    {name: 'desc', text: '说明'},
                    {name: 'type', text: '类型'},
                    {name: 'default', text: '默认值'}
                ]} bordered data={[
                    {param: 'className', desc: '自定义class', type: 'string', default: ''},
                    {param: 'style', desc: '自定义样式', type: 'object', default: ''},
                    {param: 'closable', desc: '是否显示关闭按钮', type: 'bool', default: ''},
                    {param: 'badge', desc: '存在值则显示徽标', type: 'number', default: 'undefined'},
                    {param: 'onBeforeClose', desc: '关闭之前的回调， 返回true则可以关闭', type: 'function', default: ''},
                    {param: 'onClose', desc: '关闭标签回调', type: 'function', default: ''},
                    {param: 'theme', desc: '主题样式', type: 'string', default: ''}
                ]}></Table>
            </div>
        );
    }
}

export default Page;
