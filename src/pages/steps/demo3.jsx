import React from 'react';
import BaseDemo from '../BaseDemo';
import FontIcon from 'r-cmui/components/FontIcon';
import Code from '../Code';
import Steps from 'r-cmui/components/Steps';
const {Step} = Steps;

class Demo extends BaseDemo{
    render(){
        return (
            <div>
                <div className="code-box-demo">
                    <Steps current={1}>
                        <Step title="Login" icon={'user'} />
                        <Step title="Verification" icon={'address-card'} />
                        <Step title="Pay" icon={'credit-card'} />
                        <Step title="Done" icon={'smile-o'} />
                    </Steps>
                </div>
                <div className="code-box-desc">
                    <div className="code-box-title">迷你步骤条</div>
                    <div>
                        迷你版的步骤条，通过设置 { `<Steps size="small"> `} 启用.
                        <FontIcon icon={'chevron-circle-down'} ref="collapse" className="collapse" onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className="code-box-src" ref="boxSrc">
                    <Code className="language-jsx">
                        {`
import Steps from 'r-cmui/components/Steps';
const {Step} = Steps;

ReactDOM.render(
<div>
    <Steps current={1}>
        <Step title="Login" icon={"user"} />
        <Step title="Verification" icon={"address-card"} />
        <Step title="Pay" icon={"credit-card"} />
        <Step title="Done" icon={"smile-o"} />
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
