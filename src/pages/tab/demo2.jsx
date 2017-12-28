import React from 'react';
import BaseDemo from '../BaseDemo';
import FontIcon from 'r-cmui/components/FontIcon';
import Code from '../Code';
import Tab from 'r-cmui/components/Tab';

class Demo extends BaseDemo {
    render () {
        return (
            <div>
                <div className='code-box-demo'>
                    <Tab activeKey='product'>
                        <Tab.Item key='sale' title='销售额'>
                            sale info
                        </Tab.Item>
                        <Tab.Item key='product' title='产品'>
                            product info
                        </Tab.Item>
                    </Tab>
                </div>
                <div className='code-box-desc'>
                    <div className='code-box-title'>基本用法</div>
                    <div>
                        简单用法
                        <FontIcon icon={'chevron-circle-down'} ref='collapse' className='collapse' onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className='code-box-src' ref='boxSrc'>
                    <Code>
                        {`
import Tab from 'r-cmui/components/Tab';

ReactDOM.render(
<div>
    <Tab activeKey='product'>
        <Tab.Item key='sale'>
            sale info
        </Tab.Item>
        <Tab.Item key='product'>
            product info
        </Tab.Item>
    </Tab>
</div>, mountNode);
`}
                    </Code>
                </div>
            </div>
        );
    }
}

export default Demo;
