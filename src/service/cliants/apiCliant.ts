import axios, { AxiosInstance, AxiosResponse } from 'axios';

export type headers = {
  'Content-Type': 'application/json';
  // 'X-Pacapi-Session': string;
};

export interface PacApiResponse<T> extends AxiosResponse {
  data: {
    body: T;
  };
}

export interface FailResponse<T> extends AxiosResponse {
  response: {
    data: T;
  };
}

export interface FailResponseType {
  code: number;
  exception: string | string[];
  result: number | null;
  status: string | null;
}
export type onSuccess = any;
export type onError = void | string | object;

class PacApiClient {
  client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: 'https://api.printpac.co.jp',
      headers: {
        'Content-Type': 'application/json',
      } as headers,
    });

    // APIとのインターフェースを揃えるために、取得した値をsnake_caseからcamelCaseを変換する
    // this.client.interceptors.response.use((response) => {
    //   response.data = camelcaseKeys(response.data, { deep: true });
    //   return response;
    // });

    // // APIとのインターフェースを揃えるために、camelCaseをsnake_caseに変換する
    // this.client.interceptors.request.use((request) => {
    //   if (request.data) {
    //     // GET処理などの場合は落ちてしまうので、if文を通す
    //     request.data = snakecaseKeys(request.data, { deep: true });
    //   }
    //   return request;
    // });
  }
}

export const apiClient = new PacApiClient().client;