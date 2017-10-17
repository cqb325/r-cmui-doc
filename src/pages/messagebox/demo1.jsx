import React from 'react';
import BaseDemo from '../BaseDemo';
import FontIcon from 'r-cmui/components/FontIcon';
import MessageBox from 'r-cmui/components/MessageBox';
import Button from 'r-cmui/components/Button';
import Code from '../Code';

class Demo extends BaseDemo {
    show () {
        this.refs.msg.show('Message Content');
    }

    render () {
        return (
            <div>
                <div className='code-box-demo'>
                    <MessageBox title='提示' ref='msg' confirmTheme='primary'></MessageBox>
                    <Button onClick={this.show.bind(this)}>Show</Button>
                </div>
                <div className='code-box-desc'>
                    <div className='code-box-title'>简单用法</div>
                    <div>
                        简单用法。
                        <FontIcon icon={'chevron-circle-down'} ref='collapse' className='collapse' onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className='code-box-src' ref='boxSrc'>
                    <Code className='language-jsx'>
                        {`
import MessageBox from 'r-cmui/components/MessageBox';
import Button from 'r-cmui/components/Button';

React.createClass({
    show(){
        this.refs.msg.show("Message Content");
    }

    render(){
        return <div>
            <MessageBox title="提示" ref="msg" confirmTheme="primary"></MessageBox>
            <Button onClick={show}>Show</Button>
        </div>
    }
});
`}
                    </Code>
                </div>
            </div>
        );
    }
}

export default Demo;
