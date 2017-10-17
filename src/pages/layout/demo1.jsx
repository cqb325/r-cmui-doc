import React from 'react';
import BaseDemo from '../BaseDemo';
import FontIcon from 'r-cmui/components/FontIcon';
import Layout from 'r-cmui/components/Layout';
import Sider from 'r-cmui/components/Layout/Sider';
import Code from '../Code';
const {Header, Content, Footer} = Layout;

class Demo extends BaseDemo {
    render () {
        return (
            <div>
                <div className='code-box-demo'>
                    <Layout className='demo-layout'>
                        <Header>Header</Header>
                        <Content>Content</Content>
                        <Footer>Footer</Footer>
                    </Layout>

                    <Layout className='demo-layout mt-30'>
                        <Header>Header</Header>
                        <Layout>
                            <Sider>Sider</Sider>
                            <Content>Content</Content>
                        </Layout>
                        <Footer>Footer</Footer>
                    </Layout>

                    <Layout className='demo-layout mt-30'>
                        <Header>Header</Header>
                        <Layout>
                            <Content>Content</Content>
                            <Sider>Sider</Sider>
                        </Layout>
                        <Footer>Footer</Footer>
                    </Layout>

                    <Layout className='demo-layout mt-30'>
                        <Sider>Sider</Sider>
                        <Layout>
                            <Header>Header</Header>
                            <Content>Content</Content>
                            <Footer>Footer</Footer>
                        </Layout>
                    </Layout>
                </div>
                <div className='code-box-desc'>
                    <div className='code-box-title'>基本用法</div>
                    <div>
                        基本布局
                        <FontIcon icon={'chevron-circle-down'} ref='collapse' className='collapse' onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className='code-box-src' ref='boxSrc'>
                    <Code>
                        {`
import Layout from 'r-cmui/components/Layout';
import Sider from 'r-cmui/components/Layout/Sider';
const {Header, Content, Footer} = Layout;


ReactDOM.render(
<div>
    <Layout className="demo-layout">
        <Header>Header</Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
    </Layout>

    <Layout className="demo-layout mt-30">
        <Header>Header</Header>
        <Layout>
            <Sider>Sider</Sider>
            <Content>Content</Content>
        </Layout>
        <Footer>Footer</Footer>
    </Layout>

    <Layout className="demo-layout mt-30">
        <Header>Header</Header>
        <Layout>
            <Content>Content</Content>
            <Sider>Sider</Sider>
        </Layout>
        <Footer>Footer</Footer>
    </Layout>

    <Layout className="demo-layout mt-30">
        <Sider>Sider</Sider>
        <Layout>
            <Header>Header</Header>
            <Content>Content</Content>
            <Footer>Footer</Footer>
        </Layout>
    </Layout>
</div>, mountNode);
`}
                    </Code>
                </div>
            </div>
        );
    }
}

export default Demo;
