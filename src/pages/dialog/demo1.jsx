import React from 'react';
import BaseDemo from '../BaseDemo';
import FontIcon from 'r-cmui/components/FontIcon';
import Dialog from 'r-cmui/components/Dialog';
import Button from 'r-cmui/components/Button';
import Code from '../Code';

class Demo extends BaseDemo{

    openDialog(){
        this.refs.dialog.open();
    }

    render(){
        return (
            <div>
                <div className="code-box-demo">
                    <Dialog ref="dialog" title="提示">
                        <p>dialog content</p>
                        <p>dialog content</p>
                        <p>dialog content</p>
                    </Dialog>

                    <Button onClick={this.openDialog.bind(this)}>click to open dialog</Button>
                </div>
                <div className="code-box-desc">
                    <div className="code-box-title">基本用法</div>
                    <div>
                        简单用法
                        <FontIcon icon={'chevron-circle-down'} ref="collapse" className="collapse" onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className="code-box-src" ref="boxSrc">
                    <Code className="language-jsx">
                        {`
import Dialog from 'r-cmui/components/Dialog';
import Button from 'r-cmui/components/Button';

openDialog(){
    this.refs.dialog.open();
}

ReactDOM.render(
<div>
    <Dialog ref="dialog" title="提示">
        <p>dialog content</p>
        <p>dialog content</p>
        <p>dialog content</p>
    </Dialog>

    <Button onClick={this.openDialog.bind(this)}>click to open dialog</Button>
</div>, mountNode);
`}
                    </Code>
                </div>
            </div>
        );
    }
}

export default Demo;
