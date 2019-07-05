import React from 'react';
import './NoticeForm.scss';
import NoticeFormElement from './NoticeFormElement';
import RequiredValidator from "../validators/RequiredValidator";
import StringValidator from "../validators/StringValidator";

const NoticeForm = (props) => {
  const {formData, setFormData, addNotice} = props;

  //http://qaru.site/questions/250/create-guid-uuid-in-javascript
  const uuidv4 = () => {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    )
  }

  const changeHandler = (e) => {
    let {name, value} = e.target
    setFormData({...formData, [name]: value});
  }  

  const addItem = (e) => {
    e.preventDefault();  

    const {title, msg, tel} = formData;

    if (!title || !msg || !tel) return;
    let notice = {...formData}
    if (!notice.id) {
      notice.id = uuidv4()
    }
    addNotice(notice)
    setFormData({})
    //TODO success msg
  }
  
  return (
    <form className="notice-form">
      <h2>Подать объявление</h2>      
      <NoticeFormElement
        type="text"
        onChange={changeHandler}
        value={formData.title}
        name='title'
        labelText='Заголовок' 
        status='Обязательное поле'
        validators={[
          new RequiredValidator(),
          new StringValidator(120)
        ]}
        required /> 
      <NoticeFormElement
        type="textarea"
        onChange={changeHandler}
        value={formData.msg}
        name='msg'
        labelText='Текст объявления' 
        status='Обязательное поле11' 
        required /> 
      <NoticeFormElement
        type="tel"
        onChange={changeHandler}
        value={formData.tel}
        name='tel'
        labelText='Телефон' 
        status='Обязательное поле'
        required />
      <button 
        onClick={addItem}
        className="btn btn_size_s btn_bg_blue"
        type="submit" >
        Подать
      </button>
    </form>
  );
}

export default NoticeForm;