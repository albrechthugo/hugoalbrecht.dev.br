import { AxiosResponse } from 'axios';
import api from '../../services/api';

export enum HttpMethods {
  POST = 'POST',
  GET = 'GET',
  DELETE = 'DELETE',
  PUT = 'PUT',
}

const methods: {
  [key in HttpMethods]: <T>(
    url: string,
    options: any
  ) => Promise<AxiosResponse<T>>;
} = {
  POST: (url: string, options: any) => api.post(url, options),
  GET: (url: string, options: any) => api.get(url, options),
  DELETE: (url: string, options: any) => api.delete(url, options),
  PUT: (url: string, options: any) => api.put(url, options),
};

const useHttp = <T>(
  url: string,
  method: HttpMethods,
  options?: any
): Promise<AxiosResponse<T>> => {
  console.log(method);
  return methods[method]<T>(url, options);
};

export default useHttp;
