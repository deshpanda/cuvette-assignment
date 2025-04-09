import React, { useContext } from 'react';
import { JobContext } from '../context/JobContext';

const FilterBar = () => {
  const { filters, updateFilters } = useContext(JobContext);

  const handleFilterChange = (e) => {
    updateFilters({ [e.target.name]: e.target.value });
  };

  const clearFilters = () => {
    updateFilters({
      status: '',
      startDate: '',
      endDate: '',
    });
  };

  return (
    <div className="filter-bar">
      <h3>Filter Applications</h3>
      <div className="filter-controls">
        <div className="filter-group">
          <label htmlFor="status-filter">Status</label>
          <select
            id="status-filter"
            name="status"
            value={filters.status}
            onChange={handleFilterChange}
          >
            <option value="">All Statuses</option>
            <option value="Applied">Applied</option>
            <option value="Interview">Interview</option>
            <option value="Offer">Offer</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>
        <div className="filter-group">
          <label htmlFor="startDate">From Date</label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={filters.startDate}
            onChange={handleFilterChange}
          />
        </div>
        <div className="filter-group">
          <label htmlFor="endDate">To Date</label>
          <input
            type="date"
            id="endDate"
            name="endDate"
            value={filters.endDate}
            onChange={handleFilterChange}
          />
        </div>
        <button className="btn btn-clear" onClick={clearFilters}>
          Clear Filters
        </button>
      </div>
    </div>
  );
};

export default FilterBar;