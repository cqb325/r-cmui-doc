import React from 'react';
import BaseDemo from '../BaseDemo';
import FontIcon from 'r-cmui/components/FontIcon';
import Code from '../Code';
import Spin from 'r-cmui/components/Spin';
const {CssSpin} = Spin;


class Demo extends BaseDemo{
    render(){
        return (
            <div>
                <div className="code-box-demo">
                    <CssSpin ref="spin" spinning type="waves">
                        <div style={{height: 100, position: 'relative', backgroundColor: '#ecf6fd', border: '1px solid #d2eafb', textAlian: 'center'}}>
                            <strong>Alert message title</strong>
                            <p>Further details about the context of this alert.</p>
                        </div>
                    </CssSpin>
                </div>
                <div className="code-box-desc">
                    <div className="code-box-title">Css Spin waves</div>
                    <div>
                        波浪Spin
                        <FontIcon icon={'chevron-circle-down'} ref="collapse" className="collapse" onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className="code-box-src" ref="boxSrc">
                    <Code className="language-jsx">
                        {`
import Spin from 'r-cmui/components/Spin';
const {CssSpin} = Spin;

ReactDOM.render(
<div>
    <CssSpin ref="spin" spinning type="waves">
        <div style={{height: 100, position: 'relative', backgroundColor: '#ecf6fd', border: '1px solid #d2eafb', textAlian: 'center'}}>
            <strong>Alert message title</strong>
            <p>Further details about the context of this alert.</p>
        </div>
    </CssSpin>
</div>, mountNode);
`}
                    </Code>
                </div>
            </div>
        );
    }
}

export default Demo;
