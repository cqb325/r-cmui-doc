import React from 'react';
import BaseDemo from '../BaseDemo';
import FontIcon from 'r-cmui/components/FontIcon';
import Breadcrumb from 'r-cmui/components/Breadcrumb';
import Code from '../Code';

class Demo extends BaseDemo {
    render () {
        return (
            <div>
                <div className='code-box-demo'>
                    <Breadcrumb>
                        <Breadcrumb.Item>
                            <FontIcon icon={'home'}></FontIcon>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item link='javascript:void(0)'>
                            <FontIcon icon={'list-ul'}></FontIcon>
                            <span>Application List</span>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>Application</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <div className='code-box-desc'>
                    <div className='code-box-title'>图标</div>
                    <div>
                        图标放在文字前面。
                        <FontIcon icon={'chevron-circle-down'} ref='collapse' className='collapse' onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className='code-box-src' ref='boxSrc'>
                    <Code className='language-jsx'>
                        {`
import Breadcrumb from 'r-cmui/components/Breadcrumb';
import FontIcon from 'r-cmui/components/FontIcon';

ReactDOM.render(
<div>
    <Breadcrumb>
        <Breadcrumb.Item>
            <FontIcon icon={"home"}></FontIcon>
        </Breadcrumb.Item>
        <Breadcrumb.Item link="javascript:void(0)">
            <FontIcon icon={"list-ul"}></FontIcon>
            <span>Application List</span>
        </Breadcrumb.Item>
        <Breadcrumb.Item>Application</Breadcrumb.Item>
    </Breadcrumb>
</div>, mountNode);
`}
                    </Code>
                </div>
            </div>
        );
    }
}

export default Demo;
