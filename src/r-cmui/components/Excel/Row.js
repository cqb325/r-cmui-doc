import React from 'react';
import PropTypes from 'prop-types';
import Cell from './Cell';

const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
    'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const columns = [].concat(LETTERS);
LETTERS.forEach((i) => {
    LETTERS.forEach((j) => {
        columns.push(i + j);
    });
});

class Row extends React.Component {
    displayName = 'Row';

    static contextTypes = {
        headColumnLength: PropTypes.number,
        data: PropTypes.array,
        rowData: PropTypes.object,
        cellData: PropTypes.object,
        rowsHeight: PropTypes.object,
        columnsWidth: PropTypes.object
    }

    renderRow () {
        const cellData = this.context.cellData;
        const rowData = this.context.rowData;
        const columnsWidth = this.context.columnsWidth;
        const columnsLength = this.context.headColumnLength;
        const rowNum = this.props.row + 1;
        const cells = [];
        for (let i = 0; i < columnsLength; i++) {
            const letter = columns[i];
            const w = columnsWidth[letter];
            const key = rowNum + letter;
            cells.push(<Cell key={key} width={w} row={this.props.row} column={letter} dataKey={key} cellData={cellData[key]} rowData={rowData[rowNum]}></Cell>);
        }

        return cells;
    }

    render () {
        const rowNum = this.props.row + 1;
        const rowHeight = this.context.rowsHeight[`${rowNum}`];
        return <div className='cm-excel-row' style={{height: rowHeight, lineHeight: `${rowHeight}px`}}>
            {this.renderRow()}
        </div>;
    }
}

export default Row;
