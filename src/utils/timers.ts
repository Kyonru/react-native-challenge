import debounce from 'lodash.debounce';

export const witDebounce = (
  method: () => any,
  limit = 500,
  leading = true,
  trailing = false,
) => debounce(method, limit, {leading, trailing});
