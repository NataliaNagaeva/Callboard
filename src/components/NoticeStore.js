const NoticeStore = () => {
  function validateKey(key) {
    if (typeof(key) != 'string') {
      throw "Key must be string";
    }
  }

  function getNotice(key) {
    validateKey(key);

    let result = (localStorage && localStorage.getItem(key)) ? 
                JSON.parse(localStorage.getItem(key)) : [];
    
    return result;
  }

  function setNotice(key, value) {
    validateKey(key);

    let result = localStorage && localStorage.getItem(key);
    
    if (result) {
      result = JSON.parse(key);
      
      if(typeof(result) === 'Array') {
        result.push(value);
      } else {
        throw "noticeList must be Array";
      }
    }
  }
}

export default NoticeStore;