import React from 'react';
import BaseDemo from '../BaseDemo';
import FontIcon from 'r-cmui/components/FontIcon';
import Code from '../Code';
import Switch from 'r-cmui/components/Switch';

class Demo extends BaseDemo{
    render(){
        return (
            <div>
                <div className="code-box-demo">
                    <div>
                        <Switch checked />
                    </div>
                    <div className="mt-15">
                        <Switch size="small" />
                    </div>
                </div>
                <div className="code-box-desc">
                    <div className="code-box-title">大小</div>
                    <div>
                        设置size为small可以设置小switch。
                        <FontIcon icon={'chevron-circle-down'} ref="collapse" className="collapse" onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className="code-box-src" ref="boxSrc">
                    <Code>
                        {`
import Switch from 'r-cmui/components/Switch';

ReactDOM.render(
<div>
    <div>
        <Switch checked />
    </div>
    <div className="mt-15">
        <Switch size="small" />
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
