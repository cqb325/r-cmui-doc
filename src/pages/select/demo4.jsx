import React from 'react';
import BaseDemo from '../BaseDemo';
import FontIcon from 'r-cmui/components/FontIcon';
import Code from '../Code';
import Select from 'r-cmui/components/Select';
import DISTRICT_DATA from './all_district';

class Demo extends BaseDemo {
    selectProvince (value, item) {
        console.log(value, item);
        if (item) {
            this.refs.city.setData(item.children);
            this.refs.district.setData([]);
        }
    }

    selectCity (value, item) {
        if (item) {
            this.refs.district.setData(item.children);
        }
    }

    render () {
        return (
            <div>
                <div className='code-box-demo'>
                    <Select data={DISTRICT_DATA} placeholder='省份' hasEmptyOption ref='province' onChange={this.selectProvince.bind(this)}></Select>
                    <span className='mr-10'></span>
                    <Select ref='city' placeholder='城市' onChange={this.selectCity.bind(this)}></Select>
                    <span className='mr-10'></span>
                    <Select ref='district' placeholder='区县'></Select>
                </div>
                <div className='code-box-desc'>
                    <div className='code-box-title'>多选</div>
                    <div>
                        多选选择框,设置multi为true， sep属性可以设置多值之间的分隔符
                        <FontIcon icon={'chevron-circle-down'} ref='collapse' className='collapse' onClick={this.openCloseCode.bind(this)}></FontIcon>
                    </div>
                </div>
                <div className='code-box-src' ref='boxSrc'>
                    <Code className='language-jsx'>
                        {`
import Select from 'r-cmui/components/Select';
import DISTRICT_DATA from "./all_district";

selectProvince(value, item){
    if(item) {
        this.refs.city.setData(item.children);
        this.refs.district.setData([]);
    }
}

selectCity(value, item){
    if(item) {
        this.refs.district.setData(item.children);
    }
}

ReactDOM.render(
<div>
    <Select data={DISTRICT_DATA} placeholder="省份" hasEmptyOption ref="province" onChange={this.selectProvince.bind(this)}></Select>
    <span className="mr-10"></span>
    <Select ref="city" placeholder="城市" onChange={this.selectCity.bind(this)}></Select>
    <span className="mr-10"></span>
    <Select ref="district" placeholder="区县"></Select>
</div>, mountNode);
`}
                    </Code>
                </div>
            </div>
        );
    }
}

export default Demo;
