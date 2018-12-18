import React from 'react';
import PropTypes from 'prop-types';
import Dom from '../utils/Dom';

class SelectArea extends React.Component {
    displayName = 'SelectArea';

    static contextTypes = {
        firstCell: PropTypes.object,
        lastCell: PropTypes.object,
        scrollLeft: PropTypes.number
    }

    render () {
        const firstCell = this.context.firstCell;
        const lastCell = this.context.lastCell;

        const bodyEle = Dom.query('.cm-excel-body');
        const bodyTop = bodyEle ? bodyEle.getBoundingClientRect().top : 0;
        const bodyLeft = bodyEle ? bodyEle.getBoundingClientRect().left : 0;
        const style = {};
        if (firstCell && lastCell) {
            const leftObj = firstCell.col <= lastCell.col ? firstCell : lastCell;
            const rightObj = firstCell.col <= lastCell.col ? lastCell : firstCell;
            const topObj = parseInt(firstCell.row, 10) <= parseInt(lastCell.row, 10) ? firstCell : lastCell;
            const bottomObj = parseInt(firstCell.row, 10) <= parseInt(lastCell.row, 10) ? lastCell : firstCell;

            const leftRect = leftObj.ele.getBoundingClientRect();
            const rightRect = rightObj.ele.getBoundingClientRect();
            const topRect = topObj.ele.getBoundingClientRect();
            const bottomRect = bottomObj.ele.getBoundingClientRect();
            const left = leftRect.left;
            const width = rightRect.right - left;

            style.width = width + 2;
            style.left = left - bodyLeft - 1;
            style.top = topRect.top - bodyTop - 1;
            style.height = bottomRect.bottom - topRect.top + 2;
        }

        return <div className='cm-select-area' style={style}>
            <div className='cm-select-area-helper'></div>
        </div>;
    }
}

export default SelectArea;
