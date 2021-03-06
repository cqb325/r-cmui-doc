import React from 'react';
import BaseDemo from '../BaseDemo';
import FontIcon from 'r-cmui/components/FontIcon';
import Code from '../Code';
import Form from 'r-cmui/components/Form';
import FormControl from 'r-cmui/components/FormControl';
import 'r-cmui/components/Input';
import 'r-cmui/components/Select';
import 'r-cmui/components/TextArea';
import 'r-cmui/components/RadioGroup';
import 'r-cmui/components/CheckBoxGroup';
import 'r-cmui/components/DateTime';
import 'r-cmui/components/DateRange';
import 'r-cmui/components/Upload';

class Demo extends BaseDemo {
    openDialog () {
        this.refs.dialog.open();
    }

    render () {
        return (
            <div>
                <div className='code-box-demo'>
                    <Form layout='stack-inline' labelWidth={90}>
                        <FormControl type='text' label='Input' required name='input' messages={{required: '请输入input的内容'}}/>
                        <FormControl type='select' label='Select' required data={['Option1','Option2']} name='select'/>
                        <FormControl type='datetime' label='DateTime' required dateOnly name='datetime'/>
                        <FormControl type='daterange' label='DateRange' required maxRange={30} name='daterange'/>
                        <FormControl type='checkbox' label='checkbox' required data={[{id: '0', text: 'check1'},{id: '1', text: 'check2'}]} name='checkbox'/>
                        <FormControl type='radio' stick label='Radio' required data={[{id: '0', text: 'radio1'},{id: '1', text: 'radio2'}]} name='radio'/>
                        <FormControl type='file' label='Upload' required name='file'/>
                        <FormControl type='textarea' label='TextArea' height='50' autoHeight required name='textarea'/>
                    </Form>
                </div>
                <div className='code-box-desc'>
                    <div className='code-box-title'>验证</div>
                    <div>
                        简单用法
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
import 'r-cmui/components/TextArea';
import 'r-cmui/components/RadioGroup';
import 'r-cmui/components/CheckBoxGroup';
import 'r-cmui/components/DateTime';
import 'r-cmui/components/DateRange';
import 'r-cmui/components/Upload';

ReactDOM.render(
<div>
    <Form layout="stack-inline" labelWidth="80">
        <FormControl type="text" label="Input" required name="input" messages={{required: "请输入input的内容"}}/>
        <FormControl type="select" label="Select" required data={["Option1","Option2"]} name="select"/>
        <FormControl type="datetime" label="DateTime" required dateOnly name="datetime"/>
        <FormControl type="daterange" label="DateRange" required maxRange={30} name="daterange"/>
        <FormControl type="checkbox" label="checkbox" required data={[{id: "0", text: "check1"},{id: "1", text: "check2"}]} name="checkbox"/>
        <FormControl type="radio" stick label="Radio" required data={[{id: "0", text: "radio1"},{id: "1", text: "radio2"}]} name="radio"/>
        <FormControl type="file" label="Upload" required name="file"/>
        <FormControl type="textarea" label="TextArea" height="50" autoHeight required name="textarea"/>
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
