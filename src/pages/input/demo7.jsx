import React from 'react';
import BaseDemo from '../BaseDemo';
import FontIcon from 'r-cmui/components/FontIcon';
import Input from 'r-cmui/components/Input';
import Button from 'r-cmui/components/Button';
import Code from '../Code';

class Demo extends BaseDemo {
    state = {
        codeText: '获取验证码'
    }

    time = 60;
    timer = null;
    couting = false;

    count = () => {
        if (this.couting) {
            return false;
        }
        this.couting = true;
        this.setState({codeText: this.time === 0 ? '获取验证码' : `${this.time}s`});
        this.timer = window.setInterval(() => {
            this.time = this.time - 1;
            this.setState({codeText: this.time === 0 ? '获取验证码' : `${this.time}s`});
            if (this.time === 0) {
                this.couting = false;
                window.clearInterval(this.timer);
                this.time = 60;
            }
        }, 1000);
    }

    render () {
        return (
            <div>
                <div className='code-box-demo'>
                    <div style={{width: 300}}>
                        <Input size='large' maxLength={6} placeholder='输入验证码'
                            suffix={<Button style={{width: 100}} theme='primary' onClick={this.count}>{this.state.codeText}</Button>}/>
                        <div className='mt-10'>
                            <Input size='large' suffix={<Button theme='primary' icon='search' style={{padding: '10px 15px'}}></Button>}/>
                        </div>
                    </div>
                </div>
                <div className='code-box-desc'>
                    <div className='code-box-title'>suffix</div>
                    <div>
                        设置suffix样例
                        <FontIcon icon={'chevron-circle-down'} ref='collapse' className='collapse' onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className='code-box-src' ref='boxSrc'>
                    <Code>
                        {`
import Input from 'r-cmui/components/Input';

state = {
    codeText: '获取验证码'
}

time = 60;
timer = null;
couting = false;

count = () => {
    if (this.couting) {
        return false;
    }
    this.couting = true;
    this.setState({codeText: this.time === 0 ? '获取验证码' : \`${this.time}s\`});
    this.timer = window.setInterval(() => {
        this.time = this.time - 1;
        this.setState({codeText: this.time === 0 ? '获取验证码' : \`${this.time}s\`});
        if (this.time === 0) {
            this.couting = false;
            window.clearInterval(this.timer);
            this.time = 60;
        }
    }, 1000);
}

ReactDOM.render(
<div>
    <div style={{width: 300}}>
        <Input size='large' maxLength={6} placeholder='输入验证码'
            suffix={<Button style={{width: 100}} theme='primary' onClick={this.count}>{this.state.codeText}</Button>}/>
        <Input size='large' suffix={<Button theme='primary' icon='search' style={{padding: '10px 15px'}}></Button>}/>
    </div>
</div>, mountNode);
`}
                    </Code>
                </div>
            </div>
        );
    }
}

export default Demo;
