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
                    <div style={{padding: 30, background: '#fff'}}>
                        <Menu layout='horizontal'>
                            <SubMenu title={<span><FontIcon icon='th-large'></FontIcon>Navigation One</span>}>
                                <MenuItemGroup title='Item Group'>
                                    <Menu.Item>item1</Menu.Item>
                                    <Menu.Item>item2</Menu.Item>
                                </MenuItemGroup>
                            </SubMenu>
                            <SubMenu disabled={true} title={<span><FontIcon icon='codepen'></FontIcon>Navigation Two</span>}></SubMenu>
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
                </div>
                <div className='code-box-desc'>
                    <div className='code-box-title'>顶部导航</div>
                    <div>
                        水平的顶部导航菜单。
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
    <div style={{padding: 30, background: "#fff"}}>
        <Menu layout="horizontal">
            <SubMenu title={<span><FontIcon icon="th-large"></FontIcon>Navigation One</span>}>
                <MenuItemGroup title="Item Group">
                    <Menu.Item>item1</Menu.Item>
                    <Menu.Item>item2</Menu.Item>
                </MenuItemGroup>
            </SubMenu>
            <SubMenu disabled={true} title={<span><FontIcon icon="codepen"></FontIcon>Navigation Two</span>}></SubMenu>
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
    </div>
</div>, mountNode);
`}
                    </Code>
                </div>
            </div>
        );
    }
}

export default Demo;
