import React from 'react';
import BaseDemo from '../BaseDemo';
import FontIcon from 'r-cmui/components/FontIcon';
import Code from '../Code';
import Slick from 'r-cmui/components/Slick';

class Demo extends BaseDemo {
    render () {
        return (
            <div>
                <div className='code-box-demo'>
                    <Slick effect='fade'>
                        <Slick.Item>1</Slick.Item>
                        <Slick.Item>2</Slick.Item>
                        <Slick.Item>3</Slick.Item>
                        <Slick.Item>4</Slick.Item>
                    </Slick>
                </div>
                <div className='code-box-desc'>
                    <div className='code-box-title'>fade特效</div>
                    <div>
                        设置effect属性为fade即可
                        <FontIcon icon={'chevron-circle-down'} ref='collapse' className='collapse' onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className='code-box-src' ref='boxSrc'>
                    <Code className='language-jsx'>
                        {`
import Slick from 'r-cmui/components/Slick';

ReactDOM.render(
<div>
    <Slick effect="fade">
        <Slick.Item>1</Slick.Item>
        <Slick.Item>2</Slick.Item>
        <Slick.Item>3</Slick.Item>
        <Slick.Item>4</Slick.Item>
    </Slick>
</div>, mountNode);
`}
                    </Code>
                </div>
            </div>
        );
    }
}

export default Demo;
