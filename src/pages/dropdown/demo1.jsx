import React from 'react';
import BaseDemo from '../BaseDemo';
import FontIcon from 'r-cmui/components/FontIcon';
import Code from '../Code';
import Menu from 'r-cmui/components/Menu';
import Dropdown from 'r-cmui/components/Dropdown';

class Demo extends BaseDemo{
    render(){
        let menu = <Menu>
            <Menu.Item>item1</Menu.Item>
            <Menu.Item>item2</Menu.Item>
            <Menu.Item>退出</Menu.Item>
            <Menu.Item disabled>item4(disabled)</Menu.Item>
        </Menu>;

        return (
            <div>
                <div className="code-box-demo">
                    <Dropdown overlay={menu}>欢迎您，admin</Dropdown>
                </div>
                <div className="code-box-desc">
                    <div className="code-box-title">基本用法</div>
                    <div>
                        简单用法
                        <FontIcon icon={'chevron-circle-down'} ref="collapse" className="collapse" onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className="code-box-src" ref="boxSrc">
                    <Code className="language-jsx">
                        {`
import Menu from 'r-cmui/components/Menu';
import Dropdown from 'r-cmui/components/Dropdown';

let menu = <Menu>
            <Menu.Item>item1</Menu.Item>
            <Menu.Item>item2</Menu.Item>
            <Menu.Item>退出</Menu.Item>
            <Menu.Item disabled>item4(disabled)</Menu.Item>
        </Menu>;

ReactDOM.render(
<Dropdown action="click" overlay={menu}>欢迎您，admin</Dropdown>, mountNode);
`}
                    </Code>
                </div>
            </div>
        );
    }
}

export default Demo;
