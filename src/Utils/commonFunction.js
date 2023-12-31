export const removeAttribute = ({ attribute, object }) => {
  return Object.keys(object).reduce((attributeObject, key) => {
    if (object !== undefined) {
      if (key !== "" && !attribute.includes(key)) {
        attributeObject[key] = object[key];
      }
      return attributeObject;
    }
  }, {});
};

// Debounce hook
export function useDebounce(callback, delay) {
  let timeoutId;

  return (...args) => {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}