import React from 'react';

const NoticeFormElement = (props) => {
  const statusJSX = <div className="form-status">
                      <div className="form-status__text">
                        {props.status}
                      </div>
                    </div>;

  let elementJSX = <input 
                    className="form-control"
                    type= {props.isPhone ? "tel" : "text"}
                    value= {props.value ? props.value : ""}
                    name= {props.inputName ? props.inputName : null}
                    required= {props.required ? true : false}  
                    placeholder= {props.placeholder ? props.placeholder : props.isPhone ? '+7 (___) ___ - __ - __' : null}
                  />;

  if (props.isTextarea && props.isPhone) {
    throw ("NoticeFormElement must be isTextarea or isPhone");
  } 
  
  if (props.isTextarea) {
    elementJSX =  <textarea
                    className="form-control form-control_area"
                    value= {props.value ? props.value : ""}                
                    name= {props.inputName ? props.inputName : null}
                    required = {props.required ? true : false}  
                    placeholder= {props.placeholder ? props.placeholder : null}
                  >
                  </textarea>;
  }
  
  return (
    <label className="form-item">
      <div className="form-item__text">{props.labelText}</div>
      <div className={props.isTextarea ? 'form-item__control form-item__control_area' : 'form-item__control'}>
        {elementJSX}
        {props.status ? statusJSX : null}
      </div>        
    </label>          
  );
}

export default NoticeFormElement;