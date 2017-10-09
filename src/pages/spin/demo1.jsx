import React from 'react';
import BaseDemo from '../BaseDemo';
import FontIcon from 'r-cmui/components/FontIcon';
import Code from '../Code';
import Spin from 'r-cmui/components/Spin';
import ButtonGroup from 'r-cmui/components/ButtonGroup';
import Button from 'r-cmui/components/Button';
const {WaterSpin} = Spin;


class Demo extends BaseDemo{

    plus(){
        let percent = this.refs.waterSpin.getPercent();
        if(percent < 100) {
            this.refs.waterSpin.setPercent(percent + 10);
        }
    }

    subtract(){
        let percent = this.refs.waterSpin.getPercent();
        if(percent > 0) {
            this.refs.waterSpin.setPercent(percent - 10);
        }
    }

    render(){
        return (
            <div>
                <div className="code-box-demo">
                    <div style={{background: '#1d1f20', padding: 30}}>
                        <WaterSpin ref="waterSpin" size={150} percent="50"></WaterSpin>
                        <ButtonGroup className={'mt-20'}>
                            <Button theme="primary" onClick={this.subtract.bind(this)}>-</Button>
                            <Button theme="primary" onClick={this.plus.bind(this)}>+</Button>
                        </ButtonGroup>
                    </div>
                </div>
                <div className="code-box-desc">
                    <div className="code-box-title">水波状</div>
                    <div>
                        水波状Spin
                        <FontIcon icon={'chevron-circle-down'} ref="collapse" className="collapse" onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className="code-box-src" ref="boxSrc">
                    <Code className="language-jsx">
                        {`
import Spin from 'r-cmui/components/Spin';
import ButtonGroup from 'r-cmui/components/ButtonGroup';
import Button from 'r-cmui/components/Button';
const {WaterSpin} = Spin;

ReactDOM.render(
<div>
    <div style={{background: "#1d1f20"}}>
        <WaterSpin ref="waterSpin" size={150} percent="50"></WaterSpin>
        <ButtonGroup>
            <Button theme="primary" onClick={this.subtract.bind(this)}>-</Button>
            <Button theme="primary" onClick={this.plus.bind(this)}>+</Button>
        </ButtonGroup>
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
