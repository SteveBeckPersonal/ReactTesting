import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

interface TableProps {
  data: Record<string, any>[];
  onRemove?: (row: Record<string, any>) => void;
  columnsToIgnore?: string[];
}

export const Table: React.FC<TableProps> = ({
  data,
  onRemove,
  columnsToIgnore = [],
}) => {
  const columns = Object.keys(data[0]).filter(
    (column) => !columnsToIgnore.includes(column)
  );

  return (
    <table className="table">
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column}>{column}</th>
          ))}
          {onRemove && <th>Actions</th>}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row[columns[0]]}>
            {columns.map((column) => (
              <td key={column}>{row[column]}</td>
            ))}
            {onRemove && (
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => onRemove(row)}
                >
                  Remove
                </button>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
