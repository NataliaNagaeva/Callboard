import React from 'react';
import NoticeListItem from './NoticeListItem';
import './NoticeList.scss';
import NoticeStore from './NoticeStore';

const NoticeList = (props) => {

  function validateKey(key) {
    if (typeof(key) != 'string') {
      throw "Key must be string";
    }
  }

  const getItems = (key) => {
    validateKey(key);

    let items = (localStorage && localStorage.getItem(key)) ? 
                JSON.parse(localStorage.getItem(key)) : [];
    
    return items;
  }

  let items = getItems('noticeList');

  const itemsJSX = items.map( (item) => {
    return (
      <NoticeListItem 
        key= {item.id}
        title= {item.title}
        msg= {item.msg}
        tel= {item.tel}
      />
    );
  });

  return (
    <div className="notice-list">
      <h2>Объявление</h2>      
      <div className="notice-list__content">
        {itemsJSX}
      </div>
    </div>
  );
}

export default NoticeList;