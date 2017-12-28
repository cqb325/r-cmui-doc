import React from 'react';
import BaseDemo from '../BaseDemo';
import FontIcon from 'r-cmui/components/FontIcon';
import Code from '../Code';
import Slider from 'r-cmui/components/Slider';
import Row from 'r-cmui/components/Row';
import Col from 'r-cmui/components/Col';
import Input from 'r-cmui/components/Input';

class Demo extends BaseDemo {
    syncInput = (value) => {
        this.input.setValue(value);
    }
    render () {
        return (
            <div>
                <div className='code-box-demo'>
                    <Row>
                        <Col grid={0.8}><Slider value={7} step={0.1} max={20} onChange={this.syncInput}/></Col>
                        <Col grid={0.2}><Input value={7} style={{width: 50}} ref={(f) => this.input = f}/></Col>
                    </Row>
                </div>
                <div className='code-box-desc'>
                    <div className='code-box-title'>基本用法</div>
                    <div>
                        简单使用
                        <FontIcon icon={'chevron-circle-down'} ref='collapse' className='collapse' onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className='code-box-src' ref='boxSrc'>
                    <Code className='language-jsx'>
                        {`
import Slider from 'r-cmui/components/Slider';
import Row from 'r-cmui/components/Row';
import Col from 'r-cmui/components/Col';
import Input from 'r-cmui/components/Input';

class Demo extends BaseDemo {
    syncInput = (value) => {
        this.input.setValue(value);
    }

    render() {
        <div>
            <Row>
                <Col grid={0.8}><Slider value={7} step={0.1} max={20} onChange={this.syncInput}/></Col>
                <Col grid={0.2}><Input value={7} style={{width: 50}} ref={(f) => this.input = f}/></Col>
            </Row>
        </div>
    };
`}
                    </Code>
                </div>
            </div>
        );
    }
}

export default Demo;
