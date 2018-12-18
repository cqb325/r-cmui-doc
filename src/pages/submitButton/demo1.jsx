import React from 'react';
import BaseDemo from '../BaseDemo';
import SubmitButton from 'r-cmui/components/Business/SubmitButton';
import FontIcon from 'r-cmui/components/FontIcon';
import Code from '../Code';

class Demo extends BaseDemo {
    render () {
        return (
            <div>
                <div className='code-box-demo'>
                    <SubmitButton theme='primary' data='携带的数据' isValid={() => {
                        return true;
                    }} onSubmit={async () => {
                        await new Promise((resolve) => {
                            window.setTimeout(() => {
                                resolve();
                            }, 1000);
                        });
                        return {success: true};
                    }}>保 存</SubmitButton>

                    <SubmitButton theme='primary' className='ml-15' data='携带的数据' isValid={() => {
                        return true;
                    }} onSubmit={async () => {
                        await new Promise((resolve) => {
                            window.setTimeout(() => {
                                resolve();
                            }, 1000);
                        });
                        return {success: false, msg: '服务器错误'};
                    }}>保 存</SubmitButton>
                </div>
                <div className='code-box-desc'>
                    <div className='code-box-title'>基本用法</div>
                    <div>
                        简单的使用
                        <FontIcon icon={'chevron-circle-down'} ref='collapse' className='collapse' onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className='code-box-src' ref='boxSrc'>
                    <Code>
                        {`
import SubmitButton from 'r-cmui/components/Business/SubmitButton';

ReactDOM.render(
<div>
<SubmitButton theme='primary' data='携带的数据' isValid={() => {
    return true;
}} onSubmit={async () => {
    await new Promise((resolve) => {
        window.setTimeout(() => {
            resolve();
        }, 1000);
    });
    return {success: true};
}}>保 存</SubmitButton>

<SubmitButton theme='primary' className='ml-15' data='携带的数据' isValid={() => {
    return true;
}} onSubmit={async () => {
    await new Promise((resolve) => {
        window.setTimeout(() => {
            resolve();
        }, 1000);
    });
    return {success: false, msg: '服务器错误'};
}}>保 存</SubmitButton>
</div>, mountNode);
`}
                    </Code>
                </div>
            </div>
        );
    }
}

export default Demo;
