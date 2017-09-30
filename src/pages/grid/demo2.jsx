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
                        <Col grid={1/4} className="demo-col">grid(1/4)</Col>
                        <Col grid={{width: 1/4, offset: 1/2}} className="demo-col">{`grid{{width: 1/4, offset: 1/2}}`}</Col>
                    </Row>
                    <Row className="demo-row">
                        <Col grid={{width: 1/3, offset: 1/2}} className="demo-col">{`grid{{width: 1/3, offset: 1/2}}`}</Col>
                    </Row>
                    <Row className="demo-row">
                        <Col grid={{width: 1/2, offset: 1/6}} className="demo-col">{`grid{{width: 1/2, offset: 1/6}}`}</Col>
                    </Row>
                </div>
                <div className="code-box-desc">
                    <div className="code-box-title">左右偏移</div>
                    <div>
                        使用 grid 的 offset 可以将列向右侧偏。例如，offset={1/2} 将元素向右侧偏移了 50% 的宽度。
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
        <Col grid={1/4} className="demo-col">grid(1/4)</Col>
        <Col grid={{width: 1/4, offset: 1/2}} className="demo-col">{'grid{{width: 1/4, offset: 1/2}}'}</Col>
    </Row>
    <Row className="demo-row">
        <Col grid={{width: 1/3, offset: 1/2}} className="demo-col">{'grid{{width: 1/3, offset: 1/2}}'}</Col>
    </Row>
    <Row className="demo-row">
        <Col grid={{width: 1/2, offset: 1/6}} className="demo-col">{'grid{{width: 1/2, offset: 1/6}}'}</Col>
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
