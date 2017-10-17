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
                    <Input type='number' name='text' placeholder='Number Only' onChange={(v) => {
                        console.log(v);
                    }}/>
                </div>
                <div className='code-box-desc'>
                    <div className='code-box-title'>数字输入</div>
                    <div>
                        只能输入实数
                        <FontIcon icon={'chevron-circle-down'} ref='collapse' className='collapse' onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className='code-box-src' ref='boxSrc'>
                    <Code>
                        {`
import Input from 'r-cmui/components/Input';

ReactDOM.render(
<div>
    <Input type="number" name="text" placeholder="Number Only" />
</div>, mountNode);
`}
                    </Code>
                </div>
            </div>
        );
    }
}

export default Demo;
