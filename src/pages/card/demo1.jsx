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
                    <Card title='Card Title' style={{ width: 300 }} tools={<a href='javascript:void(0)'>More</a>}>
                        <p>Card content</p>
                        <p>Card content</p>
                        <p>Card content</p>
                        <p>Card content</p>
                    </Card>
                </div>
                <div className='code-box-desc'>
                    <div className='code-box-title'>典型用法</div>
                    <div>
                        包含标题、内容、操作区域。
                        <FontIcon icon={'chevron-circle-down'} ref='collapse' className='collapse' onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className='code-box-src' ref='boxSrc'>
                    <Code className='language-jsx'>
                        {`
import Card from 'r-cmui/components/Card';

ReactDOM.render(
<Card title="Card Title" style={{ width: 300 }} tools={<a href="#">More</a>}>
    <p>Card content</p>
    <p>Card content</p>
    <p>Card content</p>
    <p>Card content</p>
</Card>, mountNode);
`}
                    </Code>
                </div>
            </div>
        );
    }
}

export default Demo;
