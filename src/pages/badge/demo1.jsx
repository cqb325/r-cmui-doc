import React from 'react';
import BaseDemo from '../BaseDemo';
import FontIcon from 'r-cmui/components/FontIcon';
import Code from '../Code';
import Badge from 'r-cmui/components/Badge';

class Demo extends BaseDemo {
    render () {
        return (
            <div>
                <div className='code-box-demo'>
                    <Badge count='0'>
                        <span className='rect-box'></span>
                    </Badge>
                    <Badge count='1'>
                        <span className='rect-box'></span>
                    </Badge>
                </div>
                <div className='code-box-desc'>
                    <div className='code-box-title'>基本</div>
                    <div>
                        简单实用
                        <FontIcon icon={'chevron-circle-down'} ref='collapse' className='collapse' onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className='code-box-src' ref='boxSrc'>
                    <Code>
                        {`
import Badge from 'r-cmui/components/Badge';

ReactDOM.render(
<div>
    <Badge count="0">
        <span className="rect-box"></span>
    </Badge>
    <Badge count="1">
        <span className="rect-box"></span>
    </Badge>
</div>, mountNode);
`}
                    </Code>
                </div>
            </div>
        );
    }
}

export default Demo;
