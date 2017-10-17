require('core-js/es6/map');
require('core-js/es6/set');
if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = function (callback) {
        setTimeout(callback, 0);
    };
}

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory } from 'react-router';
import routes from './routers';
import 'prismjs';
import 'prismjs/components/prism-jsx';
import './index.less';
import 'r-cmui/styles/theme.less';
import 'r-cmui/styles/font-awesome.min.css';
import 'prismjs/themes/prism.css';

ReactDOM.render(<Router history={hashHistory} routes={routes}/>, document.querySelector('#root'));
