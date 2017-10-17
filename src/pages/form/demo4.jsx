import React from 'react';
import BaseDemo from '../BaseDemo';
import FontIcon from 'r-cmui/components/FontIcon';
import Code from '../Code';
import Form from 'r-cmui/components/Form';
import FormControl from 'r-cmui/components/FormControl';
import 'r-cmui/components/Input';
import 'r-cmui/components/Select';
import 'r-cmui/components/DateTime';

class Demo extends BaseDemo {
    openDialog () {
        this.refs.dialog.open();
    }

    render () {
        return (
            <div>
                <div className='code-box-demo'>
                    <Form layout='stack' labelWidth={80} method='post' ajax action='server/api'>
                        <FormControl type='text' label='Input' required name='input' messages={{required: '请输入input的内容'}}/>
                        <FormControl type='select' label='Select' required data={['Option1','Option2']} name='select'/>
                        <FormControl type='datetime' label='DateTime' required dateOnly name='datetime'/>
                    </Form>
                </div>
                <div className='code-box-desc'>
                    <div className='code-box-title'>method</div>
                    <div>
                        method 支持get post 、ajax和custom, get和post使用表单方式提交，ajax以ajax方式提交，custom自定义方式。
                        <FontIcon icon={'chevron-circle-down'} ref='collapse' className='collapse' onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className='code-box-src' ref='boxSrc'>
                    <Code>
                        {`
import Form from 'r-cmui/components/Form';
import FormControl from 'r-cmui/components/FormControl';
import 'r-cmui/components/Input';
import 'r-cmui/components/Select';
import 'r-cmui/components/DateTime';

ReactDOM.render(
<div>
    <Form layout="stack" labelWidth={80} method="post" ajax action="server/api">
        <FormControl type="text" label="Input" required name="input" messages={{required: '请输入input的内容'}}/>
        <FormControl type="select" label="Select" required data={['Option1','Option2']} name="select"/>
        <FormControl type="datetime" label="DateTime" required dateOnly name="datetime"/>
    </Form>
</div>, mountNode);
`}
                    </Code>
                </div>
            </div>
        );
    }
}

export default Demo;
