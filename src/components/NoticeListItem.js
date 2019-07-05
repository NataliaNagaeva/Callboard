import React from 'react';

const NoticeListItem = (props) => {
  const item = props.item,
        {title, msg, tel} = item;

  const telHref = tel ? `tel:+${tel.replace(/\D/g, "")}` : "";

  const update = () => {
    const form = document.querySelector('.notice-form');
    form.scrollIntoView({
      behavior: 'smooth',
      block: 'start', 
      inline: 'nearest'
    });

    props.update(item);
  }

  return (
    <div className="notice-item">
      <div className="notice-item__left">
        <div className="notice-item__title">{ title }</div>
        <div className="notice-item__msg">{ msg }</div>
      </div>
      <div className="notice-item__right">
        <div className="notice-item__contacts">
          <a href={ telHref } className="notice-item__contact notice-item__tel">{ tel }</a>
        </div>
        <div className="notice-item__controls">
          <button 
            className="notice-item__control btn btn_size_m btn_border_blue"
            onClick={ update }>
            Редактировать
          </button>
          <button 
            className="notice-item__control btn btn_size_m btn_border_red"
            onClick={ () => { props.remove(item) } }>
            Удалить
          </button>
        </div>
      </div>
    </div>
  );
}

export default NoticeListItem;