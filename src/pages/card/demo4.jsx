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
                    <Card style={{ width: 240 }} bodyStyle={{ padding: 0 }}>
                        <div className='custom-image'>
                            <img alt='example' width='100%' src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png' />
                        </div>
                        <div className='custom-card'>
                            <h3>Europe Street beat</h3>
                            <p>www.instagram.com</p>
                        </div>
                    </Card>
                </div>
                <div className='code-box-desc'>
                    <div className='code-box-title'>简洁卡片</div>
                    <div>
                        只包含内容区域。
                        <FontIcon icon={'chevron-circle-down'} ref='collapse' className='collapse' onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className='code-box-src' ref='boxSrc'>
                    <Code className='language-jsx'>
                        {`
import Card from 'r-cmui/components/Card';

ReactDOM.render(
<Card style={{ width: 300 }}>
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
