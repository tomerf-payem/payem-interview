import React from 'react';
import './Filters.css';

const Filters = ({ filters, onFilterChange, onApplyFilters }) => {
  return (
    <div className="filters-container">
      <h2>Filters</h2>
      <div className="filter-group">
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={filters.name}
            onChange={onFilterChange}
          />
        </label>
      </div>
      <div className="filter-group">
        <label>
          Status:
          <input
            type="text"
            name="status"
            value={filters.status}
            onChange={onFilterChange}
          />
        </label>
      </div>
      <div className="filter-group">
        <label>
          Employee Name:
          <input
            type="text"
            name="employeeName"
            value={filters.employeeName}
            onChange={onFilterChange}
          />
        </label>
      </div>
      <button onClick={onApplyFilters} className="apply-filters-button">
        Apply Filters
      </button>
    </div>
  );
};

export default Filters;
