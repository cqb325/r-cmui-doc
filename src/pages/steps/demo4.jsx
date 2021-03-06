import React from 'react';
import BaseDemo from '../BaseDemo';
import FontIcon from 'r-cmui/components/FontIcon';
import Code from '../Code';
import Steps from 'r-cmui/components/Steps';
import Button from 'r-cmui/components/Button';
const {Step} = Steps;

class Demo extends BaseDemo {
    constructor (props) {
        super(props);

        this.state = {
            current: 0
        };

        this.steps = [{
            title: 'First',
            content: 'First-content'
        }, {
            title: 'Second',
            content: 'Second-content'
        }, {
            title: 'Last',
            content: 'Last-content'
        }];

        this.next = this.next.bind(this);
        this.prev = this.prev.bind(this);
    }

    next () {
        let current = this.state.current;
        if (current < this.steps.length - 1) {
            current ++;

            this.setState({
                current
            });
        }
    }

    prev () {
        let current = this.state.current;
        if (current > 0) {
            current --;

            this.setState({
                current
            });
        }
    }

    render () {
        return (
            <div>
                <div className='code-box-demo'>
                    <Steps current={this.state.current}>
                        {this.steps.map((step) => { return <Step key={step.title} title={step.title} />; })}
                    </Steps>
                    <div className='steps-content'>{this.steps[this.state.current].content}</div>

                    <div className='mt-20'>
                        <Button theme='primary' onClick={this.next}>Next</Button>
                        <Button theme='primary' onClick={this.prev} className='ml-15'>Prev</Button>
                    </div>
                </div>
                <div className='code-box-desc'>
                    <div className='code-box-title'>步骤切换</div>
                    <div>
                        通常配合内容及按钮使用，表示一个流程的处理进度。
                        <FontIcon icon={'chevron-circle-down'} ref='collapse' className='collapse' onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className='code-box-src' ref='boxSrc'>
                    <Code className='language-jsx'>
                        {`
import Steps from 'r-cmui/components/Steps';
import Button from 'r-cmui/components/Button';
const {Step} = Steps;

class Demo extends BaseDemo{
    constructor(props){
        super(props);

        this.state = {
            current: 0
        };

        this.steps = [{
            title: 'First',
            content: 'First-content',
        }, {
            title: 'Second',
            content: 'Second-content',
        }, {
            title: 'Last',
            content: 'Last-content',
        }];

        this.next = this.next.bind(this);
        this.prev = this.prev.bind(this);
    }

    next(){
        let current = this.state.current;
        if(current < this.steps.length - 1){
            current ++;

            this.setState({
                current
            });
        }
    }

    prev(){
        let current = this.state.current;
        if(current > 0){
            current --;

            this.setState({
                current
            });
        }
    }

    render(){
        return (
            <div>
                <Steps current={this.state.current}>
                    {this.steps.map((step)=>{ return <Step key={step.title} title={step.title} />; })}
                </Steps>
                <div className="steps-content">{this.steps[this.state.current].content}</div>

                <div className="mt-20">
                    <Button theme="primary" onClick={this.next}>Next</Button>
                    <Button theme="primary" onClick={this.prev} className="ml-15">Prev</Button>
                </div>
            </div>
        );
    }
}
ReactDOM.render(
<Demo/>, mountNode);
`}
                    </Code>
                </div>
            </div>
        );
    }
}

export default Demo;
