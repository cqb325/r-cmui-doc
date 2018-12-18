import React from 'react';
import BaseDemo from '../BaseDemo';
import ConfirmButton from 'r-cmui/components/Business/ConfirmButton';
import FontIcon from 'r-cmui/components/FontIcon';
import Code from '../Code';

class Demo extends BaseDemo {
    render () {
        return (
            <div>
                <div className='code-box-demo'>
                    <ConfirmButton tip='确认删除该记录？' data='携带的数据' onConfirm={(data) => {
                        alert(data);
                    }}>删除</ConfirmButton>
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
import ConfirmButton from 'r-cmui/components/Business/ConfirmButton';

ReactDOM.render(
<div>
    <ConfirmButton tip='确认删除该记录？' data='携带的数据' onConfirm={(data) => {
        alert(data);
    }}>删除</ConfirmButton>
</div>, mountNode);
`}
                    </Code>
                </div>
            </div>
        );
    }
}

export default Demo;
