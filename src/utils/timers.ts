import debounce from 'lodash.debounce';

export const witDebounce = (method: () => any, limit = 500) =>
  debounce(method, limit, {leading: true, trailing: false});
