import React, { useState, useContext } from 'react';
import { JobContext } from '../context/JobContext';

const UpdateJobModal = ({ job, onClose }) => {
  const { updateJob } = useContext(JobContext);
  const [formData, setFormData] = useState({
    company: job.company,
    role: job.role,
    status: job.status,
    applicationDate: new Date(job.applicationDate).toISOString().split('T')[0],
    link: job.link || '',
  });

  const { company, role, status, applicationDate, link } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateJob(job._id, formData);
      onClose();
    } catch (err) {
      console.error("Failed to update job", err);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Update Job Application</h2>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="company">Company</label>
            <input
              type="text"
              name="company"
              id="company"
              value={company}
              onChange={onChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="role">Role</label>
            <input
              type="text"
              name="role"
              id="role"
              value={role}
              onChange={onChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="status">Status</label>
            <select
              name="status"
              id="status"
              value={status}
              onChange={onChange}
            >
              <option value="Applied">Applied</option>
              <option value="Interview">Interview</option>
              <option value="Offer">Offer</option>
              <option value="Rejected">Rejected</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="applicationDate">Application Date</label>
            <input
              type="date"
              name="applicationDate"
              id="applicationDate"
              value={applicationDate}
              onChange={onChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="link">Link</label>
            <input
              type="url"
              name="link"
              id="link"
              value={link}
              onChange={onChange}
              placeholder="https://example.com"
            />
          </div>
          <div className="form-buttons">
            <button type="submit" className="btn btn-success">
              Update
            </button>
            <button 
              type="button" 
              className="btn btn-cancel"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateJobModal;