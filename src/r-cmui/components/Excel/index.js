import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Head from './Head';
import Body from './Body';
import './Excel.less';

const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
    'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const columns = [].concat(LETTERS);
const columnMap = {};
LETTERS.forEach((i) => {
    LETTERS.forEach((j) => {
        columns.push(i + j);
    });
});
columns.forEach((col, index) => {
    columnMap[col] = index;
});

class Excel extends React.Component {
    displayName = 'Excel';

    static childContextTypes = {
        data: PropTypes.array,
        rowData: PropTypes.object,
        cellData: PropTypes.object,
        headColumnLength: PropTypes.number,
        rowColumnLength: PropTypes.number,
        columnsWidth: PropTypes.object,
        rowsHeight: PropTypes.object,
        scrollLeft: PropTypes.number,
        scrollTop: PropTypes.number,
        updateScrollLeft: PropTypes.func,
        updateScrollTop: PropTypes.func,
        firstCell: PropTypes.object,
        lastCell: PropTypes.object,
        updateSelect: PropTypes.func,
        styles: PropTypes.object
    }

    getChildContext () {
        return {
            data: this.props.data,
            rowData: this.rowData,
            cellData: this.cellData,
            headColumnLength: this.headColumnLength,
            rowColumnLength: this.rowColumnLength,
            columnsWidth: this.columnsWidth,
            rowsHeight: this.rowsHeight,
            scrollLeft: this.state.scrollLeft,
            scrollTop: this.state.scrollTop,
            updateScrollLeft: this.updateScrollLeft,
            updateScrollTop: this.updateScrollTop,
            firstCell: this.state.firstCell,
            lastCell: this.state.lastCell,
            updateSelect: this.updateSelect,
            styles: this.state.styles
        };
    }

    state = {
        scrollLeft: 0,
        scrollTop: 0,
        firstCell: null,
        lastCell: null,
        styles: {}
    }

    headColumnLength = 26;
    rowColumnLength = 50;
    defaultRowHeight = 27;
    columnsWidth = {};
    rowsHeight = {};
    rowData = {};
    cellData = {};

    constructor (props) {
        super(props);
        if (this.props.data) {
            const data = this.props.data;
            const lastRow = data[data.length - 1];
            const maxRowNum = parseInt(lastRow['head'], 10);
            this.rowColumnLength = Math.max(this.rowColumnLength, maxRowNum);
            const cells = lastRow.cells;
            const lastCell = cells[cells.length - 1];
            let maxCellNum = this.headColumnLength;
            for (let i = 0; i < columns.length; i++) {
                if (columns[i] === lastCell.head) {
                    maxCellNum = Math.max(maxCellNum, i) + 1;
                    break;
                }
            }
        }
        for (let i = 0; i < this.headColumnLength; i++) {
            const key = columns[i];
            this.columnsWidth[key] = 80;
        }
        for (let i = 0; i < this.rowColumnLength; i++) {
            const key = `${i + 1}`;
            this.rowsHeight[key] = this.defaultRowHeight;
        }
        if (this.props.data) {
            this.props.data.forEach((row) => {
                this.rowData[row.head] = row;
                const rowNum = row.head;
                if (row.height) {
                    this.rowsHeight[rowNum] = row.height;
                }
                row.cells.forEach((cell) => {
                    const key = rowNum + cell.head;
                    this.cellData[key] = cell;
                    cell.rowHead = row.head;
                    if (cell.width) {
                        this.columnsWidth[cell.head] = cell.width;
                    }
                });
            });
        }
    }

    updateScrollLeft = (scrollLeft) => {
        this.setState({scrollLeft});
    }

    updateScrollTop = (scrollTop) => {
        this.setState({scrollTop});
    }

    /**
     * 更新选择区域
     */
    updateSelect = (firstCell, lastCell, isEnd) => {
        const params = {lastCell};
        if (firstCell) {
            params.firstCell = firstCell;
        }
        this.setState(params, () => {
            if (isEnd) {
                this.onSelect();
            }
        });
    }

    onSelect () {
        if (this.props.onSelect) {
            const rows = this.getSelectData();
            this.props.onSelect(rows);
        }
    }

    getSelectData () {
        const firstCell = this.state.firstCell;
        const lastCell = this.state.lastCell;
        if (firstCell && lastCell) {
            const minx = columnMap[firstCell.col <= lastCell.col ? firstCell.col : lastCell.col];
            const maxx = columnMap[firstCell.col <= lastCell.col ? lastCell.col : firstCell.col];
            const firstRow = parseInt(firstCell.row, 10);
            const lastRow = parseInt(lastCell.row, 10);
            const miny = firstRow <= lastRow ? firstRow : lastRow;
            const maxy = firstRow <= lastRow ? lastRow : firstRow;

            const rows = [];
            for (let row = miny; row <= maxy; row ++) {
                const rowData = [];
                for (let col = minx; col <= maxx; col ++) {
                    const key = (row + 1) + columns[col];
                    let cell = this.cellData[key];
                    if (!cell) {
                        cell = {rowHead: row + 1, head: columns[col], value: ''};
                    }
                    rowData.push(cell);
                }
                rows.push(rowData);
            }

            return rows;
        }
        return null;
    }

    getStyles () {
        return this.state.styles;
    }

    updateStyles (styles) {
        this.setState({styles});
    }

    render () {
        const {className} = this.props;
        const clazzName = classNames(className, 'cm-excel');
        return <div className={clazzName}>
            <Head />
            <Body />
        </div>;
    }
}

export default Excel;
