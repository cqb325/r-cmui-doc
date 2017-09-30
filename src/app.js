import React from 'react';
import Layout from 'r-cmui/components/Layout';
import Sider from 'r-cmui/components/Layout/Sider';
import Nav from './Nav';
const {Header, Content} = Layout;

class App extends React.Component{
    render(){
        return (
            <Layout className="app">
                <Header>
                    <h3>CMUI v2.0.1</h3>
                </Header>
                <Layout>
                    <Sider>
                        <Nav/>
                    </Sider>
                    <Content>
                        <div className="main-container">
                            {this.props.children}
                        </div>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default App;
