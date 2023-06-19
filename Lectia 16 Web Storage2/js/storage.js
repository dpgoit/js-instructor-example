const save = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(error.message);
  }
};

const load = key => {
  try {
    const stateLocalStorage = localStorage.getItem(key);
    return stateLocalStorage === null ? undefined : JSON.parse(stateLocalStorage);
  } catch (error) {
    console.error(error.message);
  }
};

export { save, load };
