import {PureComponent} from 'react';
import Dom from 'r-cmui/components/utils/Dom';

class BaseDemo extends PureComponent {
    openCloseCode () {
        const collapse = this.refs.collapse;
        Dom.dom(collapse).toggleClass('active');
        // $(collapse).toggleClass("active");
        const boxSrc = this.refs.boxSrc;
        Dom.dom(boxSrc).toggleClass('active');
        // $(boxSrc).toggleClass("active");
    }
}

export default BaseDemo;
