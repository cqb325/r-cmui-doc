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
                    <Slick layout='vertical'>
                        <Slick.Item>1</Slick.Item>
                        <Slick.Item>2</Slick.Item>
                        <Slick.Item>3</Slick.Item>
                        <Slick.Item>4</Slick.Item>
                    </Slick>
                </div>
                <div className='code-box-desc'>
                    <div className='code-box-title'>纵向的Slick</div>
                    <div>
                        layout属性可以是horizontal和vertical
                        <FontIcon icon={'chevron-circle-down'} ref='collapse' className='collapse' onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className='code-box-src' ref='boxSrc'>
                    <Code className='language-jsx'>
                        {`
const Select = require("Select");

ReactDOM.render(
<div>
    <Slick layout="vertical">
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
