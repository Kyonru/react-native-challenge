let active = false;
export const debounce = (method: () => any, limit = 300) => {
  if (active) {
    return;
  }
  active = true;
  method();

  setTimeout(() => {
    active = false;
  }, limit);
};
