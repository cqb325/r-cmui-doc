import React from 'react';
import BaseDemo from '../BaseDemo';
import FontIcon from 'r-cmui/components/FontIcon';
import Code from '../Code';
import Select from 'r-cmui/components/Select';

class Demo extends BaseDemo {
    render () {
        const data = [
            {'id':'110000','text':'北京'},
            {'id':'120000','text':'天津'},
            {'id':'310000','text':'上海'}
        ];


        return (
            <div>
                <div className='code-box-demo'>
                    <Select data={data} value='110000' disabled />
                </div>
                <div className='code-box-desc'>
                    <div className='code-box-title'>禁用</div>
                    <div>
                        禁用状态的select
                        <FontIcon icon={'chevron-circle-down'} ref='collapse' className='collapse' onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className='code-box-src' ref='boxSrc'>
                    <Code className='language-jsx'>
                        {`
import Select from 'r-cmui/components/Select';

let data = [
    {"id":"110000","text":"北京"},
    {"id":"120000","text":"天津"},
    {"id":"310000","text":"上海"}
];

ReactDOM.render(
<div>
    <Select data={data} value="110000" disabled />
</div>, mountNode);
`}
                    </Code>
                </div>
            </div>
        );
    }
}

export default Demo;
