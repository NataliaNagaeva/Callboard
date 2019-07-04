import React from 'react';

const NoticeListItem = (props) => {
  return (
    <div className="notice-item">
      <div className="notice-item__left">
        <div className="notice-item__title">{props.title}</div>
        <div className="notice-item__msg">{props.msg}</div>
        {/* <div className="notice-item__img">
          <img src="" alt=""/>
        </div> */}
      </div>
      <div className="notice-item__right">
        <div className="notice-item__contacts">
          <a href="tel:+79011000000" className="notice-item__contact notice-item__tel">{props.tel}</a>
        </div>
        <div className="notice-item__controls">
          <button 
            className="notice-item__control btn btn_size_m btn_border_blue">
            Редактировать
          </button>
          <button 
            className="notice-item__control btn btn_size_m btn_border_red">
            Удалить
          </button>
        </div>
      </div>
    </div>
  );
}

export default NoticeListItem;