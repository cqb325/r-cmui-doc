import React from 'react';
import Layout from 'r-cmui/components/Layout';
import Button from 'r-cmui/components/Button';
import Sider from 'r-cmui/components/Layout/Sider';
import Nav from './Nav';
const {Header, Content} = Layout;

class App extends React.Component {
    displayName = 'App';
    render () {
        return (
            <Layout className='app'>
                <Header>
                    <h3>CMUI v2.4.1
                        <span className='pull-right'>
                            <Button theme='primary' href={'./design/cmui/index.html'} target='_blank'>Design</Button>
                        </span>
                    </h3>
                </Header>
                <Layout>
                    <Sider>
                        <Nav/>
                    </Sider>
                    <Content>
                        {this.props.children}
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default App;
