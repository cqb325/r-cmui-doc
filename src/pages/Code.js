import React, {PureComponent} from 'react';

const Prism = window.Prism;

class Code extends PureComponent{
    componentDidMount(){
        this._hightlight();
    }

    componentDidUpdate(){
        this._hightlight();
    }

    _hightlight(){
        Prism.highlightElement(this.refs.code, false);
    }

    render(){
        let {children} = this.props;
        return (
            <pre ref="code" className="language-jsx">
                {children}
            </pre>
        );
    }
}

export default Code;
