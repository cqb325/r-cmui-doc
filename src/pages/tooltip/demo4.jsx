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

                    <div>
                        <Tooltip title='tip text'>
                            default theme
                        </Tooltip>
                    </div>

                    <div className='mt-15'>
                        <Tooltip title='tip text' theme='default'>
                            white theme
                        </Tooltip>
                    </div>

                    <div className='mt-15'>
                        <Tooltip title='tip text' theme='primary'>
                            primary theme
                        </Tooltip>
                    </div>

                    <div className='mt-15'>
                        <Tooltip title='tip text' theme='error'>
                            error theme
                        </Tooltip>
                    </div>
                </div>
                <div className='code-box-desc'>
                    <div className='code-box-title'>主题</div>
                    <div>
                        设置 theme 属性设置 Tooltip 的主题， 目前支持default、black、primary、error，默认为black。
                        <FontIcon icon={'chevron-circle-down'} ref='collapse' className='collapse' onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className='code-box-src' ref='boxSrc'>
                    <Code className='language-jsx'>
                        {`
import Tooltip from 'r-cmui/components/Tooltip';

ReactDOM.render(
<div>
    <div>
        <Tooltip title="tip text">
            default theme
        </Tooltip>
    </div>

    <div className="mt-15">
        <Tooltip title="tip text" theme="default">
            white theme
        </Tooltip>
    </div>

    <div className="mt-15">
        <Tooltip title="tip text" theme="primary">
            primary theme
        </Tooltip>
    </div>

    <div className="mt-15">
        <Tooltip title="tip text" theme="error">
            error theme
        </Tooltip>
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
