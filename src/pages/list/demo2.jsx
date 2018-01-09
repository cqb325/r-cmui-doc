import React from 'react';
import BaseDemo from '../BaseDemo';
import FontIcon from 'r-cmui/components/FontIcon';
import List from 'r-cmui/components/List';
import Avatar from 'r-cmui/components/Avatar';
import Code from '../Code';

class Demo extends BaseDemo {
    render () {
        const listData = [
            {id: '1', avatar: <Avatar icon='user'/>, content: <div>
                <h4>title 1</h4>
                <p>Australian walks 100km after outback crash.</p>
            </div>},
            {id: '2', avatar: <Avatar icon='user'/>, content: <div>
                <h4>title 1</h4>
                <p>Australian walks 100km after outback crash.</p>
            </div>},
            {id: '3', avatar: <Avatar icon='user'/>, content: <div>
                <h4>title 1</h4>
                <p>Australian walks 100km after outback crash.</p>
            </div>},
            {id: '4', avatar: <Avatar icon='user'/>, content: <div>
                <h4>title 1</h4>
                <p>Australian walks 100km after outback crash.</p>
            </div>},
            {id: '5', avatar: <Avatar icon='user'/>, content: <div>
                <h4>title 1</h4>
                <p>Australian walks 100km after outback crash.</p>
            </div>}
        ];
        return (
            <div>
                <div className='code-box-demo'>
                    <List head='Header' data={listData} border></List>
                </div>
                <div className='code-box-desc'>
                    <div className='code-box-title'>基本用法</div>
                    <div>
                        data数据中添加avatar属性可以渲染头像。content内容可以是jsx
                        <FontIcon icon={'chevron-circle-down'} ref='collapse' className='collapse' onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className='code-box-src' ref='boxSrc'>
                    <Code className='language-jsx'>
                        {`
import List from 'r-cmui/components/List';
import Avatar from 'r-cmui/components/Avatar';

class Demo extends BaseDemo {
    render () {
        const listData = [
            {id: '1', avatar: <Avatar icon='user'/>, content: <div>
                <h4>title 1</h4>
                <p>Australian walks 100km after outback crash.</p>
            </div>},
            {id: '2', avatar: <Avatar icon='user'/>, content: <div>
                <h4>title 1</h4>
                <p>Australian walks 100km after outback crash.</p>
            </div>},
            {id: '3', avatar: <Avatar icon='user'/>, content: <div>
                <h4>title 1</h4>
                <p>Australian walks 100km after outback crash.</p>
            </div>},
            {id: '4', avatar: <Avatar icon='user'/>, content: <div>
                <h4>title 1</h4>
                <p>Australian walks 100km after outback crash.</p>
            </div>},
            {id: '5', avatar: <Avatar icon='user'/>, content: <div>
                <h4>title 1</h4>
                <p>Australian walks 100km after outback crash.</p>
            </div>}
        ];

        return <div className='code-box-demo'>
            <List head='Header' data={listData} border></List>
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
