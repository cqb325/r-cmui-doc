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
                    <Tag>default</Tag>
                    <Tag theme='primary' closable>primary</Tag>
                    <Tag theme='danger' closable>danger</Tag>
                    <Tag theme='warning' closable>warning</Tag>
                    <Tag theme='success' closable>success</Tag>
                    <Tag theme='info' closable>info</Tag>
                </div>
                <div className='code-box-desc'>
                    <div className='code-box-title'>基本用法</div>
                    <div>
                        简单用法 theme 可选为 primary、danger、warning、success、info
                        <FontIcon icon={'chevron-circle-down'} ref='collapse' className='collapse' onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className='code-box-src' ref='boxSrc'>
                    <Code className='language-jsx'>
                        {`
import Tag from 'r-cmui/components/Tag';

class Demo extends BaseDemo {
    render () {
        return <div className='code-box-demo'>
            <Tag>default</Tag>
            <Tag theme='primary' closable>primary</Tag>
            <Tag theme='danger' closable>danger</Tag>
            <Tag theme='warning' closable>warning</Tag>
            <Tag theme='success' closable>success</Tag>
            <Tag theme='info' closable>info</Tag>
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
