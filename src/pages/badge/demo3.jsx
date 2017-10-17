import React from 'react';
import BaseDemo from '../BaseDemo';
import FontIcon from 'r-cmui/components/FontIcon';
import Code from '../Code';
import Badge from 'r-cmui/components/Badge';

class Demo extends BaseDemo {
    render () {
        return (
            <div>
                <div className='code-box-demo'>
                    <Badge status='default'></Badge>
                    <Badge status='success'></Badge>
                    <Badge status='primary'></Badge>
                    <Badge status='danger'></Badge>
                    <Badge status='warning'></Badge>
                </div>
                <div className='code-box-desc'>
                    <div className='code-box-title'>status</div>
                    <div>
                        status 有 default、success、primary、danger、warning
                        <FontIcon icon={'chevron-circle-down'} ref='collapse' className='collapse' onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className='code-box-src' ref='boxSrc'>
                    <Code className='language-jsx'>
                        {`
import Badge from 'r-cmui/components/Badge';

ReactDOM.render(
<div>
    <Badge status="default"></Badge>
    <Badge status="success"></Badge>
    <Badge status="primary"></Badge>
    <Badge status="danger"></Badge>
    <Badge status="warning"></Badge>
</div>, mountNode);
`}
                    </Code>
                </div>
            </div>
        );
    }
}

export default Demo;
