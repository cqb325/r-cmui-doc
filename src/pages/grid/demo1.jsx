import React from 'react';
import BaseDemo from '../BaseDemo';
import FontIcon from 'r-cmui/components/FontIcon';
import Row from 'r-cmui/components/Row';
import Col from 'r-cmui/components/Col';
import Code from '../Code';

class Demo extends BaseDemo{
    render(){
        return (
            <div>
                <div className="code-box-demo">
                    <Row className="demo-row">
                        <Col grid={1} className="demo-col">grid(1)</Col>
                    </Row>
                    <Row className="demo-row">
                        <Col grid={1/4} className="demo-col">grid(1/4)</Col>
                        <Col grid={1/4} className="demo-col lighter">grid(1/4)</Col>
                        <Col grid={1/4} className="demo-col">grid(1/4)</Col>
                        <Col grid={1/4} className="demo-col lighter">grid(1/4)</Col>
                    </Row>
                    <Row className="demo-row">
                        <Col grid={1/3} className="demo-col">grid(1/3)</Col>
                        <Col grid={1/3} className="demo-col lighter">grid(1/3)</Col>
                        <Col grid={1/3} className="demo-col">grid(1/3)</Col>
                    </Row>
                    <Row className="demo-row">
                        <Col grid={1/2} className="demo-col">grid(1/2)</Col>
                        <Col grid={1/2} className="demo-col lighter">grid(1/2)</Col>
                    </Row>
                    <Row className="demo-row">
                        <Col grid={5/6} className="demo-col">grid(5/6)</Col>
                        <Col grid={1/6} className="demo-col lighter">grid(1/6)</Col>
                    </Row>
                </div>
                <div className="code-box-desc">
                    <div className="code-box-title">基本用法</div>
                    <div>
                        布局的栅格化系统，我们是基于行（row）和列（col）来定义信息区块的外部框架，以保证页面的每个区域能够稳健地排布起来
                        <FontIcon icon={'chevron-circle-down'} ref="collapse" className="collapse" onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className="code-box-src" ref="boxSrc">
                    <Code>
                        {`
import Row from 'r-cmui/components/Row';
import Col from 'r-cmui/components/Col';

ReactDOM.render(
<div>
    <Row className="demo-row">
        <Col grid={1} className="demo-col">grid(1)</Col>
    </Row>
    <Row className="demo-row">
        <Col grid={1/4} className="demo-col">grid(1/4)</Col>
        <Col grid={1/4} className="demo-col lighter">grid(1/4)</Col>
        <Col grid={1/4} className="demo-col">grid(1/4)</Col>
        <Col grid={1/4} className="demo-col lighter">grid(1/4)</Col>
    </Row>
    <Row className="demo-row">
        <Col grid={1/3} className="demo-col">grid(1/3)</Col>
        <Col grid={1/3} className="demo-col lighter">grid(1/3)</Col>
        <Col grid={1/3} className="demo-col">grid(1/3)</Col>
    </Row>
    <Row className="demo-row">
        <Col grid={1/2} className="demo-col">grid(1/2)</Col>
        <Col grid={1/2} className="demo-col lighter">grid(1/2)</Col>
    </Row>
    <Row className="demo-row">
        <Col grid={5/6} className="demo-col">grid(5/6)</Col>
        <Col grid={1/6} className="demo-col lighter">grid(1/6)</Col>
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
