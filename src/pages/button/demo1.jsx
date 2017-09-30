import React from 'react';
import BaseDemo from '../BaseDemo';
import Button from 'r-cmui/components/Button';
import FontIcon from 'r-cmui/components/FontIcon';
import Code from '../Code';

class Demo extends BaseDemo{
    render(){
        return (
            <div>
                <div className="code-box-demo">
                    <Button theme="default" className="mr-5">Default</Button>
                    <Button theme="primary" className="mr-5">Primary</Button>
                    <Button theme="success" className="mr-5">Success</Button>
                    <Button theme="warning" className="mr-5">Warning</Button>
                    <Button theme="danger" className="mr-5">Danger</Button>
                </div>
                <div className="code-box-desc">
                    <div className="code-box-title">按钮主题</div>
                    <div>
                        按钮主题有五种：通过设置 theme 为 default primary success warning danger 进行创建
                        <FontIcon icon={'chevron-circle-down'} ref="collapse" className="collapse" onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className="code-box-src" ref="boxSrc">
                    <Code>
                        {`
import Button from 'r-cmui/components/Button';

ReactDOM.render(
<div>
    <Button theme="default" className="mr-5">Default</Button>
    <Button theme="primary" className="mr-5">Primary</Button>
    <Button theme="success" className="mr-5">Success</Button>
    <Button theme="warning" className="mr-5">Warning</Button>
    <Button theme="danger" className="mr-5">Danger</Button>
</div>, mountNode);
`}
                    </Code>
                </div>
            </div>
        );
    }
}

export default Demo;
