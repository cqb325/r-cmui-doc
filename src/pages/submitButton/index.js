import React, {PureComponent} from 'react';
import Label from 'r-cmui/components/Label';
import Table from 'r-cmui/components/Table';

import Demo1 from './demo1';

class Page extends PureComponent {
    displayName = 'Page';
    render () {
        return (
            <div className='main-container'>
                <h1 className='page-h1'>SubmitButton 提交按钮</h1>
                <blockquote className='page-tip'>
                    提交按钮，处理了点击提交按钮 按钮设置loading， 提交前进行表单验证等回调， 验证完了执行提交回调，提交完数据根据返回结果进行弹框提示
                </blockquote>

                <h1 className='page-h1'>代码演示</h1>

                <Label grid={0.5} className='code-col'>
                    <Label className='code-box'>
                        <Demo1></Demo1>
                    </Label>
                </Label>

                <h2 className='page-h2'>API</h2>
                <h3 className='page-h3'>SubmitButton</h3>

                <Table columns={[
                    {name: 'param', text: '参数'},
                    {name: 'desc', text: '说明'},
                    {name: 'type', text: '类型'},
                    {name: 'default', text: '默认值'}
                ]} bordered={true} data={[
                    {param: 'successTip', desc: '成功提示信息', type: 'string', default: '保存成功'},
                    {param: 'errorTip', desc: '错误提示信息', type: 'string', default: '保存失败'},
                    {param: 'data', desc: '携带的数据', type: 'object', default: ''},
                    {param: 'back', desc: '成功弹框点击确认返回上一个页面', type: 'bool', default: ''},
                    {param: 'isValid', desc: '验证回调', type: 'function', default: ''},
                    {param: 'onSubmit', desc: '提交回调', type: 'function', default: ''},
                    {param: '其他属性同Button', desc: '-', type: '-', default: ''}
                ]}></Table>
            </div>
        );
    }
}

export default Page;
