import React from 'react';
import BaseDemo from '../BaseDemo';
import FontIcon from 'r-cmui/components/FontIcon';
import Code from '../Code';
import SimpleListPage from 'r-cmui/components/Business/SimpleListPage';
import Button from 'r-cmui/components/Button';
import Form from 'r-cmui/components/Form';
import FormControl from 'r-cmui/components/FormControl';
import 'r-cmui/components/Input';
import 'r-cmui/components/Select';
// import Mock from 'mockjs';

// Mock.mock(/getOperatorList\.html/, {'total|100-500':1,'pageSize': 10,'pageNum|1-50':1,'data|10':[{'id':'@string(8)','province': '@cname()','username':'@cname()','mobile':'@String(\'number\',11)','email':'@email','desc':'@string(15)','createTime': '@datetime()','status|0-1':1}]});

class Demo extends BaseDemo {
    render () {
        const columns = [
            {name: 'index', text: '序号', type: 'index'},
            {name: 'username', text: '用户名'},
            {name: 'mobile', text: '手机号码'},
            {name: 'email', text: '邮箱'},
            {name: 'createTime', text: '注册时间', sort: true},
            {name: 'status', text: '状态', format (value) {
                return ['禁用','激活'][value];
            }},
            {name: 'op', text: '操作', format (value, column, row) {
                if (row.status) {
                    return <a className='text-warning' href='javascript:void(0)' data-id="'+row.id+'">禁用</a>;
                } else {
                    return <a href='javascript:void(0)' className='text-success' data-id="'+row.id+'">激活</a>;
                }
            }}
        ];
        return (
            <div>
                <div className='code-box-demo'>
                    <Form className='search-wrap mb-10' ref={(f) => this.condition = f}>
                        <FormControl label='用户名' type='text' name='username'/>
                        <FormControl label='手机号' type='number' name='mobile'/>
                        <FormControl label='状态' type='select' name='status' data={[{id: '0', text: '禁用'},{id: '1', text: '激活'}]}/>
                        <Button theme='primary' ref={(f) => this.searchBtn = f}>查 询</Button>
                    </Form>
                    <SimpleListPage condition={() => this.condition} searchBtn={() => this.searchBtn} pagination columns={columns} action='http://172.18.34.66:8415/mock/cdn/getOperatorList.html'></SimpleListPage>
                </div>
                <div className='code-box-desc'>
                    <div className='code-box-title'>列表页组件的约定</div>
                    <div>
                        约定1：查询项的name是必须的,class 为searchItem<br/>
                        约定2：查询按钮的id为search-btn
                        <FontIcon icon={'chevron-circle-down'} ref='collapse' className='collapse' onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className='code-box-src' ref='boxSrc'>
                    <Code className='language-jsx'>
                        {`
import SimpleListPage from 'r-cmui/components/Business/SimpleListPage';
import Button from 'r-cmui/components/Button';
import Form from 'r-cmui/components/Form';
import FormControl from 'r-cmui/components/FormControl';
import 'r-cmui/components/Input';
import 'r-cmui/components/Select';

let columns = [
    {name: 'index', text: '序号', type: 'index'},
    {name: 'username', text: '用户名'},
    {name: 'mobile', text: '手机号码'},
    {name: 'email', text: '邮箱'},
    {name: 'createTime', text: '注册时间', sort: true},
    {name: 'status', text: '状态', format: function(value){
        return ['禁用','激活'][value];
    }},
    {name: 'op', text: '操作', format: function(value, column, row){
        if(row.status) {
            return <a className="text-warning" href="javascript:void(0)" data-id="'+row.id+'">禁用</a>;
        }else{
            return <a href="javascript:void(0)" className="text-success" data-id="'+row.id+'">激活</a>;
        }
    }}
];

ReactDOM.render(
<div>
    <Form className='search-wrap mb-10' ref={(f) => this.condition = f}>
        <FormControl label='用户名' type='text' name='username'/>
        <FormControl label='手机号' type='number' name='mobile'/>
        <FormControl label='状态' type='select' name='status' data={[{id: '0', text: '禁用'},{id: '1', text: '激活'}]}/>
        <Button theme='primary' ref={(f) => this.searchBtn = f}>查 询</Button>
    </Form>
    <SimpleListPage condition={() => this.condition} searchBtn={() => this.searchBtn} pagination columns={columns} action='http://172.18.34.66:8415/mock/cdn/getOperatorList.html'></SimpleListPage>
</div>, mountNode);
`}
                    </Code>
                </div>
            </div>
        );
    }
}

export default Demo;
