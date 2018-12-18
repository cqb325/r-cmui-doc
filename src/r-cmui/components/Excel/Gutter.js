import React from 'react';
import PropTypes from 'prop-types';

class Gutter extends React.Component {
    displayName = 'Gutter';

    static contextTypes = {
        rowsHeight: PropTypes.object
    }

    render () {
        const rowNum = this.props.row + 1;
        const rowHeight = this.context.rowsHeight[`${rowNum}`];
        return <div className='cm-excel-gutter-num' style={{height: rowHeight, lineHeight: `${rowHeight}px`}}>{this.props.row + 1}</div>;
    }
}

export default Gutter;