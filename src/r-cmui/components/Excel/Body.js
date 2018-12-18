import React from 'react';
import PropTypes from 'prop-types';
import Row from './Row';
import Gutter from './Gutter';
import Events from '../utils/Events';
import Dom from '../utils/Dom';
import SelectArea from './SelectArea';

class Body extends React.Component {
    displayName = 'Body';

    step = 50;

    static contextTypes = {
        data: PropTypes.array,
        headColumnLength: PropTypes.number,
        rowColumnLength: PropTypes.number,
        columnsWidth: PropTypes.object,
        rowsHeight: PropTypes.object,
        updateScrollLeft: PropTypes.func,
        updateSelect: PropTypes.func
    }

    renderBody () {
        const defaultColumnsLength = this.context.rowColumnLength;
        const rows = [];
        for (let i = 0; i < defaultColumnsLength; i++) {
            rows.push(<Row key={i} data-row={i} row={i}/>);
        }
        return rows;
    }

    renderGutter () {
        const columnsLength = this.context.rowColumnLength;
        const gutters = [];
        for (let i = 0; i < columnsLength; i++) {
            gutters.push(<Gutter key={i} data-row={i} row={i}/>);
        }
        return gutters;
    }

    componentDidMount () {
        this._isMounted = true;
        this.onSpacerScroll();
        this.updateScrollSize();

        Events.on(this.content, 'mousewheel', this.wheel);
        Events.on(window, 'resize', this.windowResize);
    }

    componentWillUnmount () {
        this._isMounted = false;
        Events.off(this.content, 'mousewheel', this.wheel);
        Events.off(window, 'resize', this.windowResize);
        Events.off(this.box, 'scroll', this.spaceScroll);
        Events.off(this.hbox, 'scroll', this.xspaceScroll);
    }

    onMouseDown = (event) => {
        this.isDragging = true;
        const cell = Dom.closest(event.target, '.cm-excel-cell');
        if (cell) {
            const ele = Dom.dom(cell);
            const row = ele.attr('data-row');
            const col = ele.attr('data-col');
            this.context.updateSelect({row, col, ele: cell}, null);
        }
    }

    onMouseMove = (event) => {
        if (this.isDragging) {
            const cell = Dom.closest(event.target, '.cm-excel-cell');
            if (cell) {
                const ele = Dom.dom(cell);
                const row = ele.attr('data-row');
                const col = ele.attr('data-col');
                this.context.updateSelect(null, {row, col, ele: cell});
            }
        }
    }

    onMouseUp = (event) => {
        this.isDragging = false;
        const cell = Dom.closest(event.target, '.cm-excel-cell');
        if (cell) {
            const ele = Dom.dom(cell);
            const row = ele.attr('data-row');
            const col = ele.attr('data-col');
            this.context.updateSelect(null, {row, col, ele: cell}, true);
        }
    }

    wheel = (e) => {
        if (e.preventDefault) {
            e.preventDefault();
        }
        if (e.stopPropagation) {
            e.stopPropagation();
        }
        const delta = e.wheelDelta;
        if (delta > 0) {
            this.scrollUp();
        } else {
            this.scrollDown();
        }
    }

    /**
     * 向上滚动
     */
    scrollUp () {
        let top = this.box.scrollTop;
        top = Math.max(top - this.step, 0);
        this.box.scrollTop = top;
        this.body.style.top = `${-top}px`;
        this.gutter.style.top = `${-top}px`;
    }

    /**
     * 向下滚动
     */
    scrollDown () {
        let top = this.box.scrollTop;
        top = top + this.step;

        const spacerHeight = this.spacer.getBoundingClientRect().height;
        const boxHeight = this.content.getBoundingClientRect().height;

        this.box.scrollTop = top;
        if (top > spacerHeight - boxHeight) {
            top = spacerHeight - boxHeight;
        } else {
            top = this.box.scrollTop;
        }
        this.body.style.top = `${-top}px`;
        this.gutter.style.top = `${-top}px`;
    }

    windowResize = () => {
        this.updateScrollSize();
    }

    spaceScroll = () => {
        this.body.style.top = `${-this.box.scrollTop}px`;
        this.gutter.style.top = `${-this.box.scrollTop}px`;
    }

    xspaceScroll = () => {
        this.body.style.left = `${-this.hbox.scrollLeft}px`;
        this.context.updateScrollLeft(-this.hbox.scrollLeft);
    }

    onSpacerScroll () {
        Events.on(this.box, 'scroll', this.spaceScroll);
        Events.on(this.hbox, 'scroll', this.xspaceScroll);
    }

    updateScrollSize () {
        const spacerWidth = this.spacer.getBoundingClientRect().width;
        const spacerHeight = this.hspacer.getBoundingClientRect().height;
        const boxWidth = this.box.getBoundingClientRect().width;
        const boxHeight = this.hbox.getBoundingClientRect().height;
        const gutterWidth = this.gutter.getBoundingClientRect().width;
        if (this.hbox) {
            this.hbox.style.left = `${gutterWidth}px`;
            this.box.style.left = `${gutterWidth}px`;
        }

        let barwidth = 0;
        if (boxWidth > spacerWidth) {
            barwidth = boxWidth - spacerWidth;
            this.content.style.right = `${barwidth}px`;
            this.hbox.style.right = `${barwidth}px`;
        } else {
            this.content.style.right = '0';
        }
        if (boxHeight > spacerHeight) {
            this.content.style.bottom = `${boxHeight - spacerHeight}px`;
            this.box.style.bottom = `${boxHeight - spacerHeight}px`;
        } else {
            this.content.style.bottom = '0';
        }
    }

    render () {
        let w = 0; let h = 0;
        for (const key in this.context.columnsWidth) {
            w += this.context.columnsWidth[key];
        }
        for (const key in this.context.rowsHeight) {
            h += this.context.rowsHeight[key];
        }
        return <div className='cm-excel-scroll'>
            <div className='cm-excel-scroll-box' ref={(f) => this.hbox = f}>
                <div className='cm-excel-scroll-spacer-x' ref={(f) => this.hspacer = f} style={{width: w}}></div>
            </div>
            <div className='cm-excel-scroll-box' ref={(f) => this.box = f}>
                <div className='cm-excel-scroll-spacer' ref={(f) => this.spacer = f} style={{height: h}}></div>
                <div style={{width: w, height: 0}}></div>
            </div>
            <div className='cm-excel-gutter' ref={(f) => this.gutter = f}>
                {this.renderGutter()}
            </div>
            <div className='cm-excel-scroll-content' ref={(f) => this.content = f}>
                <div className='cm-excel-body-wrap' ref={(f) => this.bodyWrap = f}>
                    <div className='cm-excel-body' 
                        ref={(f) => this.body = f}
                        onMouseDown={this.onMouseDown}
                        onMouseMove={this.onMouseMove}
                        onMouseUp={this.onMouseUp}
                    >
                        {this.renderBody()}
                        <SelectArea />
                    </div>
                </div>
            </div>
        </div>;
    }
}

export default Body;
