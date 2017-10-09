import React from 'react';
import BaseDemo from '../BaseDemo';
import FontIcon from 'r-cmui/components/FontIcon';
import Code from '../Code';
import Select from 'r-cmui/components/Select';

class Demo extends BaseDemo{
    render(){
        let data = [
            {'id':'110000','text':'北京'},
            {'id':'120000','text':'天津'},
            {'id':'310000','text':'上海'}
        ];


        return (
            <div>
                <div className="code-box-demo">
                    <Select data={data} value="110000" multi />
                    <div className="mt-10"></div>
                    <Select data={data} value="110000" multi sep=";" />
                </div>
                <div className="code-box-desc">
                    <div className="code-box-title">多选</div>
                    <div>
                        多选选择框,设置multi为true， sep属性可以设置多值之间的分隔符
                        <FontIcon icon={'chevron-circle-down'} ref="collapse" className="collapse" onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className="code-box-src" ref="boxSrc">
                    <Code className="language-jsx">
                        {`
import Select from 'r-cmui/components/Select';

let data = [
    {"id":"110000","text":"北京"},
    {"id":"120000","text":"天津"},
    {"id":"310000","text":"上海"}
];

ReactDOM.render(
<div>
    <Select data={data} value="110000" multi />
    <div className="mt-10"></div>
    <Select data={data} value="110000" multi sep=";" />
</div>, mountNode);
`}
                    </Code>
                </div>
            </div>
        );
    }
}

export default Demo;
