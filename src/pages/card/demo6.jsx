import React from 'react';
import BaseDemo from '../BaseDemo';
import FontIcon from 'r-cmui/components/FontIcon';
import Card from 'r-cmui/components/Card';
import Button from 'r-cmui/components/Button';
import Code from '../Code';

class Demo extends BaseDemo{

    setTitle(){
        this.refs.card.setTitle('New Card Title');
    }

    setContent(){
        this.refs.card.setContent(<div>
            <p>New Card content</p>
            <p>New Card content</p>
            <p>New Card content</p>
        </div>);
    }

    render(){
        return (
            <div>
                <div className="code-box-demo">
                    <Card ref="card" title="Card Title" loadding={true} style={{width: 340}}>
                        <p>Card content</p>
                    </Card>

                    <div className="mt-15">
                        <Button onClick={this.setTitle.bind(this)}>改变标题</Button>
                        <Button onClick={this.setContent.bind(this)} className="ml-10">改变内容</Button>
                    </div>
                </div>
                <div className="code-box-desc">
                    <div className="code-box-title">栅格卡片</div>
                    <div>
                        在系统概览页面常常和栅格进行配合。
                        <FontIcon icon={'chevron-circle-down'} ref="collapse" className="collapse" onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className="code-box-src" ref="boxSrc">
                    <Code>
                        {`
import Card from 'r-cmui/components/Card';
import Button from 'r-cmui/components/Button';

setTitle(){
    this.refs.card.setTitle("New Card Title");
}

setContent(){
    this.refs.card.setContent(<div>
        <p>New Card content</p>
        <p>New Card content</p>
        <p>New Card content</p>
    </div>);
}

ReactDOM.render(
<div style={{background: '#ECECEC', padding: '30px'}} className="mt-20">
    <Card ref="card" title="Card Title" loadding={true} style={{width: 340}}>
        <p>Card content</p>
    </Card>

    <div className="mt-15">
        <Button onClick={this.setTitle.bind(this)}>改变标题</Button>
        <Button onClick={this.setContent.bind(this)} className="ml-10">改变内容</Button>
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
