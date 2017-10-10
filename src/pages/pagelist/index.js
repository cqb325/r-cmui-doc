import React, {PureComponent} from 'react';
import Label from 'r-cmui/components/Label';
import Row from 'r-cmui/components/Row';
import Col from 'r-cmui/components/Col';

import Demo1 from './demo1';


class Page extends PureComponent{
    render(){
        return (
            <div className="main-container">
                <h1 className="page-h1">列表页</h1>
                <blockquote className="page-tip">
                    统一的列表页面，整合列表数据，分页和查询。<br/>
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
