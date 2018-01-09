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
                <h1 className='page-h1'>Avatar 头像</h1>
                <blockquote className='page-tip'>
                    用来代表用户或事物，支持图片、图标或字符展示<br/>
                </blockquote>

                <h1 className='page-h1'>代码演示</h1>

                <Label grid={0.5} className='code-col'>
                    <Label className='code-box'>
                        <Demo1></Demo1>
                    </Label>
                    <Label className='code-box'>
                        <Demo3></Demo3>
                    </Label>
                </Label>

                <Label grid={0.5} className='code-col'>
                    <Label className='code-box'>
                        <Demo2></Demo2>
                    </Label>
                </Label>

                <h2 className='page-h2'>API</h2>
                <h3 className='page-h3'>Avatar</h3>

                <Table columns={[
                    {name: 'param', text: '参数'},
                    {name: 'desc', text: '说明'},
                    {name: 'type', text: '类型'},
                    {name: 'default', text: '默认值'}
                ]} bordered data={[
                    {param: 'className', desc: '自定义class', type: 'string', default: ''},
                    {param: 'style', desc: '自定义样式', type: 'object', default: ''},
                    {param: 'size', desc: '尺寸', type: 'string', default: ''},
                    {param: 'icon', desc: '图标', type: 'string', default: ''},
                    {param: 'font', desc: '图标的字体', type: 'string', default: ''},
                    {param: 'src', desc: '图片地址', type: 'string', default: ''},
                    {param: 'shape', desc: '图形 square ', type: 'string', default: ''}
                ]}></Table>
            </div>
        );
    }
}

export default Page;
