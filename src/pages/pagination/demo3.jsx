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
                    <Pagination shape="none" displayInfo={false} current={1} pageSize={10} total={1000} onChange={(page)=>{console.log(page);}}></Pagination>
                    <Pagination shape="none" theme="cyan" displayInfo={false} current={1} pageSize={10} total={1000} onChange={(page)=>{console.log(page);}}></Pagination>
                </div>
                <div className="code-box-desc">
                    <div className="code-box-title">displayInfo</div>
                    <div>
                        设置displayInfo 为false 可以不显示页数信息等
                        <FontIcon icon={'chevron-circle-down'} ref="collapse" className="collapse" onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className="code-box-src" ref="boxSrc">
                    <Code>
                        {`
import Pagination from 'r-cmui/components/Pagination';

ReactDOM.render(
<div>
    <Pagination shape="none" displayInfo={false} current={1} pageSize={10} total={1000} onChange={(page)=>{console.log(page);}}></Pagination>
    <Pagination shape="none" theme="cyan" displayInfo={false} current={1} pageSize={10} total={1000} onChange={(page)=>{console.log(page);}}></Pagination>
</div>, mountNode);
`}
                    </Code>
                </div>
            </div>
        );
    }
}

export default Demo;
