import React from 'react';
import './App.scss';
import NoticeForm from './components/NoticeForm';
import NoticeList from './components/NoticeList';

function App() {
  return (
    <div className="app">
      <NoticeForm />
      <NoticeList />
    </div>
  );
}

export default App;