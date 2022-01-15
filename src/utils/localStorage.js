const loadData = (key) => {
  try {
    let data = JSON.parse(localStorage.getItem(key));
    console.log("key", data, key);
    return data;
  } catch (e) {
    return undefined;
  }
};

const saveData = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export { loadData, saveData };
