import React from 'react';
import BaseDemo from '../BaseDemo';
import FontIcon from 'r-cmui/components/FontIcon';
import Code from '../Code';
import Tree from 'r-cmui/components/Tree';

class Demo extends BaseDemo {
    render () {
        return (
            <div>
                <div className='code-box-demo'>
                    <Tree url='./big_data.json'></Tree>
                </div>
                <div className='code-box-desc'>
                    <div className='code-box-title'>加载远程数据</div>
                    <div>
                        tree从url地址中获取远程数据进行渲染
                        <FontIcon icon={'chevron-circle-down'} ref='collapse' className='collapse' onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className='code-box-src' ref='boxSrc'>
                    <Code className='language-jsx'>
                        {`
import Tree from 'r-cmui/components/Tree';

ReactDOM.render(
<div>
   <Tree url="./big_data.json"></Tree>
</div>, mountNode);
`}
                    </Code>
                </div>
            </div>
        );
    }
}

export default Demo;
