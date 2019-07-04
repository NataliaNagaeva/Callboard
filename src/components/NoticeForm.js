import React, { useState } from 'react';
import './NoticeForm.scss';
import NoticeFormElement from './NoticeFormElement';

const NoticeForm = () => {
  const [formData, setFormData] = useState({});
  
  return (
    <form className="notice-form">
      <h2>Подать объявление</h2>      
      <NoticeFormElement
        value={formData.title}
        inputName='title'
        labelText='Заголовок' 
        status='Обязательное поле' 
        required /> 
      <NoticeFormElement
        value={formData.msg}
        inputName='msg'
        isTextarea
        labelText='Текст объявления' 
        status='Обязательное поле11' 
        required /> 
      <NoticeFormElement
        value={formData.tel}
        inputName='tel'
        isPhone
        labelText='Телефон' 
        status='Обязательное поле'
        required />
      <button 
        className="btn btn_size_s btn_bg_blue"
        type="submit" >
        Подать
      </button>
    </form>
  );
}

export default NoticeForm;