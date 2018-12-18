import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Cell extends React.Component {
    displayName = 'Cell';

    static contextTypes = {
        updateSelect: PropTypes.func,
        styles: PropTypes.object,
        cellData: PropTypes.object
    }

    state = {
        focus: false,
        editable: false
    };

    onFocus = () => {
        this.setState({
            focus: true
        });
    }

    onBlur = () => {
        this.setState({
            focus: false,
            editable: false
        });
        let cellData = this.context.cellData[this.props.dataKey];
        if (!cellData) {
            cellData = {rowHead: this.props.row + 1, head: this.props.column, value: ''};
            this.context.cellData[this.props.dataKey] = cellData;
        }
        cellData.value = this.cell.innerText;
    }

    onDoubleClick = () => {
        this.setState({
            editable: true
        });
    }

    componentDidUpdate () {
        if (this.state.editable) {
            this.cell.focus();
        }
    }

    render () {
        const {row, column, dataKey, cellData, width} = this.props;

        let value = '';
        let style = Object.assign({}, this.context.styles[dataKey], {
            width
        });
        if (cellData) {
            value = cellData.value;
            if (cellData.style) {
                style = Object.assign(style, cellData.style);
            }
        }
        const clazzName = classNames('cm-excel-cell', {
            'cm-excel-cell-focus': this.state.focus
        });
        return <div className={clazzName} 
            suppressContentEditableWarning
            contentEditable={this.state.editable}
            data-row={row}
            data-col={column}
            data-key={dataKey}
            style={style}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            onDoubleClick={this.onDoubleClick}
            tabIndex={0}
            ref={(f) => this.cell = f}
        >
            <div className='cm-excell-cell-value'>{value}</div>
        </div>;
    }
}

export default Cell;
