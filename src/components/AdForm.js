import React from 'react';

const AdFormInputText = (props) => {
  const statusElement = <div className="ad-form_input_status">
                          <span className="ad-form_input_status_icon"></span>
                          <span className="ad-form_input_status_text">
                            {props.status}
                          </span>
                        </div>;
  
  return (
    <div className="ad-form_input">
      <label className="ad-form_input_label">
        <span className="ad-form_input_label_text">{props.labelText}</span>
        <input 
          type="text"
          required = {props.required ? true : false}  
        />
      </label>
      {props.status ? statusElement : null}    
    </div>
  );
}

const AdFormTextarea = (props) => {
  const statusElement = <div className="ad-form_input_status">
                          <span className="ad-form_input_status_icon"></span>
                          <span className="ad-form_input_status_text">
                            {props.status}
                          </span>
                        </div>;
  
  return (
    <div className="ad-form_input">
      <label className="ad-form_input_label">
        <span className="ad-form_input_label_text">{props.labelText}</span>
        <textarea
          required = {props.required ? true : false}  
        >
        </textarea>
      </label>
      {props.status ? statusElement : null}   
    </div>
  );
}

const AdForm = () => {
  return (
    <form
      className="ad-form">
      <h2>Подать объявление</h2>      
      <AdFormInputText 
        labelText='Заголовок' 
        status='Обязательное поле' 
        required='true' /> 
      <AdFormTextarea
        labelText='Заголовок' 
        status='Обязательное поле11' 
        required='true' />  
    </form>
  );
}

export default AdForm;