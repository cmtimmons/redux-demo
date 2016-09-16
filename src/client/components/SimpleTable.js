import React from 'react';
const defaultStyles = {
  headerCell: {
    width: "150px",
    marginLeft: "10px",
    marginRight: "10px"
  },
  button: {
    textAlign: "left"
  },
  rowCell: {
    width: "150px",
    marginLeft: "10px",
    marginRight: "10px"
  },
  row: {
    display: "flex",
    alignItems: "center"
  },
  header: {
    display: "flex",
    alignItems: "center",
    borderBottom: "1px solid rgba(0, 0, 0, 0.298039)",
    marginTop: "15px"
  }
}
const renderCell = (cell, index) => (<div key={index} style={defaultStyles.rowCell}>{cell}</div>);

const renderRow = (row, index) => (<div key={index} style={defaultStyles.row}>{row.map(renderCell)}</div>)

const renderHeader = (header, index) => (<div key={index} style={defaultStyles.headerCell}>Name</div>)

const SimpleTable = ({headers, rows}) => (
  <div>
    <div style={defaultStyles.header}>
      {headers.map(renderHeader) }
    </div>
    <div>
      {rows.map(renderRow)}
    </div>
  </div>
)
SimpleTable.propTypes = {
  headers: React.PropTypes.array.isRequired,
  rows: React.PropTypes.array.isRequired
}

export default SimpleTable;
