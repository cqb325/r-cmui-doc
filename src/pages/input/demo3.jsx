import React from 'react';
import BaseDemo from '../BaseDemo';
import FontIcon from 'r-cmui/components/FontIcon';
import Input from 'r-cmui/components/Input';
import Code from '../Code';

class Demo extends BaseDemo {
    render () {
        return (
            <div>
                <div className='code-box-demo'>
                    <Input size='large' placeholder='large'/><br/>
                    <Input placeholder='default'/><br/>
                    <Input size='small' placeholder='small'/>
                </div>
                <div className='code-box-desc'>
                    <div className='code-box-title'>size</div>
                    <div>
                        大小设置 size 有 large和small选项
                        <FontIcon icon={'chevron-circle-down'} ref='collapse' className='collapse' onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className='code-box-src' ref='boxSrc'>
                    <Code>
                        {`
import Input from 'r-cmui/components/Input';

ReactDOM.render(
<div>
    <Input size='large' placeholder='large'/>
    <Input placeholder='default'/>
    <Input size='small' placeholder='small'/>
</div>, mountNode);
`}
                    </Code>
                </div>
            </div>
        );
    }
}

export default Demo;
