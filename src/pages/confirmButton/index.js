import React, {PureComponent} from 'react';
import Label from 'r-cmui/components/Label';
import Table from 'r-cmui/components/Table';

import Demo1 from './demo1';

class Page extends PureComponent {
    displayName = 'Page';
    render () {
        return (
            <div className='main-container'>
                <h1 className='page-h1'>ConfirmButton 确认弹框按钮</h1>
                <blockquote className='page-tip'>
                    确认弹框按钮，很多情况下有如下业务流程，点击按钮弹出确认弹框，点击确认后执行指定的回调函数
                </blockquote>

                <h1 className='page-h1'>代码演示</h1>

                <Label grid={0.5} className='code-col'>
                    <Label className='code-box'>
                        <Demo1></Demo1>
                    </Label>
                </Label>

                <h2 className='page-h2'>API</h2>
                <h3 className='page-h3'>ConfirmButton</h3>

                <Table columns={[
                    {name: 'param', text: '参数'},
                    {name: 'desc', text: '说明'},
                    {name: 'type', text: '类型'},
                    {name: 'default', text: '默认值'}
                ]} bordered={true} data={[
                    {param: 'tip', desc: '提示信息', type: 'string', default: ''},
                    {param: 'data', desc: '携带的数据', type: 'object', default: ''},
                    {param: 'onConfirm', desc: '点击确认按钮回调', type: 'function', default: ''}
                ]}></Table>
            </div>
        );
    }
}

export default Page;
