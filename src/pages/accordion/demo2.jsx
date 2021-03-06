import React from 'react';
import BaseDemo from '../BaseDemo';
import FontIcon from 'r-cmui/components/FontIcon';
import Code from '../Code';
import Accordion from 'r-cmui/components/Accordion';

class Demo extends BaseDemo {
    render () {
        return (
            <div>
                <div className='code-box-demo'>
                    <Accordion style={{width: '500px'} } bordered>
                        <Accordion.Item title='Proactive Alerting' icon='square'>
                            {`Nothing is more important than getting timely and actionable data.
                            Same as Crashlytics, we've built a layer of intelligent post-processing
                            to alert you about key events within your app as they happen.`}
                        </Accordion.Item>
                        <Accordion.Item title='Powerful Developer Account' icon='calendar'>
                            {`With Fabric, you’ll have a single, dedicated developer account with
                            complete access to best-in-class mobile SDKs. Simply add a few lines
                            of code and start coding your app right away. We'll even provision
                            your keys for you.`}
                        </Accordion.Item>
                        <Accordion.Item title='整合的移动SDK' icon='th' open>
                            近几年来，移动SDK已呈现出爆炸式增长——每个SDK都致力于解决某个具体的问题。
                            虽然这为开发者提供了更多的解决方案和选择，来应对单个挑战，但是新的问题又
                            出现了:安装和管理门类广泛的SDK，可能是一项既繁琐又复杂的工程。
                        </Accordion.Item>
                        <Accordion.Item title='事件处理与合成事件' icon='ellipsis-h'>
                            Autobinding: 在 JavaScript 里创建回调的时候，为了保证 this 的正确性，
                            一般都需要显式地绑定方法到它的实例上。有了 React，所有方法被自动绑定到
                            了它的组件实例上。React 还缓存这些绑定方法，所以 CPU 和内存都是非常高效。
                            而且还能减少打字！
                        </Accordion.Item>
                    </Accordion>
                </div>
                <div className='code-box-desc'>
                    <div className='code-box-title'>默认open</div>
                    <div>
                        设置Accordion.Item的open属性  默认为打开状态
                        <FontIcon icon={'chevron-circle-down'} ref='collapse' className='collapse' onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className='code-box-src' ref='boxSrc'>
                    <Code className='language-jsx'>
                        {`
import Accordion from 'r-cmui/components/Accordion';

ReactDOM.render(
<div>
    <Accordion style={{width: '500px'} } onSelect={selectMenu} bordered>
        <Accordion.Item title="Proactive Alerting" icon="square">
            Nothing is more important than getting timely and actionable data.
            Same as Crashlytics, we've built a layer of intelligent post-processing
            to alert you about key events within your app as they happen.
        </Accordion.Item>
        <Accordion.Item title="Powerful Developer Account" icon="calendar">
            With Fabric, you’ll have a single, dedicated developer account with
            complete access to best-in-class mobile SDKs. Simply add a few lines
            of code and start coding your app right away. We'll even provision
            your keys for you.
        </Accordion.Item>
        <Accordion.Item title="整合的移动SDK" icon="th" open>
            近几年来，移动SDK已呈现出爆炸式增长——每个SDK都致力于解决某个具体的问题。
            虽然这为开发者提供了更多的解决方案和选择，来应对单个挑战，但是新的问题又
            出现了:安装和管理门类广泛的SDK，可能是一项既繁琐又复杂的工程。
        </Accordion.Item>
        <Accordion.Item title="事件处理与合成事件" icon="ellipsis-h">
            Autobinding: 在 JavaScript 里创建回调的时候，为了保证 this 的正确性，
            一般都需要显式地绑定方法到它的实例上。有了 React，所有方法被自动绑定到
            了它的组件实例上。React 还缓存这些绑定方法，所以 CPU 和内存都是非常高效。
            而且还能减少打字！
        </Accordion.Item>
    </Accordion>
</div>, mountNode);
`}
                    </Code>
                </div>
            </div>
        );
    }
}

export default Demo;
