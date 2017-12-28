import React from 'react';
import BaseDemo from '../BaseDemo';
import FontIcon from 'r-cmui/components/FontIcon';
import Code from '../Code';
import Slider from 'r-cmui/components/Slider';

class Demo extends BaseDemo {
    render () {
        return (
            <div>
                <div className='code-box-demo'>
                    <Slider range value={[5,10]} step={0.1} max={20}/>
                </div>
                <div className='code-box-desc'>
                    <div className='code-box-title'>基本用法</div>
                    <div>
                        简单使用
                        <FontIcon icon={'chevron-circle-down'} ref='collapse' className='collapse' onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className='code-box-src' ref='boxSrc'>
                    <Code className='language-jsx'>
                        {`
import Slider from 'r-cmui/components/Slider';

class Demo extends BaseDemo {
    render() {
        <div>
            <Slider range value={[5,10]} step={0.1} max={20}/>
        </div>
    };
`}
                    </Code>
                </div>
            </div>
        );
    }
}

export default Demo;
