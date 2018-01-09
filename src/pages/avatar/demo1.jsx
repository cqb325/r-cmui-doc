import React from 'react';
import BaseDemo from '../BaseDemo';
import FontIcon from 'r-cmui/components/FontIcon';
import Avatar from 'r-cmui/components/Avatar';
import Code from '../Code';

class Demo extends BaseDemo {
    render () {
        return (
            <div>
                <div className='code-box-demo'>
                    <div>
                        <Avatar icon='user' size='large' className='mr-5'/>
                        <Avatar icon='user' className='mr-5' />
                        <Avatar icon='user' size='small' className='mr-5'/>
                    </div>

                    <div>
                        <Avatar shape='square' icon='user' size='large' className='mr-5'/>
                        <Avatar shape='square' icon='user' className='mr-5' />
                        <Avatar shape='square' icon='user' size='small' className='mr-5'/>
                    </div>
                </div>
                <div className='code-box-desc'>
                    <div className='code-box-title'>基本用法</div>
                    <div>
                        简单用法
                        <FontIcon icon={'chevron-circle-down'} ref='collapse' className='collapse' onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className='code-box-src' ref='boxSrc'>
                    <Code className='language-jsx'>
                        {`
import Avatar from 'r-cmui/components/Avatar';

class Demo extends BaseDemo {
    render () {
        return <div className='code-box-demo'>
            <Avatar icon='user' size='large'/>
            <Avatar icon='user' />
            <Avatar icon='user' size='small'/>
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
