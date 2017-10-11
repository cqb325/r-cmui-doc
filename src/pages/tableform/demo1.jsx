import React from 'react';
import BaseDemo from '../BaseDemo';
import FontIcon from 'r-cmui/components/FontIcon';
import Code from '../Code';
import TableForm from 'r-cmui/components/Business/TableForm';
import Button from 'r-cmui/components/Button';
import ALL_DISTRICT from '../select/all_district';
import 'r-cmui/components/Input';
import 'r-cmui/components/Select';
import 'r-cmui/components/TextArea';

class Demo extends BaseDemo{

    addRow(){
        this.refs.tableForm.addRow();
    }

    removeRow(id){
        this.refs.tableForm.removeRowById(id);
    }

    getData(){
        console.log(this.refs.tableForm.getData());
    }


    onChange(name, value, col, items){
        if(name === 'loopDomain'){
            items['checkURL'].setValue('http://'+value);
        }
    }

    submit(){
        if(this.refs.tableForm.isValid()){
            //do submit
            console.log('valid all');
        }
    }

    render(){
        let columns = [
            {name: 'domain', type: 'text', text: '域名', props: {required: true, placeholder: 'www.baidu.com'}},
            {name: 'loopDomain', type: 'textarea', text: '回源IP/回源域名', props: {required: true}, messages: {required: '请填写回源IP/回源域名'}},
            {name: 'checkURL', type: 'textarea', text: '回源检测URL', props: {required: true}},
            {name: 'clientIP', type: 'select', text: '获取客户端IP', props: {required: true, defaultValue: '1', data: [{id: '0', text: '北京'},{id: '1', text: '上海'}]}},
            {name: 'district', type: 'select', text: '加速区域', props: {required: true, multi: true, data: ALL_DISTRICT}},
            {name: 'op', text: '操作', format: (value, column, row)=>{
                return <a href="javascript:void(0)" className="text-blue delete-btn" onClick={this.removeRow.bind(this, row.id)}><i className="fa fa-trash"></i>删除</a>;
            }},
        ];

        return (
            <div>
                <div className="code-box-demo">
                    <TableForm ref="tableForm" bordered columns={columns} className="form-table text-center" onChange={this.onChange.bind(this)}></TableForm>

                    <div className="mt-25 text-center">
                        <Button theme="primary" onClick={this.submit.bind(this)}>提 交</Button>
                    </div>

                    <div className="mt-20">
                        <Button onClick={this.addRow.bind(this)}>添加</Button>
                        <Button onClick={this.getData.bind(this)}>获取数据</Button>
                    </div>

                </div>
                <div className="code-box-desc">
                    <div className="code-box-title">简单的表单</div>
                    <div>
                        通过配置来展现表单<br/>
                        <FontIcon icon={'chevron-circle-down'} ref="collapse" className="collapse" onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className="code-box-src" ref="boxSrc">
                    <Code className="language-jsx">
                        {`
const SimpleForm = require("business/SimpleForm");

addRow(){
    this.refs.tableForm.addRow();
}

removeRow(id){
    this.refs.tableForm.removeRowById(id);
}

getData(){
    console.log(this.refs.tableForm.getData());
}


onChange(name, value, col, items){
    if(name === 'loopDomain'){
        items['checkURL'].setValue('http://'+value);
    }
}

submit(){
    if(this.refs.tableForm.isValid()){
        //do submit
        console.log('valid all');
    }
}

let columns = [
    {name: 'domain', type: 'text', text: '域名', props: {required: true, placeholder: 'www.baidu.com'}},
    {name: 'loopDomain', type: 'textarea', text: '回源IP/回源域名', props: {required: true}, messages: {required: '请填写回源IP/回源域名'}},
    {name: 'checkURL', type: 'textarea', text: '回源检测URL', props: {required: true}},
    {name: 'clientIP', type: 'select', text: '获取客户端IP', props: {required: true, defaultValue: '1', data: [{id: '0', text: '北京'},{id: '1', text: '上海'}]}},
    {name: 'district', type: 'select', text: '加速区域', props: {required: true, multi: true, data: ALL_DISTRICT}},
    {name: 'op', text: '操作', format: (value, column, row)=>{
        return <a href="javascript:void(0)" className="text-blue delete-btn" onClick={this.removeRow.bind(this, row.id)}><i className="fa fa-trash"></i>删除</a>;
    }},
];

ReactDOM.render(
<div>
    <TableForm ref="tableForm" bordered columns={columns} className="form-table text-center" onChange={this.onChange.bind(this)}></TableForm>

    <div className="mt-25 text-center">
        <Button theme="primary" onClick={this.submit.bind(this)}>提 交</Button>
    </div>

    <div className="mt-20">
        <Button onClick={this.addRow.bind(this)}>添加</Button>
        <Button onClick={this.getData.bind(this)}>获取数据</Button>
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
