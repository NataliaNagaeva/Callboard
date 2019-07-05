import React from 'react';
import NoticeListItem from './NoticeListItem';
import './NoticeList.scss';

const NoticeList = (props) => {
  const itemsJSX = props.notices.map( (item) => {
    return (
      <NoticeListItem 
        key = {item.id}
        item = {item} 
        update = {props.update}
        remove = {props.remove}
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