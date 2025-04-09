import React, { useState, useContext } from 'react';
import { JobContext } from '../context/JobContext';

const AddJobForm = () => {
  const { addJob } = useContext(JobContext);
  const [formData, setFormData] = useState({
    company: '',
    role: '',
    status: 'Applied',
    applicationDate: new Date().toISOString().split('T')[0],
    link: '',
  });
  const [isFormVisible, setIsFormVisible] = useState(false);

  const { company, role, status, applicationDate, link } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await addJob(formData);
      // Reset form
      setFormData({
        company: '',
        role: '',
        status: 'Applied',
        applicationDate: new Date().toISOString().split('T')[0],
        link: '',
      });
      // Hide form after submission
      setIsFormVisible(false);
    } catch (err) {
      console.error("Failed to add job", err);
    }
  };

  return (
    <div className="add-job-section">
      {!isFormVisible ? (
        <button 
          className="btn btn-primary" 
          onClick={() => setIsFormVisible(true)}
        >
          Add New Application
        </button>
      ) : (
        <div className="form-container">
          <h2>Add Job Application</h2>
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
                Submit
              </button>
              <button 
                type="button" 
                className="btn btn-cancel"
                onClick={() => setIsFormVisible(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default AddJobForm;