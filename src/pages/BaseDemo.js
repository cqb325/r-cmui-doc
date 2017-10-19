import {PureComponent} from 'react';
import reactDOM from 'react-dom';
import Dom from 'r-cmui/components/utils/Dom';

class BaseDemo extends PureComponent {
    openCloseCode () {
        const collapse = reactDOM.findDOMNode(this.refs.collapse);
        Dom.dom(collapse).toggleClass('active');
        // $(collapse).toggleClass("active");
        const boxSrc = reactDOM.findDOMNode(this.refs.boxSrc);
        Dom.dom(boxSrc).toggleClass('active');
        // $(boxSrc).toggleClass("active");
    }
}

export default BaseDemo;
