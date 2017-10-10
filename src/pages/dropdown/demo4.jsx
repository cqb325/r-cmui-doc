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
                    <Dropdown action="click" overlay={menu} align="bottomRight">click me</Dropdown>
                    <Dropdown action="click" overlay={menu} align="topRight"><span className="ml-20">click me</span></Dropdown>
                </div>
                <div className="code-box-desc">
                    <div className="code-box-title">align</div>
                    <div>
                        align 默认是 bottomLeft， 支持八个方位  同Tooltip的align
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
<div>
    <Dropdown action="click" overlay={menu} align="bottomRight">click me</Dropdown>
    <Dropdown action="click" overlay={menu} align="topRight"><span className="ml-20">click me</span></Dropdown>
</div>, mountNode);
`}
                    </Code>
                </div>
            </div>
        );
    }
}

export default Demo;
