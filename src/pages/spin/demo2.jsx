import React from 'react';
import BaseDemo from '../BaseDemo';
import FontIcon from 'r-cmui/components/FontIcon';
import Code from '../Code';
import Spin from 'r-cmui/components/Spin';
import Switch from 'r-cmui/components/Switch';
const {SVGSpin} = Spin;


class Demo extends BaseDemo{

    switchSpin(value){
        if(value){
            this.refs.spin.show();
        }else{
            this.refs.spin.hide();
        }
    }

    render(){
        return (
            <div>
                <div className="code-box-demo">
                    <SVGSpin ref="spin">
                        <div style={{height: 100, position: 'relative', backgroundColor: '#ecf6fd', border: '1px solid #d2eafb', textAlian: 'center'}}>
                            <strong>Alert message title</strong>
                            <p>Further details about the context of this alert.</p>
                        </div>
                    </SVGSpin>

                    <Switch className="mt-20" theme="primary" value={1} onChange={this.switchSpin.bind(this)}></Switch>
                </div>
                <div className="code-box-desc">
                    <div className="code-box-title">齿轮状svg Spin</div>
                    <div>
                        齿轮状Spin
                        <FontIcon icon={'chevron-circle-down'} ref="collapse" className="collapse" onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className="code-box-src" ref="boxSrc">
                    <Code className="language-jsx">
                        {`
import Spin from 'r-cmui/components/Spin';
import Switch from 'r-cmui/components/Switch';
const {SVGSpin} = Spin;

switchSpin(value){
    if(value){
        this.refs.spin.show();
    }else{
        this.refs.spin.hide();
    }
}

ReactDOM.render(
<div>
    <SVGSpin ref="spin">
        <div style={{height: 100, position: "relative", backgroundColor: "#ecf6fd", border: "1px solid #d2eafb", textAlian: "center"}}>
            <strong>Alert message title</strong>
            <p>Further details about the context of this alert.</p>
        </div>
    </SVGSpin>

    <Switch className="mt-20" theme="primary" value={1} onChange={this.switchSpin.bind(this)}></Switch>
</div>, mountNode);
`}
                    </Code>
                </div>
            </div>
        );
    }
}

export default Demo;
