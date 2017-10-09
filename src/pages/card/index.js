import React, {PureComponent} from 'react';
import Label from 'r-cmui/components/Label';
import Table from 'r-cmui/components/Table';

import Demo1 from './demo1';
import Demo2 from './demo2';
import Demo3 from './demo3';
import Demo4 from './demo4';
import Demo5 from './demo5';
import Demo6 from './demo6';


class Page extends PureComponent{
    render(){
        return (
            <div className="main-container">
                <h1 className="page-h1">Card 卡片</h1>
                <blockquote className="page-tip">
                    通用卡片容器。<br/>
                    最基础的卡片容器，可承载文字、列表、图片、段落，常用于后台概览页面。
                </blockquote>

                <h1 className="page-h1">代码演示</h1>

                <Label className="code-col">
                    <Label className="code-box">
                        {<Demo1 />}
                    </Label>
                </Label>

                <Label className="code-col">
                    <Label className="code-box">
                        {<Demo2 />}
                    </Label>
                </Label>

                <Label className="code-col">
                    <Label className="code-box">
                        {<Demo3 />}
                    </Label>
                </Label>

                <Label className="code-col">
                    <Label className="code-box">
                        {<Demo4 />}
                    </Label>
                </Label>

                <Label className="code-col">
                    <Label className="code-box">
                        {<Demo5 />}
                    </Label>
                </Label>

                <Label className="code-col">
                    <Label className="code-box">
                        {<Demo6 />}
                    </Label>
                </Label>

                <h2 className="page-h2">API</h2>
                <h3 className="page-h3">Card</h3>

                <Table columns={[
                    {name: 'param', text: '参数'},
                    {name: 'desc', text: '说明'},
                    {name: 'type', text: '类型'},
                    {name: 'default', text: '默认值'}
                ]} bordered data={[
                    {param: 'className', desc: '自定义class', type: 'string', default: ''},
                    {param: 'style', desc: '自定义样式', type: 'object', default: ''},
                    {param: 'title', desc: '标题', type: 'string', default: ''},
                    {param: 'tools', desc: '按钮', type: 'string/ReactElement', default: ''},
                    {param: 'border', desc: '是否存在边框', type: 'boolean', default: 'true'},
                    {param: 'loadding', desc: '内容占位等待加载', type: 'boolean', default: 'false'},
                    {param: 'bodyStyle', desc: '内容区域的样式', type: 'object', default: ''}
                ]}></Table>

                <h3 className="page-h3">Methods</h3>

                <ul className="code-methods">
                    <li>
                        <i>setTitle(title)</i>
                        <span>设置Card的标题</span>
                        <ul>
                            <li>
                                title {`String`} 标题
                            </li>
                        </ul>
                    </li>
                    <li>
                        <i>setContent(content)</i>
                        <span>设置Card的内容</span>
                        <ul>
                            <li>
                                content {`String/ReactElement`} 内容文字或React对象
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Page;
