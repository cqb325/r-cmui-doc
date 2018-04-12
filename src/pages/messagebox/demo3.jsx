import React from 'react';
import BaseDemo from '../BaseDemo';
import FontIcon from 'r-cmui/components/FontIcon';
import MessageBox from 'r-cmui/components/MessageBox';
import Button from 'r-cmui/components/Button';
import Code from '../Code';

class Demo extends BaseDemo {
    show () {
        this.msg.show('Message Content');
    }

    confirm (ret) {
        if (ret) {
            this.doAsync();
            return false;
        }
        return true;
    }

    doAsync = async () => {
        this.msg.showLoading(true);
        await new Promise(((resolve) => {
            setTimeout(() => {
                resolve(true);
            }, 1000);
        }));
        this.msg.showLoading(false);
        this.msg.hide();
    }

    render () {
        return (
            <div>
                <div className='code-box-demo'>
                    <MessageBox title='提示' type='confirm' ref={(f) => this.msg = f} confirm={this.confirm.bind(this)}></MessageBox>
                    <Button onClick={this.show.bind(this)}>Show</Button>
                </div>
                <div className='code-box-desc'>
                    <div className='code-box-title'>loading</div>
                    <div>
                        显示loading。
                        <FontIcon icon={'chevron-circle-down'} ref='collapse' className='collapse' onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className='code-box-src' ref='boxSrc'>
                    <Code className='language-jsx'>
                        {`
import MessageBox from 'r-cmui/components/MessageBox';
import Button from 'r-cmui/components/Button';

React.createClass({
    show () {
        this.msg.show('Message Content');
    }

    confirm (ret) {
        if (ret) {
            this.doAsync();
            return false;
        }
        return true;
    }

    doAsync = async () => {
        this.msg.showLoading(true);
        await new Promise(((resolve) => {
            setTimeout(() => {
                resolve(true);
            }, 1000);
        }));
        this.msg.showLoading(false);
        this.msg.hide();
    }

    render(){
        return <div>
            <MessageBox title='提示' type='confirm' ref={(f) => this.msg = f} confirm={this.confirm.bind(this)}></MessageBox>
            <Button onClick={this.show.bind(this)}>Show</Button>
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
