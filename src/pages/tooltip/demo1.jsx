import React from 'react';
import BaseDemo from '../BaseDemo';
import FontIcon from 'r-cmui/components/FontIcon';
import Tooltip from 'r-cmui/components/Tooltip';
import Code from '../Code';

class Demo extends BaseDemo {
    render () {
        return (
            <div>
                <div className='code-box-demo'>
                    <Tooltip title='tip text'>
                        <span>Tooltip will show when mouse enter.</span>
                    </Tooltip>
                </div>
                <div className='code-box-desc'>
                    <div className='code-box-title'>基本用法</div>
                    <div>
                        简单用法
                        <FontIcon icon={'chevron-circle-down'} ref='collapse' className='collapse' onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className='code-box-src' ref='boxSrc'>
                    <Code className='language-jsx'>
                        {`
import Tooltip from 'r-cmui/components/Tooltip';

ReactDOM.render(
<div>
    <Tooltip title="tip text">
        <span>Tooltip will show when mouse enter.</span>
    </Tooltip>
</div>, mountNode);
`}
                    </Code>
                </div>
            </div>
        );
    }
}

export default Demo;
