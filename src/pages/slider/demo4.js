import React from 'react';
import BaseDemo from '../BaseDemo';
import FontIcon from 'r-cmui/components/FontIcon';
import Code from '../Code';
import Slider from 'r-cmui/components/Slider';

class Demo extends BaseDemo {
    render () {
        const marks = {
            0: '0°C',
            26: '26°C',
            37: '37°C',
            100: {
                style: {
                    color: '#f50'
                },
                label: <strong>100°C</strong>
            }
        };
        return (
            <div>
                <div className='code-box-demo'>
                    <Slider marks={marks} range value={[5,70]}/>
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
        const marks = {
            0: '0°C',
            26: '26°C',
            37: '37°C',
            100: {
                style: {
                    color: '#f50'
                },
                label: <strong>100°C</strong>
            }
        };
        return (
            <div>
                <Slider marks={marks} range value={[5,70]}/>
            </div>
        );
    }
`}
                    </Code>
                </div>
            </div>
        );
    }
}

export default Demo;
