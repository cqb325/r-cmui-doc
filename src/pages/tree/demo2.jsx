import React from 'react';
import BaseDemo from '../BaseDemo';
import FontIcon from 'r-cmui/components/FontIcon';
import Code from '../Code';
import Tree from 'r-cmui/components/Tree';

class Demo extends BaseDemo{
    render(){
        let treeData = [{
            id: 0,
            text: '中国',
            open: true,
            children: [
                {
                    id: '1',
                    text: '北京',
                    children: [{id: '11', text: '海淀'},{id: '12', text: '朝阳'}]
                },{
                    id: '2',
                    text: '上海'
                }
            ]
        }];

        return (
            <div>
                <div className="code-box-demo">
                    <Tree data={treeData} enableCheckbox />
                </div>
                <div className="code-box-desc">
                    <div className="code-box-title">带checkbox的Tree</div>
                    <div>
                        设置enableCheckbox属性，是一个带勾选的tree
                        <FontIcon icon={'chevron-circle-down'} ref="collapse" className="collapse" onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className="code-box-src" ref="boxSrc">
                    <Code className="language-jsx">
                        {`
import Tree from 'r-cmui/components/Tree';

let treeData = [{
    id: 0,
    text: "中国",
    open: true,
    children: [
        {
            id: '1',
            text: "北京",
            children: [{id: '11', text: "海淀"},{id: '12', text: "朝阳"}]
        },{
            id: '2',
            text: "上海"
        }
    ]
}];

ReactDOM.render(
<div>
   <Tree data={treeData} enableCheckbox />
</div>, mountNode);
`}
                    </Code>
                </div>
            </div>
        );
    }
}

export default Demo;
