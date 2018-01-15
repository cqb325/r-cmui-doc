import React from 'react';
import BaseDemo from '../BaseDemo';
import FontIcon from 'r-cmui/components/FontIcon';
import ContextMenu from 'r-cmui/components/ContextMenu';
import Menu from 'r-cmui/components/Menu';
import Code from '../Code';

class Demo extends BaseDemo {
    renderMenu () {
        return <Menu>
            <Menu.Item><FontIcon icon='copy'></FontIcon>Copy</Menu.Item>
            <Menu.Item><FontIcon icon='paste'></FontIcon>Paste</Menu.Item>
            <Menu.Item><FontIcon icon='folder'></FontIcon>Build Folder</Menu.Item>
            <Menu.Item><FontIcon icon='file'></FontIcon>Build File</Menu.Item>
        </Menu>;
    }

    render () {
        return (
            <div>
                <div className='code-box-demo'>
                    <ContextMenu overlay={this.renderMenu()}>
                        <div style={{height: 250, textAlign: 'center', lineHeight: '250px'}}>
                            <span style={{fontSize: 24}}>Right click here！</span>
                        </div>
                    </ContextMenu>
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
import FontIcon from 'r-cmui/components/FontIcon';
import ContextMenu from 'r-cmui/components/ContextMenu';
import Menu from 'r-cmui/components/Menu';

class Demo extends BaseDemo {
    render () {
        return <div className='code-box-demo'>
            <ContextMenu overlay={this.renderMenu()}>
                <div style={{height: 250, textAlign: 'center', lineHeight: '250px'}}>
                    <span style={{fontSize: 24}}>Right click here！</span>
                </div>
            </ContextMenu>
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
