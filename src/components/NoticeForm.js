import React, { useState, useRef, useEffect } from 'react';
import './NoticeForm.scss';
import NoticeFormElement from './NoticeFormElement';
import RequiredValidator from "../validators/RequiredValidator";
import StringValidator from "../validators/StringValidator";
import PatternValidator from '../validators/PatternValidator';

const NoticeForm = (props) => {
  const {formData, setFormData, addNotice} = props;

  const msgRef = useRef(),
        titleRef = useRef(),
        telRef = useRef();

  //http://qaru.site/questions/250/create-guid-uuid-in-javascript
  const uuidv4 = () => {
    return ( [1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, (c) => {
        return (c ^ ((crypto.getRandomValues(new Uint8Array(1))[0] & 15) >> (c / 4))).toString(16);
      }
    );
  }

  const changeHandler = (e) => {
    let {name, value} = e.target
    setFormData({...formData, [name]: value});
  }

  const [formValid, setFormValid] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const validate = () => {
    const valid = [titleRef.current.isValid(),
                  telRef.current.isValid(),
                  msgRef.current.isValid()].every((e) => e);
    setFormValid(valid);
  }
  useEffect(() => {
      if (!loaded) {
        setLoaded(true);
        return;
      }
      validate();
  }, [formData]);

  const addItem = (e) => {
    e.preventDefault();

    let notice = {...formData};
    if (!notice.id) {
      notice.id = uuidv4();
    }

    addNotice(notice);
    setFormData({});
    setLoaded(false);

    telRef.current.clearStatus();
    msgRef.current.clearStatus();
    titleRef.current.clearStatus();
  }
  
  return (
    <form className="notice-form">
      <h2>Подать объявление</h2>      
      <NoticeFormElement
        type="text"
        onChange={ changeHandler }
        value={ formData.title }
        name='title'
        labelText='Заголовок'
        validators={ [
          new RequiredValidator(),
          new StringValidator(140)
        ] }
        ref={ titleRef } /> 
      <NoticeFormElement
        type="textarea"
        onChange={ changeHandler }
        value={ formData.msg }
        name='msg'
        labelText='Текст объявления' 
        validators={ [
          new StringValidator(300)
        ] }
        ref={ msgRef } /> 
      <NoticeFormElement
        type='tel'
        onChange={ changeHandler }
        value={ formData.tel }
        name='tel'
        labelText='Телефон' 
        validators={ [
          new RequiredValidator(),
          new PatternValidator(/^((\+7\s?\()+(\d{3})+(\)\s?)+(\d{3})+(\s?-\s?)+(\d{2})+(\s?-\s?)+(\d{2}))$/)
        ] }
        ref={ telRef } />
      <button 
        onClick={ addItem }
        className="btn btn_size_s btn_bg_blue"
        disabled={ !formValid }
        type="submit" >
        Подать
      </button>
    </form>
  );
}

export default NoticeForm;