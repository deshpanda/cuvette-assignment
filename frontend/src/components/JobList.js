import React, { useContext, useState } from 'react';
import { JobContext } from '../context/JobContext';
import JobCard from './JobCard';
import UpdateJobModal from './UpdateJobModal';

const JobList = () => {
  const { jobs, loading, error } = useContext(JobContext);
  const [selectedJob, setSelectedJob] = useState(null);
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  const openUpdateModal = (job) => {
    setSelectedJob(job);
    setShowUpdateModal(true);
  };

  const closeUpdateModal = () => {
    setShowUpdateModal(false);
    setSelectedJob(null);
  };

  if (loading) {
    return <div className="loading">Loading applications...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  if (jobs.length === 0) {
    return <div className="no-jobs">No job applications found. Add one to get started!</div>;
  }

  return (
    <div className="job-list">
      <h2>Your Job Applications</h2>
      <div className="job-cards">
        {jobs.map((job) => (
          <JobCard 
            key={job._id} 
            job={job} 
            onEdit={() => openUpdateModal(job)} 
          />
        ))}
      </div>
      {showUpdateModal && selectedJob && (
        <UpdateJobModal 
          job={selectedJob} 
          onClose={closeUpdateModal} 
        />
      )}
    </div>
  );
};

export default JobList;