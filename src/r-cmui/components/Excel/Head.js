import React from 'react';
import PropTypes from 'prop-types';


const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
    'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const columns = [].concat(LETTERS);
LETTERS.forEach((i) => {
    LETTERS.forEach((j) => {
        columns.push(i + j);
    });
});

class Head extends React.Component {
    displayName = 'Head';

    static contextTypes = {
        headColumnLength: PropTypes.number,
        columnsWidth: PropTypes.object,
        scrollLeft: PropTypes.number
    }

    renderColumns () {
        const defaultColumnsLength = this.context.headColumnLength;
        const columnsWidth = this.context.columnsWidth;
        const cols = [];
        for (let i = 0; i < defaultColumnsLength; i++) {
            const columnText = columns[i];
            const width = columnsWidth[columnText];
            cols.push(<div className='cm-excel-column' key={i} style={{width}}>{columnText}</div>);
        }
        return cols;
    }

    render () {
        return <div className='cm-excel-head-wrap'>
            <div className='cm-excel-column cm-excel-column-first'>&nbsp;</div>
            <div className='cm-excel-head' style={{left: this.context.scrollLeft}}>
                {this.renderColumns()}
            </div>
        </div>;
    }
}

export default Head;
