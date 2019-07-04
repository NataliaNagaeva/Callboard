import React from 'react';
import './NoticeForm.scss';

const NoticeFormElement = (props) => {
  const statusElement = <div className="form-status">
                          {/* <div className="form-status__icon"></div> */}
                          <div className="form-status__text">
                            {props.status}
                          </div>
                        </div>;
  let element = <input 
                  className="form-control"
                  type="text"
                  placeholder= {props.placeholder ? props.placeholder : null}
                  name= {props.inputName ? props.inputName : null}
                  required= {props.required ? true : false}  
                />;

  if (props.isTextarea && props.isPhone) {
    throw ("NoticeFormElement must be isTextarea or isPhone");
  } 
  
  if (props.isTextarea) {
    element = <textarea
                className="form-control form-control_area"
                placeholder= {props.placeholder ? props.placeholder : null}
                name= {props.inputName ? props.inputName : null}
                required = {props.required ? true : false}  
              >
              </textarea>;
  } else if (props.isPhone) {
    element = <input 
                className="form-control"
                type="tel"
                placeholder= {props.placeholder ? props.placeholder : null}
                name= {props.inputName ? props.inputName : null}                
                required = {props.required ? true : false}  
              />;
  }
  
  return (
    <label className="form-item">
      <div className="form-item__text">{props.labelText}</div>
      <div className={props.isTextarea ? 'form-item__control form-item__control_area' : 'form-item__control'}>
        {element}
        {props.status ? statusElement : null}
      </div>        
    </label>          
  );
}

const NoticeForm = () => {
  return (
    <form className="notice-form">
      <h2>Подать объявление</h2>      
      <NoticeFormElement
        inputName='title'
        labelText='Заголовок' 
        status='Обязательное поле' 
        required /> 
      <NoticeFormElement
        inputName='msg'
        isTextarea
        labelText='Текст объявления' 
        status='Обязательное поле11' 
        required /> 
      <NoticeFormElement
        inputName='tel'
        isPhone
        labelText='Телефон' 
        status='Обязательное поле'
        placeholder='+7 (___) ___ - __ - __'
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