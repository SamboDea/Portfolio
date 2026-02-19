const getLocalItem = key => localStorage.getItem(key);
const setLocalItem = (key, value) => localStorage.setItem(key, value);

export {getLocalItem, setLocalItem}