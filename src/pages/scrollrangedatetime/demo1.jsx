import React from 'react';
import BaseDemo from '../BaseDemo';
import ScrollRangeDateTime from 'r-cmui/components/ScrollRangeDateTime';
import FontIcon from 'r-cmui/components/FontIcon';
import Code from '../Code';

class Demo extends BaseDemo {
    render () {
        return (
            <div>
                <div className='code-box-demo'>
                    <ScrollRangeDateTime />
                </div>
                <div className='code-box-desc'>
                    <div className='code-box-title'>基本用法</div>
                    <div>
                        基本用法
                        <FontIcon icon={'chevron-circle-down'} ref='collapse' className='collapse' onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className='code-box-src' ref='boxSrc'>
                    <Code>
                        {`
import ScrollRangeDateTime from 'r-cmui/components/ScrollRangeDateTime';

ReactDOM.render(
<div>
    <ScrollRangeDateTime />
</div>, mountNode);
`}
                    </Code>
                </div>
            </div>
        );
    }
}

export default Demo;
