import React from 'react';
import BaseDemo from '../BaseDemo';
import Button from 'r-cmui/components/Button';
import ButtonGroup from 'r-cmui/components/ButtonGroup';
import FontIcon from 'r-cmui/components/FontIcon';
import Code from '../Code';

class Demo extends BaseDemo{

    constructor(props){
        super(props);

        this.state = {
            size: 'default'
        };
    }

    componentDidMount(){
        this.refs.btnGroup.on('select', (btn)=>{
            let size = btn.props['data-size'];
            this.setState({
                size: size
            });
        });
    }

    render(){
        return (
            <div>
                <div className="code-box-demo">
                    <div>
                        <ButtonGroup ref="btnGroup">
                            <Button theme="primary" data-size="small">Small</Button>
                            <Button theme="primary" active={true} data-size="default">Default</Button>
                            <Button theme="primary" data-size="large">Large</Button>
                        </ButtonGroup>
                    </div>
                    <div className="mt-15">
                        <Button theme="primary" size={this.state.size} icon="cloud"></Button>
                        <Button theme="primary" size={this.state.size} raised={true} className="ml-10">Raised</Button>
                        <Button theme="primary" size={this.state.size} raised={true} icon="download" className="ml-10">Download</Button>
                    </div>
                </div>
                <div className="code-box-desc">
                    <div className="code-box-title">按钮组合事件</div>
                    <div>
                        ButtonGroup可以添加onSelect事件，也接受on("select")事件监听 事件回调包含一个Button类型的参数，为当前选中的Button。
                        <FontIcon icon={'chevron-circle-down'} ref="collapse" className="collapse" onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className="code-box-src" ref="boxSrc">
                    <Code>
                        {`
import Button from 'r-cmui/components/Button';
import ButtonGroup from 'r-cmui/components/ButtonGroup';

class Demo extends BaseDemo{

    constructor(props){
        super(props);

        this.state = {
            size: "default"
        }
    }

    componentDidMount(){
        this.refs.btnGroup.on("select", (btn)=>{
            let size = btn.props["data-size"];
            this.setState({
                size: size
            });
        });
    }

    render(){
        <div>
            <div>
                <ButtonGroup ref="btnGroup">
                    <Button theme="primary" data-size="small">Small</Button>
                    <Button theme="primary" active={true} data-size="default">Default</Button>
                    <Button theme="primary" data-size="large">Large</Button>
                </ButtonGroup>
            </div>
            <div className="mt-15">
                <Button theme="primary" size={this.state.size} icon="cloud"></Button>
                <Button theme="primary" size={this.state.size} raised={true} className="ml-10">Raised</Button>
                <Button theme="primary" size={this.state.size} raised={true} icon="download" className="ml-10">Download</Button>
            </div>
        </div>
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
