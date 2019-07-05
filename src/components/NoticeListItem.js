import React from 'react';

const NoticeListItem = (props) => {
  let item = props.item;
  return (
    <div className="notice-item">
      <div className="notice-item__left">
        <div className="notice-item__title">{item.title}</div>
        <div className="notice-item__msg">{item.msg}</div>
      </div>
      <div className="notice-item__right">
        <div className="notice-item__contacts">
          <a href="tel:+79011000000" className="notice-item__contact notice-item__tel">{item.tel}</a>
        </div>
        <div className="notice-item__controls">
          <button 
            className="notice-item__control btn btn_size_m btn_border_blue"
            onClick={ () => {props.update(item)} }>
            Редактировать
          </button>
          <button 
            className="notice-item__control btn btn_size_m btn_border_red"
            onClick={ () => {props.remove(item)} }>
            Удалить
          </button>
        </div>
      </div>
    </div>
  );
}

export default NoticeListItem;