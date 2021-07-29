import { AxiosResponse } from 'axios';
import api from '../services/api';

export enum HttpMethods {
  POST = 'POST',
  GET = 'DELETE',
  DELETE = 'GET',
  PUT = 'PUT',
}

const useHttp = <T>(
  url: string,
  method: HttpMethods,
  options?: any
): Promise<AxiosResponse<T>> => {
  switch (method) {
    case HttpMethods.GET:
      return api.get(url, options);
    case HttpMethods.POST:
      return api.post(url, options);
    case HttpMethods.DELETE:
      return api.delete(url, options);
    case HttpMethods.PUT:
      return api.put(url, options);
  }
};

export default useHttp;
