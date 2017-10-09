import React from 'react';
import BaseDemo from '../BaseDemo';
import FontIcon from 'r-cmui/components/FontIcon';
import Card from 'r-cmui/components/Card';
import Row from 'r-cmui/components/Row';
import Col from 'r-cmui/components/Col';
import Code from '../Code';

class Demo extends BaseDemo{
    render(){
        return (
            <div>
                <div className="code-box-demo">
                    <div style={{background: '#ECECEC', padding: '30px'}} className="mt-20">
                        <Row className="card-row">
                            <Col grid={1/3} className="card-col">
                                <Card title="Card Title">
                                    <p>Card content</p>
                                </Card>
                            </Col>
                            <Col grid={1/3} className="card-col">
                                <Card title="Card Title">
                                    <p>Card content</p>
                                </Card>
                            </Col>
                            <Col grid={1/3} className="card-col">
                                <Card title="Card Title">
                                    <p>Card content</p>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </div>
                <div className="code-box-desc">
                    <div className="code-box-title">栅格卡片</div>
                    <div>
                        在系统概览页面常常和栅格进行配合。
                        <FontIcon icon={'chevron-circle-down'} ref="collapse" className="collapse" onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className="code-box-src" ref="boxSrc">
                    <Code>
                        {`
import Card from 'r-cmui/components/Card';
import Row from 'r-cmui/components/Row';
import Col from 'r-cmui/components/Col';

ReactDOM.render(
<div style={{background: '#ECECEC', padding: '30px'}} className="mt-20">
    <Row className="card-row">
        <Col grid={1/3} className="card-col">
            <Card title="Card Title">
                <p>Card content</p>
            </Card>
        </Col>
        <Col grid={1/3} className="card-col">
            <Card title="Card Title">
                <p>Card content</p>
            </Card>
        </Col>
        <Col grid={1/3} className="card-col">
            <Card title="Card Title">
                <p>Card content</p>
            </Card>
        </Col>
    </Row>
</div>, mountNode);
`}
                    </Code>
                    <Code className="language-less">
                        {`
.card-row{
  margin-left: -8px;
  margin-right: -8px;
  .card-col{
    padding: 0 8px;
  }
}
`}
                    </Code>
                </div>
            </div>
        );
    }
}

export default Demo;
