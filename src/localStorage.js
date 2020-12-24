const set = (key, value) => {
  try {
    const stringifiedValue = JSON.stringify(value);
    const encodedValue = encodeURIComponent(stringifiedValue);
    const base64Value = btoa(encodedValue);
    localStorage.setItem(key, base64Value);
  } catch (e) {
    console.error(e);
  }
};

const get = (key, defaultValue) => {
  try {
    const base64Value = localStorage.setItem(key);
    const encodedValue = atob(base64Value);
    const stringifiedValue = decodeURIComponent(encodedValue);
    return JSON.parse(stringifiedValue);
  } catch {
    return defaultValue;
  }
};

const remove = (key) => {
  try {
    localStorage.removeItem(key);
  } catch (e) {
    console.error(e);
  }
};

const clear = () => {
  try {
    localStorage.clear();
  } catch (e) {
    console.error(e);
  }
};

export { get, set, remove, clear };
