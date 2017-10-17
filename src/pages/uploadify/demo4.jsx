import React from 'react';
import BaseDemo from '../BaseDemo';
import FontIcon from 'r-cmui/components/FontIcon';
import Code from '../Code';
import Uploadify from 'r-cmui/components/Uploadify';

class Demo extends BaseDemo {
    render () {
        return (
            <div>
                <div className='code-box-demo'>
                    <Uploadify maxSize='100kb' mimeTypes={[{title : 'Image files', extensions : 'jpg,gif,png'}]} mode='grid' url='http://192.168.105.202:8415/mock/test/uploadify/upload' auto />
                </div>
                <div className='code-box-desc'>
                    <div className='code-box-title'>上传大小，文件类型限制</div>
                    <div>
                        maxSize属性可以限制上传文件大小， 单位支持b,kb,mb,gb;
                        mimeTypes可以过滤文件类型 类似 {'[{title: "Image files", extensions : "jpg,gif,png"}]'}
                        <FontIcon icon={'chevron-circle-down'} ref='collapse' className='collapse' onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className='code-box-src' ref='boxSrc'>
                    <Code className='language-jsx'>
                        {`
import Uploadify from 'r-cmui/components/Uploadify';

ReactDOM.render(
<div>
    <Uploadify maxSize="100kb" mimeTypes={[{title : "Image files", extensions : "jpg,gif,png"}]} mode="grid" url="http://192.168.105.202:8415/mock/test/uploadify/upload" auto />
</div>, mountNode);
`}
                    </Code>
                </div>
            </div>
        );
    }
}

export default Demo;
