import React from 'react';
import BaseDemo from '../BaseDemo';
import FontIcon from 'r-cmui/components/FontIcon';
import Code from '../Code';
import Steps from 'r-cmui/components/Steps';
const {Step} = Steps;


class Demo extends BaseDemo {
    render () {
        return (
            <div>
                <div className='code-box-demo'>
                    <Steps current={1} layout='vertical'>
                        <Step title='Finished' description='This is a description.' />
                        <Step title='In Progress' description='This is a description.' />
                        <Step title='Waiting' description='This is a description.' />
                    </Steps>
                </div>
                <div className='code-box-desc'>
                    <div className='code-box-title'>竖直形式的步骤条</div>
                    <div>
                        简单的竖直方向的步骤条。
                        <FontIcon icon={'chevron-circle-down'} ref='collapse' className='collapse' onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className='code-box-src' ref='boxSrc'>
                    <Code className='language-jsx'>
                        {`
import Steps from 'r-cmui/components/Steps';
const {Step} = Steps;

ReactDOM.render(
<div>
    <Steps current={1} layout="vertical">
        <Step title="Finished" description="This is a description." />
        <Step title="In Progress" description="This is a description." />
        <Step title="Waiting" description="This is a description." />
    </Steps>
</div>, mountNode);
`}
                    </Code>
                </div>
            </div>
        );
    }
}

export default Demo;
