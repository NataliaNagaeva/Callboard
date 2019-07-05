import React, { useState, forwardRef, useImperativeHandle } from 'react';

const PENDING = 'pending',
      ERROR = 'error',
      SUCCESS = 'success';

const NoticeFormElement = forwardRef((props, ref) => {
  if (typeof(props.onChange) !== 'function') {
    throw new Error("onChange not a function")
  } 

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
    messages: getInfoMessages()
  });  

  useImperativeHandle(ref, () => ({
    clearStatus() {
      setStatus({
        code: PENDING,
        messages: getInfoMessages()
      });
    },

    isValid() {
      return refreshStatus();
    }
  }));

  const validate = (obj, attr) => {
    if (!props.validators) {
      return [true, ['']];
    }

    let ok = true,
        message = '',
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
      messages = ['Заполнено'];
    }

    return [ok, messages];
  }

  const refreshStatus = () => {
    let [ok, messages] = validate(props, 'value');
    if (props.value) {
      setStatus({
        code: ok ? SUCCESS : ERROR,
        messages: messages
      });
    }
    return ok;
  }

  const changeHandler = (e) => {
    refreshStatus();
    props.onChange(e);
  }

  let elementJSX = <input 
                    className="form-control"
                    type={ props.type }
                    value={ props.value || "" }
                    name={ props.name || null }
                    onChange={ changeHandler }
                    required={ !!props.required }  
                    placeholder={ props.placeholder || (props.isPhone ? '+7 (___) ___ - __ - __' : null) }
                  />;
  
  if (props.type === 'textarea') {
    elementJSX = <textarea
                    className="form-control form-control_area"
                    value={ props.value || "" }                
                    name={ props.name || null }
                    onChange={ changeHandler }
                    required={ !!props.required }
                    placeholder={ props.placeholder || null }
                  >
                  </textarea>;
  }
  
  const statusJSX = <div className={ `form-status form-status_${status.code}` }>
                      <div className="form-status__text">                        
                        { status.messages.map((s, i) => <p key = {i}> {s} </p>) }
                      </div>
                    </div>;

  return (
    <label className="form-item">
      <div className="form-item__text">{ props.labelText }</div>
      <div className={ `form-item__control is-${status.code}` }>
        { elementJSX }
        { props.validators ? statusJSX : null }
      </div>        
    </label>          
  );
});

export default NoticeFormElement;