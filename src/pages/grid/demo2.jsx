import React from 'react';
import BaseDemo from '../BaseDemo';
import FontIcon from 'r-cmui/components/FontIcon';
import Grid from 'r-cmui/components/Grid';
import Progress from 'r-cmui/components/Progress';
import Code from '../Code';

class Demo extends BaseDemo {
    columns = [
        {type: 'index', text: '序号'},
        {name: 'name', text: '名称', sort: true, sortType: 'string', tip: true},
        {name: 'domain', text: '域名', width: 200, resize: true, format: (value) => {
            return <span>
                {value}{value}{value}{value}{value}{value}{value}{value}
            </span>;
        }},
        {name: 'ip', text: 'IP'},
        {name: 'city', text: '城市'},
        {name: 'time', text: '时间', format: (v, column, row) => {
            return <Progress key={row.id} value={row.percent} strokeWidth={4} showPercent={false}/>;
        }}
    ];
    
    render () {
        const data = [];
        for (let i = 0; i < 1000; i++) {
            data.push({
                id: `id_${i}`,
                name: `name_${i}`,
                domain: `domain_${i}`,
                ip: `ip_${i}`,
                city: `city_${i}`,
                time: `time_${i}`,
                percent: Math.random() * 100
            });
        }
        return (
            <div>
                <div className='code-box-demo'>
                    <div style={{height: 500, width: 1200}}>
                        <Grid columns={this.columns} selectMode='row' border data={data} total={data.length} pageSize={20} pageNum={1}/>
                    </div>
                </div>
                <div className='code-box-desc'>
                    <div className='code-box-title'>基本用法</div>
                    <div>
                        名称字段可排序， 域名字段可拖拽，columns中字段指定sort为true的时候可排序，tip为true可对改字段提示，
                        resize为true时可以拖拽改变列的宽度，设置format可格式化该列显示的数据。
                        <FontIcon icon={'chevron-circle-down'} ref='collapse' className='collapse' onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className='code-box-src' ref='boxSrc'>
                    <Code className='language-jsx'>
                        {`
import Grid from 'r-cmui/components/Grid';
import Progress from 'r-cmui/components/Progress';

class Demo extends BaseDemo {
    columns = [
        {type: 'index', text: '序号'},
        {name: 'name', text: '名称', sort: true, sortType: 'string', tip: true},
        {name: 'domain', text: '域名', width: 200, resize: true, format: (value) => {
            return <span>
                {value}{value}{value}{value}{value}{value}{value}{value}
            </span>;
        }},
        {name: 'ip', text: 'IP'},
        {name: 'city', text: '城市'},
        {name: 'time', text: '时间', format: (v, column, row) => {
            return <Progress key={row.id} value={row.percent} strokeWidth={4} showPercent={false}/>;
        }}
    ];

    render () {
        const data = [];
        for (let i = 0; i < 1000; i++) {
            data.push({
                id: \`id_\${i}\`,
                name: \`name_\${i}\`,
                domain: \`domain_\${i}\`,
                ip: \`ip_\${i}\`,
                city: \`city_\${i}\`,
                time: \`time_\${i}\`,
                percent: Math.random() * 100
            });
        }
        return <div className='code-box-demo'>
            <div style={{height: 500, width: 1200}}>
                <Grid columns={this.columns} selectMode='row' border data={data} total={data.length} pageSize={20} pageNum={1}/>
            </div>
        </div>;
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
