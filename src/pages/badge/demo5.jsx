import React from 'react';
import BaseDemo from '../BaseDemo';
import FontIcon from 'r-cmui/components/FontIcon';
import Code from '../Code';
import Badge from 'r-cmui/components/Badge';

class Demo extends BaseDemo{
    render(){
        return (
            <div>
                <div className="code-box-demo">
                    <Badge dot>
                        <FontIcon icon="book" size="3x"></FontIcon>
                    </Badge>

                    <Badge dot={false} count={511}>
                        <FontIcon icon="book" size="3x"></FontIcon>
                    </Badge>

                </div>
                <div className="code-box-desc">
                    <div className="code-box-title">dot</div>
                    <div>
                        dot 为 true 只显示红点 false就不显示点
                        <FontIcon icon={'chevron-circle-down'} ref="collapse" className="collapse" onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className="code-box-src" ref="boxSrc">
                    <Code className="language-jsx">
                        {`
import Badge from 'r-cmui/components/Badge';

ReactDOM.render(
<div>
    <Badge dot>
        <FontIcon icon="book" size="3x"></FontIcon>
    </Badge>

    <Badge dot={false}>
        <FontIcon icon="book" size="3x"></FontIcon>
    </Badge>
</div>, mountNode);
`}
                    </Code>
                </div>
            </div>
        );
    }
}

export default Demo;
