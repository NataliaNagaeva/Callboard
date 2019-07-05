import React, { useState } from 'react';

const PENDING = 0,
      ERROR = 1,
      SUCCESS = 2;

const NoticeFormElement = (props) => {
  const getInfoMessages = () => {
    let messages = [],
        validators = props.validators || [];
    for (let v of validators) {
      messages.push(v.getInfoMessage());
    }

    return messages;
  }

  const [status, setStatus] = useState({
    code: PENDING,
    messages: getInfoMessages(),
  });

  if (typeof(props.onChange) !== 'function') {
    throw new Error("onChange not a function")
  } 

  const validate = (obj, attr) => {
    if (!props.validators) {
      return [true, [""]];
    }

    let ok = true,
        message = "",
        messages = [];

    for (let v of props.validators) {
      if (ok) {
        [ok, message] = v.validateAttribute(obj, attr);
      } else {
        message = v.getInfoMessage()
      }

      messages.push(message);
    }

    if (ok) {
      messages = ["Заполнено"];
    }

    return [ok, messages];
  }

  const changeHandler = (e) => {
    let [ok, messages] = validate(e.target, 'value');
    setStatus({
      code: ok ? SUCCESS : ERROR,
      messages: messages
    });
    props.onChange(e);
  }

  let elementJSX = <input 
                    className="form-control"
                    type= {props.type}
                    value= {props.value || ""}
                    name= {props.name ? props.name : null}
                    onChange={changeHandler}
                    required= {props.required ? true : false}  
                    placeholder= {props.placeholder ? props.placeholder : props.isPhone ? '+7 (___) ___ - __ - __' : null}
                  />;
  
  if (props.type === 'textarea') {
    elementJSX =  <textarea
                    className="form-control form-control_area"
                    value= {props.value ? props.value : ""}                
                    name= {props.name ? props.name : null}
                    onChange={changeHandler}
                    required = {props.required ? true : false}  
                    placeholder= {props.placeholder ? props.placeholder : null}
                  >
                  </textarea>;
  }
  
  const statusJSX = <div className="form-status">
                      <div className="form-status__text">
                        {status.code}
                        {status.messages.map((s, i) => <p key={i}> {s} </p>)}
                      </div>
                    </div>;

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