import React, { useState, useEffect, useMemo, useCallback } from 'react';
import SearchBar from './SearchBar';

interface DataGridProps {
  columns: Array<{ key: string, title: string }>;
  data: Array<any>;
  pageSize?: number;
  customStyles?: React.CSSProperties;
}

const DataGrid: React.FC<DataGridProps> = ({ columns, data, pageSize = 10, customStyles }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortedData, setSortedData] = useState(data);

  useEffect(() => {
    setSortedData(data);
  }, [data]);

const handleSearch = useCallback((query: string) => {
  const regex = new RegExp(query, 'i'); 
  const filteredData = data.filter(item =>
    columns.some(column => regex.test(item[column.key].toString()))
  );
  setSortedData(filteredData);
}, [data, columns]);

  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    return sortedData.slice(startIndex, startIndex + pageSize);
  }, [sortedData, currentPage, pageSize]);

  const handleSort = useCallback((key: string) => {
    const sorted = [...sortedData].sort((a, b) => (a[key] > b[key] ? 1 : -1));
    setSortedData(sorted);
  }, [sortedData]);

  return (
    <div style={customStyles}>
      <SearchBar onSearch={handleSearch} />
      <table>
        <thead>
          <tr>
            {columns.map(column => (
              <th key={column.key} onClick={() => handleSort(column.key)}>
                {column.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((row, index) => (
            <tr key={index}>
              {columns.map(column => (
                <td key={column.key}>{row[column.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        {Array.from({ length: Math.ceil(sortedData.length / pageSize) }, (_, i) => i + 1).map(page => (
          <button key={page} onClick={() => setCurrentPage(page)}>
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DataGrid;
