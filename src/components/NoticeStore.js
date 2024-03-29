function get(key) {
  return localStorage.getItem(key) ? 
              JSON.parse(localStorage.getItem(key)) : null;
}

function set(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export {get, set};