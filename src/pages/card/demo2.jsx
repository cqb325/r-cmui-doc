import React from 'react';
import BaseDemo from '../BaseDemo';
import FontIcon from 'r-cmui/components/FontIcon';
import Card from 'r-cmui/components/Card';
import Code from '../Code';

class Demo extends BaseDemo {
    render () {
        return (
            <div>
                <div className='code-box-demo'>
                    <div style={{background: '#ECECEC', padding: '30px'}}>
                        <Card title='Card Title' style={{ width: 300 }}>
                            <p>Card content</p>
                            <p>Card content</p>
                            <p>Card content</p>
                            <p>Card content</p>
                        </Card>
                    </div>
                </div>
                <div className='code-box-desc'>
                    <div className='code-box-title'>无边框</div>
                    <div>
                        在灰色背景上使用无边框的卡片。
                        <FontIcon icon={'chevron-circle-down'} ref='collapse' className='collapse' onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className='code-box-src' ref='boxSrc'>
                    <Code>
                        {`
import Card from 'r-cmui/components/Card';

ReactDOM.render(
<div style={{background: '#ECECEC', padding: '30px'}}>
    <Card title="Card Title" style={{ width: 300 }}>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
    </Card>
</div>, mountNode);
`}
                    </Code>
                </div>
            </div>
        );
    }
}

export default Demo;
