import {PureComponent} from 'react';
import ReactDOM from 'react-dom';
import Dom from 'r-cmui/components/utils/Dom';

class BaseDemo extends PureComponent {
    openCloseCode(){
        var collapse = ReactDOM.findDOMNode(this.refs.collapse);
        Dom.dom(collapse).toggleClass('active');
        // $(collapse).toggleClass("active");
        var boxSrc = ReactDOM.findDOMNode(this.refs.boxSrc);
        Dom.dom(boxSrc).toggleClass('active');
        // $(boxSrc).toggleClass("active");
    }
}

export default BaseDemo;
