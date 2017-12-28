import React from 'react';
import BaseDemo from '../BaseDemo';
import FontIcon from 'r-cmui/components/FontIcon';
import Pagination from 'r-cmui/components/Pagination';
import Code from '../Code';

class Demo extends BaseDemo {
    render () {
        return (
            <div>
                <div className='code-box-demo'>
                    <Pagination theme='primary' shape='circle' displayInfo={false} current={1} pageSize={10} total={100} min></Pagination>
                    <Pagination theme='primary' shape='none' displayInfo={false} current={1} pageSize={10} total={100} min></Pagination>
                </div>
                <div className='code-box-desc'>
                    <div className='code-box-title'>min</div>
                    <div>
                        设置min页号只有前一页和后一页， 配合displayInfo为false更佳
                        <FontIcon icon={'chevron-circle-down'} ref='collapse' className='collapse' onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className='code-box-src' ref='boxSrc'>
                    <Code>
                        {`
import Pagination from 'r-cmui/components/Pagination';

ReactDOM.render(
<div>
<Pagination theme='primary' shape='circle' displayInfo={false} current={1} pageSize={10} total={100} min></Pagination>
<Pagination theme='primary' shape='none' displayInfo={false} current={1} pageSize={10} total={100} min></Pagination>
</div>, mountNode);
`}
                    </Code>
                </div>
            </div>
        );
    }
}

export default Demo;
