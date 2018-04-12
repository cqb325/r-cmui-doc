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
                    <div style={{width: 300}}>
                        <Input size='large' prefix={<FontIcon icon='mobile'></FontIcon>}/>
                        <Input size='large' prefix={<FontIcon icon='user'></FontIcon>}/>
                    </div>
                </div>
                <div className='code-box-desc'>
                    <div className='code-box-title'>prefix</div>
                    <div>
                        设置prefix样例
                        <FontIcon icon={'chevron-circle-down'} ref='collapse' className='collapse' onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className='code-box-src' ref='boxSrc'>
                    <Code>
                        {`
import Input from 'r-cmui/components/Input';

ReactDOM.render(
<div>
    <div style={{width: 300}}>
        <Input size='large' prefix={<FontIcon icon='mobile'></FontIcon>}/>
        <Input size='large' prefix={<FontIcon icon='user'></FontIcon>}/>
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
