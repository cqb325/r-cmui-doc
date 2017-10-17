import React from 'react';
import BaseDemo from '../BaseDemo';
import FontIcon from 'r-cmui/components/FontIcon';
import Panel from 'r-cmui/components/Panel';
import Button from 'r-cmui/components/Button';
import Code from '../Code';

class Demo extends BaseDemo {
    render () {
        return (
            <div>
                <div className='code-box-demo'>
                    <Panel title='Panel Title' tools={
                        <span>
                            <a href='javascript:void(0)'>more</a>
                            <a href='javascript:void(0)'><FontIcon icon={'times'} className='ml-10'></FontIcon></a>
                        </span>
                    } footers={
                        <span>
                            <Button icon='save' theme='success'>Save</Button>,
                            <Button icon='flask' className='ml-10'>Cancel</Button>
                        </span>
                    }>
                        <p>Panel content</p>
                        <p>Panel content</p>
                        <p>Panel content</p>
                    </Panel>
                </div>
                <div className='code-box-desc'>
                    <div className='code-box-title'>简单用法</div>
                    <div>
                        简单用法。
                        <FontIcon icon={'chevron-circle-down'} ref='collapse' className='collapse' onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className='code-box-src' ref='boxSrc'>
                    <Code>
                        {`
import FontIcon from 'r-cmui/components/FontIcon';
import Panel from 'r-cmui/components/Panel';
import Button from 'r-cmui/components/Button';


ReactDOM.render(
    <Panel title="Panel Title" tools={
        <span>
            <a href="javascript:void(0)">more</a>,
            <a href="javascript:void(0)"><FontIcon icon={"times"} className="ml-10"></FontIcon></a>
        </span>
    } footers={
        <span>
            <Button icon="save" theme="success">Save</Button>,
            <Button icon="flask" className="ml-10">Cancel</Button>
        </span>
    }>
        <p>Panel content</p>
        <p>Panel content</p>
        <p>Panel content</p>
    </Panel>, mountNode);
`}
                    </Code>
                </div>
            </div>
        );
    }
}

export default Demo;
