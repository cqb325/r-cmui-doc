import React from 'react';
import BaseDemo from '../BaseDemo';
import FontIcon from 'r-cmui/components/FontIcon';
import Button from 'r-cmui/components/Button';
import Avatar from 'r-cmui/components/Avatar';
import Code from '../Code';

class Demo extends BaseDemo {
    state = {
        text: 'M'
    }

    texts = ['M', 'cmui', 'Hello', 'Widget'];
    index = 0;

    changeContent = () => {
        this.index = (this.index + 1) % this.texts.length;
        this.setState({
            text: this.texts[this.index]
        });
    }

    render () {
        return (
            <div>
                <div className='code-box-demo'>
                    <Avatar className='mr-5' key={this.state.text} style={{backgroundColor: 'rgb(114, 101, 230)'}}>{this.state.text}</Avatar>
                    <Button onClick={this.changeContent}>change</Button>
                </div>
                <div className='code-box-desc'>
                    <div className='code-box-title'>字体随内容变化</div>
                    <div>
                        字体随内容变化
                        <FontIcon icon={'chevron-circle-down'} ref='collapse' className='collapse' onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className='code-box-src' ref='boxSrc'>
                    <Code className='language-jsx'>
                        {`
import Button from 'r-cmui/components/Button';
import Avatar from 'r-cmui/components/Avatar';

class Demo extends BaseDemo {
    state = {
        text: 'M'
    }

    texts = ['M', 'cmui', 'Hello', 'Widget'];
    index = 0;

    changeContent = () => {
        this.index = (this.index + 1) % this.texts.length;
        this.setState({
            text: this.texts[this.index]
        });
    }

    render () {
        return <div className='code-box-demo'>
            <Avatar className='mr-5' key={this.state.text} style={{backgroundColor: 'rgb(114, 101, 230)'}}>{this.state.text}</Avatar>
            <Button onClick={this.changeContent}>change</Button>
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
