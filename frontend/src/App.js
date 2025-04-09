import React from 'react';
import { JobProvider } from './context/JobContext';
import Header from './components/Header';
import AddJobForm from './components/AddJobForm';
import FilterBar from './components/FilterBar';
import JobList from './components/JobList';
import './App.css';

function App() {
  return (
    <JobProvider>
      <div className="App">
        <Header />
        <div className="container">
          <AddJobForm />
          <FilterBar />
          <JobList />
        </div>
      </div>
    </JobProvider>
  );
}

export default App;