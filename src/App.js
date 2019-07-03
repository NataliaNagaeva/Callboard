import React from 'react';
import './App.scss';
import AdForm from './components/AdForm';
import AdList from './components/AdList';

function App() {
  return (
    <div className="app">
      <AdForm />
      <AdList />
    </div>
  );
}

export default App;