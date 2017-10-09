import React from 'react';
import BaseDemo from '../BaseDemo';
import FontIcon from 'r-cmui/components/FontIcon';
import Code from '../Code';
import Progress from 'r-cmui/components/Progress';

class Demo extends BaseDemo{
    render(){
        return (
            <div>
                <div className="code-box-demo">
                    <Progress value={30} type="circle" radius={45}></Progress>
                    <Progress value={50} type="circle" radius={45} theme="warning"></Progress>
                    <Progress value={70} type="circle" radius={45} status="exception"></Progress>
                    <Progress value={100} type="circle" radius={45}></Progress>
                </div>
                <div className="code-box-desc">
                    <div className="code-box-title">小型进度圈</div>
                    <div>
                        小型圈形的进度条
                        <FontIcon icon={'chevron-circle-down'} ref="collapse" className="collapse" onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className="code-box-src" ref="boxSrc">
                    <Code className="language-jsx">
                        {`
import Progress from 'r-cmui/components/Progress';

ReactDOM.render(
<div>
    <Progress value={30} type="circle" radius={45}></Progress>
    <Progress value={50} type="circle" radius={45} theme="warning"></Progress>
    <Progress value={70} type="circle" radius={45} status="exception"></Progress>
    <Progress value={100} type="circle" radius={45}></Progress>
</div>, mountNode);
`}
                    </Code>
                </div>
            </div>
        );
    }
}

export default Demo;
