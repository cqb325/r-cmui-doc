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
                    <Badge status='default' text='DEFAULT'></Badge><br/>
                    <Badge status='primary' text='PRIMARY'></Badge><br/>
                    <Badge status='success' text='SUCCESS'></Badge><br/>
                    <Badge status='warning' text='WARNING'></Badge><br/>
                    <Badge status='danger' text='DANGER'></Badge>
                </div>
                <div className='code-box-desc'>
                    <div className='code-box-title'>带text</div>
                    <div>
                        带有text的badge
                        <FontIcon icon={'chevron-circle-down'} ref='collapse' className='collapse' onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className='code-box-src' ref='boxSrc'>
                    <Code className='language-jsx'>
                        {`
import Badge from 'r-cmui/components/Badge';

ReactDOM.render(
<div>
    <Badge status="default" text="DEFAULT"></Badge>
    <Badge status="primary" text="PRIMARY"></Badge>
    <Badge status="success" text="SUCCESS"></Badge>
    <Badge status="warning" text="WARNING"></Badge>
    <Badge status="danger" text="DANGER"></Badge>
</div>, mountNode);
`}
                    </Code>
                </div>
            </div>
        );
    }
}

export default Demo;
