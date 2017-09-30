import React, {PureComponent} from 'react';
import Label from 'r-cmui/components/Label';

import Demo4 from './demo4';
import Demo5 from './demo5';
import Demo6 from './demo6';
import Demo7 from './demo7';
import Demo8 from './demo8';
import Demo9 from './demo9';
import Demo10 from './demo10';
import Demo11 from './demo11';


class Page extends PureComponent{

    render(){
        return (
            <div className="main-container">
                <h1 className="page-h1">FontIcon 字体图标</h1>
                <blockquote className="page-tip">
                    语义化的矢量图形。
                </blockquote>

                <h1 className="page-h1">代码演示</h1>

                <h1 className="page-h1">Web Application Icons</h1>
                <Label grid={1}>
                    <Demo4/>
                </Label>

                <h1 className="page-h1">Accessibility Icons</h1>
                <Label grid={1}>
                    <Demo5/>
                </Label>

                <h1 className="page-h1">Hand Icons</h1>
                <Label grid={1}>
                    <Demo6/>
                </Label>

                <h1 className="page-h1">Transportation Icons</h1>
                <Label grid={1}>
                    <Demo7/>
                </Label>

                <h1 className="page-h1">Gender Icons</h1>
                <Label grid={1}>
                    <Demo8/>
                </Label>

                <h1 className="page-h1">File Type Icons</h1>
                <Label grid={1}>
                    <Demo9/>
                </Label>

                <h1 className="page-h1">Spinner Icons</h1>
                <Label grid={1}>
                    <Demo10/>
                </Label>

                <Demo11/>
            </div>
        );
    }
}

export default Page;
