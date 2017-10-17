import React from 'react';
import BaseDemo from '../BaseDemo';
import FontIcon from 'r-cmui/components/FontIcon';
import Code from '../Code';
import Progress from 'r-cmui/components/Progress';


class Demo extends BaseDemo {
    render () {
        return (
            <div>
                <div className='code-box-demo'>
                    <Progress value={75} type='circle' className='mr-20' format={(percent) => { return `${percent}DAYS`; }}></Progress>
                    <Progress value={100} type='circle' className='mr-20' format={() => { return 'DONE'; }}></Progress>
                </div>
                <div className='code-box-desc'>
                    <div className='code-box-title'>自定义显示</div>
                    <div>
                        使用format自定义显示
                        <FontIcon icon={'chevron-circle-down'} ref='collapse' className='collapse' onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className='code-box-src' ref='boxSrc'>
                    <Code>
                        {`
import Progress from 'r-cmui/components/Progress';

ReactDOM.render(
<div>
    <Progress value={75} type="circle" className="mr-20" format={(percent)=>{return percent + "DAYS";}}></Progress>
    <Progress value={100} type="circle" className="mr-20" format={()=>{return "DONE";}}></Progress>
</div>, mountNode);
`}
                    </Code>
                </div>
            </div>
        );
    }
}

export default Demo;
