import React from 'react';
import './NoticeList.scss';

const NoticeList = () => {
  return (
    <div className="notice-list">
      <h2>Объявление</h2>      
      <div className="notice-list__content">
        <div className="notice-item">
          <div className="notice-item__left">
            <div className="notice-item__title">Продам собаку</div>
            <div className="notice-item__msg">Станет отличным другом, к лотку приучена</div>
            {/* <div className="notice-item__img">
              <img src="" alt=""/>
            </div> */}
          </div>
          <div className="notice-item__right">
            <div className="notice-item__contacts">
              <a href="tel:+79011000000" className="notice-item__contact notice-item__tel">+7 (901) 100-00-00</a>
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
      </div>
    </div>
  );
}

export default NoticeList;