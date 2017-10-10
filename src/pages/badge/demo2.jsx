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
                    <Badge count="25"></Badge>
                    <Badge count="4" theme="success"></Badge>
                    <Badge count="999" theme="light"></Badge>
                </div>
                <div className="code-box-desc">
                    <div className="code-box-title">theme</div>
                    <div>
                        theme有success、light
                        <FontIcon icon={'chevron-circle-down'} ref="collapse" className="collapse" onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className="code-box-src" ref="boxSrc">
                    <Code className="language-jsx">
                        {`
import Badge from 'r-cmui/components/Badge';

ReactDOM.render(
<div>
    <Badge count="25"></Badge>
    <Badge count="4" theme="success"></Badge>
    <Badge count="999" theme="light"></Badge>
</div>, mountNode);
`}
                    </Code>
                </div>
            </div>
        );
    }
}

export default Demo;
