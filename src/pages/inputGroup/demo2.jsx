import React from 'react';
import BaseDemo from '../BaseDemo';
import FontIcon from 'r-cmui/components/FontIcon';
import Input from 'r-cmui/components/Input';
import InputGroup from 'r-cmui/components/InputGroup';
import Select from 'r-cmui/components/Select';
import Code from '../Code';

class Demo extends BaseDemo {
    protocal = [{id: 'http', text: 'http://'}, {id: 'https', text: 'https://'}];
    select1 = <Select minWidth={50} data={this.protocal} value='http'></Select>;
    
    render () {
        return (
            <div>
                <div className='code-box-demo'>
                    <InputGroup size='small'>
                        {this.select1}
                        <Input style={{width: '100%'}}/>
                    </InputGroup>
                </div>
                <div className='code-box-desc'>
                    <div className='code-box-title'>下拉选择加输入框</div>
                    <div>
                        下拉选择样例
                        <FontIcon icon={'chevron-circle-down'} ref='collapse' className='collapse' onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className='code-box-src' ref='boxSrc'>
                    <Code>
                        {`
import Input from 'r-cmui/components/Input';
import InputGroup from 'r-cmui/components/InputGroup';
import Select from 'r-cmui/components/Select';

protocal = [{id: 'http', text: 'http://'}, {id: 'https', text: 'https://'}];
select1 = <Select minWidth={50} data={this.protocal} value='http'></Select>;

ReactDOM.render(
<div>
    <InputGroup size='small'>
        {this.select1}
        <Input style={{width: '100%'}}/>
    </InputGroup>
</div>, mountNode);
`}
                    </Code>
                </div>
            </div>
        );
    }
}

export default Demo;
