import React, {PureComponent} from 'react';
import Label from 'r-cmui/components/Label';

import Demo1 from './demo1';
import Demo2 from './demo2';
import Demo3 from './demo3';

class Page extends PureComponent {
    render () {
        return (
            <div className='main-container'>
                <h1 className='page-h1'>Grid 栅格</h1>
                <blockquote className='page-tip'>
                    无极栅格。
                </blockquote>

                <h1 className='page-h1'>代码演示</h1>

                <Label grid={1} className='code-col'>
                    <Label className='code-box'>
                        <Demo1></Demo1>
                    </Label>
                </Label>

                <Label grid={1} className='code-col'>
                    <Label className='code-box'>
                        <Demo2></Demo2>
                    </Label>
                </Label>

                <Label grid={1} className='code-col'>
                    <Label className='code-box'>
                        <Demo3></Demo3>
                    </Label>
                </Label>
            </div>
        );
    }
}

export default Page;
