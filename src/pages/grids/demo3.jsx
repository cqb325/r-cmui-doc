import React from 'react';
import BaseDemo from '../BaseDemo';
import FontIcon from 'r-cmui/components/FontIcon';
import Row from 'r-cmui/components/Row';
import Col from 'r-cmui/components/Col';
import Code from '../Code';

class Demo extends BaseDemo {
    render () {
        return (
            <div>
                <div className='code-box-demo'>
                    <Row className='demo-row'>
                        <Col grid={{width: 1 / 4, responsive: 'sm'}} className='demo-col'>grid(1/4)</Col>
                        <Col grid={{width: 1 / 4, responsive: 'sm'}} className='demo-col lighter'>grid(1/4)</Col>
                        <Col grid={{width: 1 / 4, responsive: 'sm'}} className='demo-col'>grid(1/4)</Col>
                        <Col grid={{width: 1 / 4, responsive: 'sm'}} className='demo-col lighter'>grid(1/4)</Col>
                    </Row>

                    <Row className='demo-row'>
                        <Col grid={{width: 1 / 4, responsive: 'lg'}} className='demo-col'>grid(1/4)</Col>
                        <Col grid={{width: 1 / 4, responsive: 'lg'}} className='demo-col lighter'>grid(1/4)</Col>
                        <Col grid={{width: 1 / 4, responsive: 'lg'}} className='demo-col'>grid(1/4)</Col>
                        <Col grid={{width: 1 / 4, responsive: 'lg'}} className='demo-col lighter'>grid(1/4)</Col>
                    </Row>

                    <Row className='demo-row'>
                        <Col grid={{width: 1 / 4, responsive: 'xl'}} className='demo-col'>grid(1/4)</Col>
                        <Col grid={{width: 1 / 4, responsive: 'xl'}} className='demo-col lighter'>grid(1/4)</Col>
                        <Col grid={{width: 1 / 4, responsive: 'xl'}} className='demo-col'>grid(1/4)</Col>
                        <Col grid={{width: 1 / 4, responsive: 'xl'}} className='demo-col lighter'>grid(1/4)</Col>
                    </Row>
                </div>
                <div className='code-box-desc'>
                    <div className='code-box-title'>响应式布局</div>
                    <div>
                        栅格布局 为响应式布局预设了四个尺寸，sm/md/lg/xl。
                        <FontIcon icon={'chevron-circle-down'} ref='collapse' className='collapse' onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className='code-box-src' ref='boxSrc'>
                    <Code>
                        {`
import Row from 'r-cmui/components/Row';
import Col from 'r-cmui/components/Col';

ReactDOM.render(
<div>
    <Row className="demo-row">
        <Col grid={{width: 1/4, responsive: "sm"}} className="demo-col">grid(1/4)</Col>
        <Col grid={{width: 1/4, responsive: "sm"}} className="demo-col lighter">grid(1/4)</Col>
        <Col grid={{width: 1/4, responsive: "sm"}} className="demo-col">grid(1/4)</Col>
        <Col grid={{width: 1/4, responsive: "sm"}} className="demo-col lighter">grid(1/4)</Col>
    </Row>

    <Row className="demo-row">
        <Col grid={{width: 1/4, responsive: "lg"}} className="demo-col">grid(1/4)</Col>
        <Col grid={{width: 1/4, responsive: "lg"}} className="demo-col lighter">grid(1/4)</Col>
        <Col grid={{width: 1/4, responsive: "lg"}} className="demo-col">grid(1/4)</Col>
        <Col grid={{width: 1/4, responsive: "lg"}} className="demo-col lighter">grid(1/4)</Col>
    </Row>

    <Row className="demo-row">
        <Col grid={{width: 1/4, responsive: "xl"}} className="demo-col">grid(1/4)</Col>
        <Col grid={{width: 1/4, responsive: "xl"}} className="demo-col lighter">grid(1/4)</Col>
        <Col grid={{width: 1/4, responsive: "xl"}} className="demo-col">grid(1/4)</Col>
        <Col grid={{width: 1/4, responsive: "xl"}} className="demo-col lighter">grid(1/4)</Col>
    </Row>
</div>, mountNode);
`}
                    </Code>
                </div>
            </div>
        );
    }
}

export default Demo;
