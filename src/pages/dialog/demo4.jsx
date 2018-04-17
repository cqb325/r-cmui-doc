import React from 'react';
import BaseDemo from '../BaseDemo';
import FontIcon from 'r-cmui/components/FontIcon';
import Dialog from 'r-cmui/components/Dialog';
import Button from 'r-cmui/components/Button';
import Code from '../Code';

class Demo extends BaseDemo {
    openDialog () {
        this.dialog.open();
        this.dialog.setData({params: 1});
    }

    onDialogConfirm (flag) {
        const data = this.dialog.getData();
        if (flag) {
            this.dialog.showLoading();
            console.log('ok click', data);
            window.setTimeout(() => {
                this.dialog.hideLoading();
                this.dialog.close();
            }, 2000);
            return false;
        } else {
            console.log('cancel click');
        }

        // must return true
        return true;
    }

    render () {
        return (
            <div>
                <div className='code-box-demo'>
                    <Dialog ref={(f) => this.dialog = f} title='提示' onConfirm={this.onDialogConfirm.bind(this)} hasFooter={true} okButtonText='提 交' cancleButtonText='关 闭'>
                        <p>dialog content</p>
                        <p>dialog content</p>
                        <p>dialog content</p>
                    </Dialog>

                    <Button theme='warning' onClick={this.openDialog.bind(this)}>open dialog</Button>
                </div>
                <div className='code-box-desc'>
                    <div className='code-box-title'>loading</div>
                    <div>
                        保存操作时显示loading
                        <FontIcon icon={'chevron-circle-down'} ref='collapse' className='collapse' onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className='code-box-src' ref='boxSrc'>
                    <Code className='language-jsx'>
                        {`
import Dialog from 'r-cmui/components/Dialog';
import Button from 'r-cmui/components/Button';

openDialog () {
    this.dialog.open();
    this.dialog.setData({params: 1});
}

onDialogConfirm (flag) {
    const data = this.dialog.getData();
    if (flag) {
        this.dialog.showLoading();
        console.log('ok click', data);
        window.setTimeout(() => {
            this.dialog.hideLoading();
            this.dialog.close();
        }, 2000);
        return false;
    } else {
        console.log('cancel click');
    }

    // must return true
    return true;
}

ReactDOM.render(
<div>
    <Dialog ref={(f) => this.dialog = f} title='提示' onConfirm={this.onDialogConfirm.bind(this)} hasFooter={true} okButtonText='提 交' cancleButtonText='关 闭'>
        <p>dialog content</p>
        <p>dialog content</p>
        <p>dialog content</p>
    </Dialog>

    <Button theme='warning' onClick={this.openDialog.bind(this)}>open dialog</Button>
</div>, mountNode);
`}
                    </Code>
                </div>
            </div>
        );
    }
}

export default Demo;
