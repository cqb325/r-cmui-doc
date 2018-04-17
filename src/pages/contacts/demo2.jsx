import React from 'react';
import BaseDemo from '../BaseDemo';
import FontIcon from 'r-cmui/components/FontIcon';
import Contacts from 'r-cmui/components/Contacts';
import Code from '../Code';

class Demo extends BaseDemo {
    data = {
        'A': [{name: '安徽', email: 'asd@asd.com', id: '1'},{name: '安阳', email: 'asd@asd.com', id: '2'}],
        'B': [{name: '北京市', email: 'asd@asd.com', id: '北京市'}],
        'C': [{name: '重庆市', email: 'asd@asd.com', id: '重庆市'}],
        'D': [{name: '东阳市', email: 'asd@asd.com', id: '东阳市'}],
        'E': [{name: '鄂城', email: 'asd@asd.com', id: '鄂城'}],
        'F': [{name: '福州市', email: 'asd@asd.com', id: '福州市'}],
        'J': [{name: '金华', email: 'asd@asd.com', id: '金华'}],
        'Z': [{name: '浙江', email: 'asd@asd.com', id: '浙江'}]
    }

    remove (chart, item) {
        alert(`remove:${item}`);
        this.contacts.removeItem(chart, item);
    }

    update (chart, item) {
        alert(`update :${item}`);
        item.name = 'aaaa';
        this.contacts.updateItem(chart, item, item);
    }

    renderItem = (chart, item) => {
        return <dd key={item.id} data-link={chart} className={item._active ? 'active' : ''}>
            {item.name}
            <span className='pull-right'>
                <FontIcon icon='edit' title='编辑' className='mr-5 text-link' onClick={this.update.bind(this, chart, item)}/>
                <FontIcon icon='trash' title='删除' className='text-danger' onClick={this.remove.bind(this, chart, item)}/>
            </span>
        </dd>;
    }

    render () {
        return (
            <div>
                <div className='code-box-demo'>
                    <div style={{height: 500}}>
                        <Contacts ref={(f) => this.contacts = f} data={this.data} renderItem={this.renderItem}></Contacts>
                    </div>
                </div>
                <div className='code-box-desc'>
                    <div className='code-box-title'>自定义渲染</div>
                    <div>
                        指定renderItem可以自定义渲染每个选项
                        <FontIcon icon={'chevron-circle-down'} ref='collapse' className='collapse' onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className='code-box-src' ref='boxSrc'>
                    <Code className='language-jsx'>
                        {`
import Contacts from 'r-cmui/components/Contacts';

data = {
    'A': [{name: '安徽', email: 'asd@asd.com', id: '1'},{name: '安阳', email: 'asd@asd.com', id: '2'}],
    'B': [{name: '北京市', email: 'asd@asd.com', id: '北京市'}],
    'C': [{name: '重庆市', email: 'asd@asd.com', id: '重庆市'}],
    'D': [{name: '东阳市', email: 'asd@asd.com', id: '东阳市'}],
    'E': [{name: '鄂城', email: 'asd@asd.com', id: '鄂城'}],
    'F': [{name: '福州市', email: 'asd@asd.com', id: '福州市'}],
    'J': [{name: '金华', email: 'asd@asd.com', id: '金华'}],
    'Z': [{name: '浙江', email: 'asd@asd.com', id: '浙江'}]
}

remove (chart, item) {
    alert(\`remove:$\{item\}\`);
    this.contacts.removeItem(chart, item);
}

update (chart, item) {
    alert(\`update :$\{item\}\`);
    item.name = 'aaaa';
    this.contacts.updateItem(chart, item, item);
}

renderItem = (chart, item) => {
    return <dd key={item.id} data-link={chart} className={item._active ? 'active' : ''}>
        {item.name}
        <span className='pull-right'>
            <FontIcon icon='edit' title='编辑' className='mr-5 text-link' onClick={this.update.bind(this, chart, item)}/>
            <FontIcon icon='trash' title='删除' className='text-danger' onClick={this.remove.bind(this, chart, item)}/>
        </span>
    </dd>;
}

ReactDOM.render(
<div>
    <div style={{height: 500}}>
        <Contacts ref={(f) => this.contacts = f} data={this.data} renderItem={this.renderItem}></Contacts>
    </div>
</div>, mountNode);
`}
                    </Code>
                </div>
            </div>
        );
    }
}

export default Demo;
