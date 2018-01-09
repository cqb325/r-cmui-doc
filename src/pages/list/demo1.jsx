import React from 'react';
import BaseDemo from '../BaseDemo';
import FontIcon from 'r-cmui/components/FontIcon';
import List from 'r-cmui/components/List';
import Code from '../Code';

class Demo extends BaseDemo {
    render () {
        const listData = [
            {id: '1', content: 'Racing car sprays burning fuel into crowd.'},
            {id: '2', content: 'Japanese princess to wed commoner.'},
            {id: '3', content: 'Australian walks 100km after outback crash.'},
            {id: '4', content: 'Man charged over missing wedding girl.'},
            {id: '5', content: 'Los Angeles battles huge wildfires.'}
        ];
        return (
            <div>
                <div className='code-box-demo'>
                    <h4 className='mb-15 mt-10'>default Size</h4>
                    <List head='Header' data={listData} border></List>
                    <h4 className='mb-15 mt-10'>small Size</h4>
                    <List head='Header' data={listData} border size='small'></List>
                    <h4 className='mb-15 mt-10'>large Size</h4>
                    <List head='Header' data={listData} border size='large'></List>
                </div>
                <div className='code-box-desc'>
                    <div className='code-box-title'>基本用法</div>
                    <div>
                        通过设置 size 为 large small 分别把按钮设为大、小尺寸。若不设置 size，则尺寸为中。
                        <FontIcon icon={'chevron-circle-down'} ref='collapse' className='collapse' onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className='code-box-src' ref='boxSrc'>
                    <Code className='language-jsx'>
                        {`
import List from 'r-cmui/components/List';

class Demo extends BaseDemo {
    render () {
        const listData = [
            {id: '1', content: 'Racing car sprays burning fuel into crowd.'},
            {id: '2', content: 'Japanese princess to wed commoner.'},
            {id: '3', content: 'Australian walks 100km after outback crash.'},
            {id: '4', content: 'Man charged over missing wedding girl.'},
            {id: '5', content: 'Los Angeles battles huge wildfires.'}
        ];

        return <div className='code-box-demo'>
            <h4 className='mb-15 mt-10'>default Size</h4>
            <List head='Header' data={listData} border></List>
            <h4 className='mb-15 mt-10'>small Size</h4>
            <List head='Header' data={listData} border size='small'></List>
            <h4 className='mb-15 mt-10'>large Size</h4>
            <List head='Header' data={listData} border size='large'></List>
        </div>;
    }
}
`}
                    </Code>
                </div>
            </div>
        );
    }
}

export default Demo;
