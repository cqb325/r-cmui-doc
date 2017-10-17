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
                        <Button theme='default' className='mr-5'>Default</Button>
                        <Button theme='primary' className='mr-5'>Primary</Button>
                        <Button theme='success' className='mr-5'>Success</Button>
                    </div>
                    <div className='mt-15'>
                        <Button theme='default' size='large' className='mr-5'>Default</Button>
                        <Button theme='primary' size='large' className='mr-5'>Primary</Button>
                        <Button theme='success' size='large' className='mr-5'>Success</Button>
                    </div>
                    <div className='mt-15'>
                        <Button theme='default' size='small' className='mr-5'>Default</Button>
                        <Button theme='primary' size='small' className='mr-5'>Primary</Button>
                        <Button theme='success' size='small' className='mr-5'>Success</Button>
                    </div>
                </div>
                <div className='code-box-desc'>
                    <div className='code-box-title'>按钮尺寸</div>
                    <div>
                        按钮有大、中、小三种尺寸。
                        通过设置 size 为 large small 分别把按钮设为大、小尺寸。若不设置 size，则尺寸为中。
                        <FontIcon icon={'chevron-circle-down'} ref='collapse' className='collapse' onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className='code-box-src' ref='boxSrc'>
                    <Code>
                        {`
import Button from 'r-cmui/components/Button';

ReactDOM.render(
<div>
    <div>
        <Button theme="default" className="mr-5">Default</Button>
        <Button theme="primary" className="mr-5">Primary</Button>
        <Button theme="success" className="mr-5">Success</Button>
    </div>
    <div className="mt-15">
        <Button theme="default" size="large" className="mr-5">Default</Button>
        <Button theme="primary" size="large" className="mr-5">Primary</Button>
        <Button theme="success" size="large" className="mr-5">Success</Button>
    </div>
    <div className="mt-15">
        <Button theme="default" size="small" className="mr-5">Default</Button>
        <Button theme="primary" size="small" className="mr-5">Primary</Button>
        <Button theme="success" size="small" className="mr-5">Success</Button>
    </div>
</div>, mountNode);
`}
                    </Code>
                </div>
            </div>
        );
    }
}

export default Demo;
