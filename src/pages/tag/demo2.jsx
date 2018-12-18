import React from 'react';
import BaseDemo from '../BaseDemo';
import FontIcon from 'r-cmui/components/FontIcon';
import Tags from 'r-cmui/components/Tag/Tags';
import Code from '../Code';

class Demo extends BaseDemo {
    render () {
        const data = [
            {id: '1', text: 'Tag1'},
            {id: '2', text: 'Tag2'},
            {id: '3', text: 'Tag3'},
            {id: '4', text: 'Tag4'},
            {id: '5', text: 'Tag5'}
        ];
        return (
            <div>
                <div className='code-box-demo'>
                    <Tags data={data} closable theme='primary'/>
                </div>
                <div className='code-box-desc'>
                    <div className='code-box-title'>data数据</div>
                    <div>
                        可以根据传入的data数据参数渲染tag
                        <FontIcon icon={'chevron-circle-down'} ref='collapse' className='collapse' onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className='code-box-src' ref='boxSrc'>
                    <Code className='language-jsx'>
                        {`
import Tags from 'r-cmui/components/Tag/Tags';

class Demo extends BaseDemo {
    render () {
        let data = [
            {id: '1', text: 'Tag1'},
            {id: '2', text: 'Tag2'},
            {id: '3', text: 'Tag3'},
            {id: '4', text: 'Tag4'},
            {id: '5', text: 'Tag5'}
        ];
        return <div className='code-box-demo'>
            <Tags data={data} closable theme='primary'/>
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
