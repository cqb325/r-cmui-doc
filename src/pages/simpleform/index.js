import React, {PureComponent} from 'react';
import Label from 'r-cmui/components/Label';
import Row from 'r-cmui/components/Row';
import Col from 'r-cmui/components/Col';

import Demo1 from './demo1';


class Page extends PureComponent{
    render(){
        return (
            <div className="main-container">
                <h1 className="page-h1">表单</h1>
                <blockquote className="page-tip">
                    简单的表单通过配置展现。<br/>
                </blockquote>

                <h1 className="page-h1">代码演示</h1>

                <Row>
                    <Col grid={1} className="code-col">
                        <Label className="code-box">
                            <Demo1></Demo1>
                        </Label>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Page;
