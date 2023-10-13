const http = {
  async get<T>(url: string): Promise<{ data: T }> {
    // const paramsResquest = new URLSearchParams(options?.params);

    const resp = await fetch(url);
    // {
    //   cache: 'no-store',
    // }
    const dataResponse: T = await resp.json();
    return { data: dataResponse };
  },
  async post<T>(url: string, data: object): Promise<{ data: T }> {
    const resp = await fetch(url, { method: 'POST', body: JSON.stringify(data) });
    const dataResponse: T = await resp.json();
    return { data: dataResponse };
  },
  async put<T>(url: string, data: object): Promise<{ data: T }> {
    const resp = await fetch(url, { method: 'PUT', body: JSON.stringify(data) });
    const dataResponse: T = await resp.json();
    return { data: dataResponse };
  },
};

export default http;
