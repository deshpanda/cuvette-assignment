import React, { useContext } from 'react';
import { JobContext } from '../context/JobContext';

const JobCard = ({ job, onEdit }) => {
  const { deleteJob } = useContext(JobContext);
  const { _id, company, role, status, applicationDate, link } = job;

  // Format date
  const formattedDate = new Date(applicationDate).toLocaleDateString();

  // Status color mapping
  const statusColors = {
    'Applied': 'blue',
    'Interview': 'orange',
    'Offer': 'green',
    'Rejected': 'red',
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this application?')) {
      deleteJob(_id);
    }
  };

  return (
    <div className="job-card">
      <div className={`status-badge ${status.toLowerCase()}`} style={{ backgroundColor: statusColors[status] }}>
        {status}
      </div>
      <h3>{role}</h3>
      <h4>{company}</h4>
      <p className="date">Applied on: {formattedDate}</p>
      {link && (
        <a 
          href={link} 
          className="job-link" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          View Job Posting
        </a>
      )}
      <div className="card-actions">
        <button className="btn btn-edit" onClick={onEdit}>
          Edit
        </button>
        <button className="btn btn-delete" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default JobCard;