import React from 'react';
import BaseDemo from '../BaseDemo';
import FontIcon from 'r-cmui/components/FontIcon';
import Code from '../Code';
import Menu from 'r-cmui/components/Menu';
const {SubMenu, MenuItemGroup} = Menu;

class Demo extends BaseDemo {
    render () {
        return (
            <div>
                <div className='code-box-demo'>
                    <Menu style={{width: 300}} layout='vertical'>
                        <SubMenu title={<span><FontIcon icon='th-large'></FontIcon>Navigation One</span>}>
                            <MenuItemGroup title='Item Group'>
                                <Menu.Item>item1</Menu.Item>
                                <Menu.Item>item2</Menu.Item>
                            </MenuItemGroup>
                            <SubMenu title='SubMenu'>
                                <Menu.Item>item2</Menu.Item>
                                <Menu.Item>item2</Menu.Item>
                            </SubMenu>
                        </SubMenu>
                        <SubMenu title={<span><FontIcon icon='codepen'></FontIcon>Navigation Three</span>}>
                            <MenuItemGroup title='Item 1'>
                                <Menu.Item>item21</Menu.Item>
                                <Menu.Item>item22</Menu.Item>
                            </MenuItemGroup>
                            <MenuItemGroup title='Item 2'>
                                <Menu.Item>item21</Menu.Item>
                                <Menu.Item>item22</Menu.Item>
                            </MenuItemGroup>
                        </SubMenu>
                    </Menu>
                </div>
                <div className='code-box-desc'>
                    <div className='code-box-title'>竖直菜单</div>
                    <div>
                        竖直菜单。
                        <FontIcon icon={'chevron-circle-down'} ref='collapse' className='collapse' onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className='code-box-src' ref='boxSrc'>
                    <Code className='language-jsx'>
                        {`
import FontIcon from 'r-cmui/components/FontIcon';
import Menu from 'r-cmui/components/Menu';
const {SubMenu, MenuItemGroup} = Menu;


ReactDOM.render(
<div>
    <Menu style={{width: 300}}>
        <SubMenu title={<span><FontIcon icon="th-large"></FontIcon>Navigation One</span>}>
            <MenuItemGroup title="Item Group">
                <Menu.Item>item1</Menu.Item>
                <Menu.Item>item2</Menu.Item>
            </MenuItemGroup>
            <SubMenu title="SubMenu">
                <Menu.Item>item2</Menu.Item>
                <Menu.Item>item2</Menu.Item>
            </SubMenu>
        </SubMenu>
        <SubMenu title={<span><FontIcon icon="codepen"></FontIcon>Navigation Three</span>}>
            <MenuItemGroup title="Item 1">
                <Menu.Item>item21</Menu.Item>
                <Menu.Item>item22</Menu.Item>
            </MenuItemGroup>
            <MenuItemGroup title="Item 2">
                <Menu.Item>item21</Menu.Item>
                <Menu.Item>item22</Menu.Item>
            </MenuItemGroup>
        </SubMenu>
    </Menu>
</div>, mountNode);
`}
                    </Code>
                </div>
            </div>
        );
    }
}

export default Demo;
