import React from 'react';
import BaseDemo from '../BaseDemo';
import Button from 'r-cmui/components/Button';
import FontIcon from 'r-cmui/components/FontIcon';
import Code from '../Code';

class Demo extends BaseDemo {
    render () {
        return (
            <div>
                <div className='code-box-demo'>
                    <div>
                        <Button theme='primary' size='small' circle>Small</Button>
                        <Button theme='primary' circle>Default</Button>
                        <Button theme='primary' size='large' circle>Large</Button>
                    </div>
                </div>
                <div className='code-box-desc'>
                    <div className='code-box-title'>圆角</div>
                    <div>
                        Button设置circle可以形成圆角按钮。
                        <FontIcon icon={'chevron-circle-down'} ref='collapse' className='collapse' onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className='code-box-src' ref='boxSrc'>
                    <Code>
                        {`
import Button from 'r-cmui/components/Button';

class Demo extends BaseDemo{
    render(){
        <div>
            <div>
                <Button theme="primary" data-size="small" circle>Small</Button>
                <Button theme="primary" circle>Default</Button>
                <Button theme="primary" data-size="large" circle>Large</Button>
            </div>
        </div>
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
