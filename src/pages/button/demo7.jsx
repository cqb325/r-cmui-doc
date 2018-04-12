import React from 'react';
import BaseDemo from '../BaseDemo';
import Button from 'r-cmui/components/Button';
import FontIcon from 'r-cmui/components/FontIcon';
import Code from '../Code';

class Demo extends BaseDemo {
    state = {
        loading: false
    }

    upload = () => {
        this.setState({
            loading: !this.state.loading
        });

        window.setTimeout(() => {
            this.setState({
                loading: !this.state.loading
            });
        }, 2000);
    }

    render () {
        return (
            <div>
                <div className='code-box-demo'>
                    <div>
                        <Button theme='primary' loading={this.state.loading} onClick={this.upload}>UPLOAD</Button>
                    </div>
                </div>
                <div className='code-box-desc'>
                    <div className='code-box-title'>loading</div>
                    <div>
                        Button设置loading后显示一个loading图标，并且无法响应点击事件，防止双击提交。
                        <FontIcon icon={'chevron-circle-down'} ref='collapse' className='collapse' onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className='code-box-src' ref='boxSrc'>
                    <Code>
                        {`
import Button from 'r-cmui/components/Button';

class Demo extends BaseDemo{
    state = {
        loading: false
    }

    upload = () => {
        this.setState({
            loading: !this.state.loading
        });

        window.setTimeout(() => {
            this.setState({
                loading: !this.state.loading
            });
        }, 2000);
    }

    render(){
        <div>
            <div>
                <Button theme='primary' loading={this.state.loading} onClick={this.upload}>UPLOAD</Button>
            </div>
        </div>
    }
}
`}
                    </Code>
                </div>
            </div>
        );
    }
}

export default Demo;
