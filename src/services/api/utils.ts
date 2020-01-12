export const constructRequestUrl = ({
  url,
  endpoint,
  params,
}: {
  url: string;
  endpoint?: string;
  params?: {[key: string]: string};
}): string => {
  if (!params) {
    return url;
  }
  const route = endpoint ? `/${endpoint}` : '';
  return `${url}${route}?${getQueryString(params)}`;
};

export const getQueryString = (params: {[key: string]: string}): string => {
  return Object.keys(params)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(params[key]))
    .join('&');
};
