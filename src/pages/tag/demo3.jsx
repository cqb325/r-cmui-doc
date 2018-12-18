import React from 'react';
import BaseDemo from '../BaseDemo';
import FontIcon from 'r-cmui/components/FontIcon';
import Tag from 'r-cmui/components/Tag';
import Code from '../Code';

class Demo extends BaseDemo {
    render () {
        return (
            <div>
                <div className='code-box-demo'>
                    <Tag badge={32}>哈登</Tag>
                    <Tag badge={20}>戈登</Tag>
                    <Tag badge={23}>保罗</Tag>
                    <Tag badge={112}>总分</Tag>
                </div>
                <div className='code-box-desc'>
                    <div className='code-box-title'>带badge的Tag</div>
                    <div>
                        通过badge参数展示额外数据
                        <FontIcon icon={'chevron-circle-down'} ref='collapse' className='collapse' onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className='code-box-src' ref='boxSrc'>
                    <Code className='language-jsx'>
                        {`
import Tags from 'r-cmui/components/Tag/Tags';

class Demo extends BaseDemo {
    render () {
        return <div className='code-box-demo'>
            <Tag badge={32}>哈登</Tag>
            <Tag badge={20}>戈登</Tag>
            <Tag badge={23}>保罗</Tag>
            <Tag badge={112}>总分</Tag>
        </div>;
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
