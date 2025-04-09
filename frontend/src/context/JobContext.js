import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const JobContext = createContext();

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export const JobProvider = ({ children }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    status: '',
    startDate: '',
    endDate: '',
  });

  // Fetch jobs based on filters
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);
        let url = `${API_URL}/jobs`;
        
        // Add query parameters for filtering
        const params = new URLSearchParams();
        if (filters.status) params.append('status', filters.status);
        if (filters.startDate) params.append('startDate', filters.startDate);
        if (filters.endDate) params.append('endDate', filters.endDate);
        
        const queryString = params.toString();
        if (queryString) url += `?${queryString}`;
        
        const response = await axios.get(url);
        setJobs(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchJobs();
  }, [filters]);

  // Add job
  const addJob = async (job) => {
    try {
      const response = await axios.post(`${API_URL}/jobs`, job);
      setJobs([response.data, ...jobs]);
      return response.data;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  // Update job
  const updateJob = async (id, updatedJob) => {
    try {
      const response = await axios.put(`${API_URL}/jobs/${id}`, updatedJob);
      setJobs(jobs.map((job) => (job._id === id ? response.data : job)));
      return response.data;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  // Delete job
  const deleteJob = async (id) => {
    try {
      await axios.delete(`${API_URL}/jobs/${id}`);
      setJobs(jobs.filter((job) => job._id !== id));
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  // Update filters
  const updateFilters = (newFilters) => {
    setFilters({ ...filters, ...newFilters });
  };

  return (
    <JobContext.Provider
      value={{
        jobs,
        loading,
        error,
        filters,
        addJob,
        updateJob,
        deleteJob,
        updateFilters,
      }}
    >
      {children}
    </JobContext.Provider>
  );
};