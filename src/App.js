import React, { useState } from 'react';
import { get, set } from './components/NoticeStore';
import './App.scss';
import NoticeForm from './components/NoticeForm';
import NoticeList from './components/NoticeList';

function App() {
  const NOTICES_KEY = 'notices';
  const [notices, setNotices] = useState(get(NOTICES_KEY) || []);
  const [formData, setFormData] = useState({});

  const addNotice = (notice) => {
    setNotices(prevNotices => {
      let notices = [...prevNotices],
          idx = notices.findIndex((item) => notice.id == item.id);
      
      if (idx < 0) {
        notices.push(notice);
      } else {
        notices[idx] = notice;
      }
 
      set(NOTICES_KEY, notices);
      return notices;
    })
  }

  const removeNotice = (notice) => {
    setNotices(notices => {
      notices = notices.filter((item) => item.id != notice.id);
      set(NOTICES_KEY, notices);
      return notices;
    })
  }

  return (
    <div className="app">
      <NoticeForm formData={formData} setFormData={setFormData} addNotice={addNotice}/>
      <NoticeList notices={notices} update={setFormData} remove={removeNotice}/>
    </div>
  );
}

export default App;