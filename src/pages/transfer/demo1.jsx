import React from 'react';
import BaseDemo from '../BaseDemo';
import FontIcon from 'r-cmui/components/FontIcon';
import Transfer from 'r-cmui/components/Transfer';
import Code from '../Code';

class Demo extends BaseDemo {
    render () {
        const data = [];
        const transfered = '0,1';
        for (let i = 0; i < 15; i++) {
            data.push({
                id: `${i}`,
                text: `item${i}`,
                disabled: Math.random() < 0.3 ? true : false
            });
        }

        return (
            <div>
                <div className='code-box-demo'>
                    <Transfer data={data} transfered={transfered}/>
                </div>
                <div className='code-box-desc'>
                    <div className='code-box-title'>基本用法</div>
                    <div>
                        简单用法
                        <FontIcon icon={'chevron-circle-down'} ref='collapse' className='collapse' onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className='code-box-src' ref='boxSrc'>
                    <Code className='language-jsx'>
                        {`
import Transfer from 'r-cmui/components/Transfer';

class Demo extends BaseDemo {
    render () {
        const data = [];
        const transfered = '0,1';
        for (let i = 0; i < 15; i++) {
            data.push({
                id: \`\${i}\`,
                text: \`item\${i}\`,
                disabled: Math.random() < 0.3 ? true : false
            });
        }
        return <div className='code-box-demo'>
            <Transfer data={data} transfered={transfered}/>
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
