import React from 'react';
import BaseDemo from '../BaseDemo';
import FontIcon from 'r-cmui/components/FontIcon';
import Avatar from 'r-cmui/components/Avatar';
import Code from '../Code';
import imgSrc from '../../images/a2.jpg';

class Demo extends BaseDemo {
    render () {
        return (
            <div>
                <div className='code-box-demo'>
                    <Avatar icon='user' className='mr-5'/>
                    <Avatar className='mr-5'>M</Avatar>
                    <Avatar className='mr-5'>cmui</Avatar>
                    <Avatar src={imgSrc} className='mr-5'></Avatar>
                    <Avatar className='mr-5' style={{color: 'rgb(245, 106, 0)', backgroundColor: 'rgb(253, 227, 207)'}}>M</Avatar>
                    <Avatar icon='user' className='mr-5' style={{backgroundColor: 'rgb(135, 208, 104)'}}/>
                </div>
                <div className='code-box-desc'>
                    <div className='code-box-title'>类型</div>
                    <div>
                        类型可以使用文字，字体和图片
                        <FontIcon icon={'chevron-circle-down'} ref='collapse' className='collapse' onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className='code-box-src' ref='boxSrc'>
                    <Code className='language-jsx'>
                        {`
import Avatar from 'r-cmui/components/Avatar';

class Demo extends BaseDemo {
    render () {
        return <div className='code-box-demo'>
            <Avatar icon='user' className='mr-5'/>
            <Avatar className='mr-5'>M</Avatar>
            <Avatar className='mr-5'>cmui</Avatar>
            <Avatar src={imgSrc} className='mr-5'></Avatar>
            <Avatar className='mr-5' style={{color: 'rgb(245, 106, 0)', backgroundColor: 'rgb(253, 227, 207)'}}>M</Avatar>
            <Avatar icon='user' className='mr-5' style={{backgroundColor: 'rgb(135, 208, 104)'}}/>
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
