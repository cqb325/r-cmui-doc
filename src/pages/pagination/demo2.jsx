import React from 'react';
import BaseDemo from '../BaseDemo';
import FontIcon from 'r-cmui/components/FontIcon';
import Pagination from 'r-cmui/components/Pagination';
import Code from '../Code';

class Demo extends BaseDemo{
    render(){
        return (
            <div>
                <div className="code-box-demo">
                    <Pagination shape="circle" theme="cyan" current={1} pageSize={10} total={1000} onChange={(page)=>{console.log(page);}}></Pagination>
                </div>
                <div className="code-box-desc">
                    <div className="code-box-title">圆形</div>
                    <div>
                        设置shape为circle页号变为圆形, 支持 circle 和 none，theme 支持 cyan, primary，default
                        <FontIcon icon={'chevron-circle-down'} ref="collapse" className="collapse" onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className="code-box-src" ref="boxSrc">
                    <Code>
                        {`
import Pagination from 'r-cmui/components/Pagination';

ReactDOM.render(
<div>
    <Pagination shape="circle" theme="cyan" current={1} pageSize={10} total={1000} onChange={(page)=>{console.log(page);}}></Pagination>
</div>, mountNode);
`}
                    </Code>
                </div>
            </div>
        );
    }
}

export default Demo;
