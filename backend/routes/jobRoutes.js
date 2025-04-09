const express = require('express');
const router = express.Router();
const {
  getJobs,
  createJob,
  updateJob,
  deleteJob,
} = require('../controllers/jobController');

// GET all jobs
router.get('/', getJobs);

// POST create a new job
router.post('/', createJob);

// PUT update a job
router.put('/:id', updateJob);

// DELETE a job
router.delete('/:id', deleteJob);

module.exports = router;