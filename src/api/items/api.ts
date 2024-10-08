/* tslint:disable */
/* eslint-disable */
/**
 * FastAPI
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.1.0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import globalAxios, {
  AxiosResponse,
  AxiosInstance,
  AxiosRequestConfig,
} from "axios";
import { Configuration } from "./configuration";
// Some imports not used depending on template conditions
// @ts-ignore
import {
  BASE_PATH,
  COLLECTION_FORMATS,
  RequestArgs,
  BaseAPI,
  RequiredError,
} from "./base";
import { HTTPValidationError } from "./models";
import { Item } from "./models";
/**
 * ItemsApi - axios parameter creator
 * @export
 */
export const ItemsApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     *
     * @summary Create Item
     * @param {Item} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createItemApiV1Post: async (
      body: Item,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'body' is not null or undefined
      if (body === null || body === undefined) {
        throw new RequiredError(
          "body",
          "Required parameter body was null or undefined when calling createItemApiV1Post."
        );
      }
      const localVarPath = `/`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(
        localVarPath,
        "https://localhost:3001/items"
      );
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions: any = {
        method: "POST",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      localVarHeaderParameter["Content-Type"] = "application/json";

      const query = new URLSearchParams(localVarUrlObj.search);
      for (const key in localVarQueryParameter) {
        query.set(key, localVarQueryParameter[key]);
      }
      for (const key in options.params) {
        query.set(key, options.params[key]);
      }
      localVarUrlObj.search = new URLSearchParams(query).toString();
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      const needsSerialization =
        typeof body !== "string" ||
        localVarRequestOptions.headers["Content-Type"] === "application/json";
      localVarRequestOptions.data = needsSerialization
        ? JSON.stringify(body !== undefined ? body : {})
        : body || "";

      return {
        url:
          localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @summary Delete Item
     * @param {string} id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteItemApiV1IdDelete: async (
      id: string,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new RequiredError(
          "id",
          "Required parameter id was null or undefined when calling deleteItemApiV1IdDelete."
        );
      }
      const localVarPath = `/{id}`.replace(
        `{${"id"}}`,
        encodeURIComponent(String(id))
      );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(
        localVarPath,
        "https://localhost:3001/items"
      );
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions: AxiosRequestConfig = {
        method: "DELETE",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      const query = new URLSearchParams(localVarUrlObj.search);
      for (const key in localVarQueryParameter) {
        query.set(key, localVarQueryParameter[key]);
      }
      for (const key in options.params) {
        query.set(key, options.params[key]);
      }
      localVarUrlObj.search = new URLSearchParams(query).toString();
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url:
          localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @summary Get Item By Id
     * @param {string} id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getItemByIdApiV1IdGet: async (
      id: string,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new RequiredError(
          "id",
          "Required parameter id was null or undefined when calling getItemByIdApiV1IdGet."
        );
      }
      const localVarPath = `/{id}`.replace(
        `{${"id"}}`,
        encodeURIComponent(String(id))
      );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(
        localVarPath,
        "https://localhost:3001/items"
      );
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions: AxiosRequestConfig = {
        method: "GET",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      const query = new URLSearchParams(localVarUrlObj.search);
      for (const key in localVarQueryParameter) {
        query.set(key, localVarQueryParameter[key]);
      }
      for (const key in options.params) {
        query.set(key, options.params[key]);
      }
      localVarUrlObj.search = new URLSearchParams(query).toString();
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url:
          localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @summary Get Items
     * @param {number} [skip] Skip the first n results, useful for pagination.
     * @param {number} [limit] Limit the number of results to return, useful for pagination.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getItemsApiV1Get: async (
      skip?: number,
      limit?: number,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(
        localVarPath,
        "https://localhost:3001/items"
      );
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions: AxiosRequestConfig = {
        method: "GET",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      if (skip !== undefined) {
        localVarQueryParameter["skip"] = skip;
      }

      if (limit !== undefined) {
        localVarQueryParameter["limit"] = limit;
      }

      const query = new URLSearchParams(localVarUrlObj.search);
      for (const key in localVarQueryParameter) {
        query.set(key, localVarQueryParameter[key]);
      }
      for (const key in options.params) {
        query.set(key, options.params[key]);
      }
      localVarUrlObj.search = new URLSearchParams(query).toString();
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url:
          localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @summary Healthcheck
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    healthcheckApiV1HealthcheckGet: async (
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/healthcheck`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(
        localVarPath,
        "https://localhost:3001/items"
      );
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions: AxiosRequestConfig = {
        method: "GET",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      const query = new URLSearchParams(localVarUrlObj.search);
      for (const key in localVarQueryParameter) {
        query.set(key, localVarQueryParameter[key]);
      }
      for (const key in options.params) {
        query.set(key, options.params[key]);
      }
      localVarUrlObj.search = new URLSearchParams(query).toString();
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url:
          localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @summary Update Item
     * @param {any} body
     * @param {string} id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateItemApiV1IdPut: async (
      body: any,
      id: string,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'body' is not null or undefined
      if (body === null || body === undefined) {
        throw new RequiredError(
          "body",
          "Required parameter body was null or undefined when calling updateItemApiV1IdPut."
        );
      }
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new RequiredError(
          "id",
          "Required parameter id was null or undefined when calling updateItemApiV1IdPut."
        );
      }
      const localVarPath = `{id}`.replace(
        `{${"id"}}`,
        encodeURIComponent(String(id))
      );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(
        localVarPath,
        "https://localhost:3001/items"
      );
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions: any = {
        method: "PUT",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      localVarHeaderParameter["Content-Type"] = "application/json";

      const query = new URLSearchParams(localVarUrlObj.search);
      for (const key in localVarQueryParameter) {
        query.set(key, localVarQueryParameter[key]);
      }
      for (const key in options.params) {
        query.set(key, options.params[key]);
      }
      localVarUrlObj.search = new URLSearchParams(query).toString();
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      const needsSerialization =
        typeof body !== "string" ||
        localVarRequestOptions.headers["Content-Type"] === "application/json";
      localVarRequestOptions.data = needsSerialization
        ? JSON.stringify(body !== undefined ? body : {})
        : body || "";

      return {
        url:
          localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
        options: localVarRequestOptions,
      };
    },
  };
};

/**
 * ItemsApi - functional programming interface
 * @export
 */
export const ItemsApiFp = function (configuration?: Configuration) {
  return {
    /**
     *
     * @summary Create Item
     * @param {Item} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createItemApiV1Post(
      body: Item,
      options?: AxiosRequestConfig
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<any>>
    > {
      const localVarAxiosArgs = await ItemsApiAxiosParamCreator(
        configuration
      ).createItemApiV1Post(body, options);
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH
      ) => {
        const axiosRequestArgs: AxiosRequestConfig = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        };
        return axios.request(axiosRequestArgs);
      };
    },
    /**
     *
     * @summary Delete Item
     * @param {string} id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteItemApiV1IdDelete(
      id: string,
      options?: AxiosRequestConfig
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<any>>
    > {
      const localVarAxiosArgs = await ItemsApiAxiosParamCreator(
        configuration
      ).deleteItemApiV1IdDelete(id, options);
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH
      ) => {
        const axiosRequestArgs: AxiosRequestConfig = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        };
        return axios.request(axiosRequestArgs);
      };
    },
    /**
     *
     * @summary Get Item By Id
     * @param {string} id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getItemByIdApiV1IdGet(
      id: string,
      options?: AxiosRequestConfig
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<any>>
    > {
      const localVarAxiosArgs = await ItemsApiAxiosParamCreator(
        configuration
      ).getItemByIdApiV1IdGet(id, options);
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH
      ) => {
        const axiosRequestArgs: AxiosRequestConfig = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        };
        return axios.request(axiosRequestArgs);
      };
    },
    /**
     *
     * @summary Get Items
     * @param {number} [skip] Skip the first n results, useful for pagination.
     * @param {number} [limit] Limit the number of results to return, useful for pagination.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getItemsApiV1Get(
      skip?: number,
      limit?: number,
      options?: AxiosRequestConfig
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<any>>
    > {
      const localVarAxiosArgs = await ItemsApiAxiosParamCreator(
        configuration
      ).getItemsApiV1Get(skip, limit, options);
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH
      ) => {
        const axiosRequestArgs: AxiosRequestConfig = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        };
        return axios.request(axiosRequestArgs);
      };
    },
    /**
     *
     * @summary Healthcheck
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async healthcheckApiV1HealthcheckGet(
      options?: AxiosRequestConfig
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<any>>
    > {
      const localVarAxiosArgs = await ItemsApiAxiosParamCreator(
        configuration
      ).healthcheckApiV1HealthcheckGet(options);
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH
      ) => {
        const axiosRequestArgs: AxiosRequestConfig = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        };
        return axios.request(axiosRequestArgs);
      };
    },
    /**
     *
     * @summary Update Item
     * @param {any} body
     * @param {string} id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateItemApiV1IdPut(
      body: any,
      id: string,
      options?: AxiosRequestConfig
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<any>>
    > {
      const localVarAxiosArgs = await ItemsApiAxiosParamCreator(
        configuration
      ).updateItemApiV1IdPut(body, id, options);
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH
      ) => {
        const axiosRequestArgs: AxiosRequestConfig = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        };
        return axios.request(axiosRequestArgs);
      };
    },
  };
};

/**
 * ItemsApi - factory interface
 * @export
 */
export const ItemsApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  return {
    /**
     *
     * @summary Create Item
     * @param {Item} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createItemApiV1Post(
      body: Item,
      options?: AxiosRequestConfig
    ): Promise<AxiosResponse<any>> {
      return ItemsApiFp(configuration)
        .createItemApiV1Post(body, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Delete Item
     * @param {string} id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteItemApiV1IdDelete(
      id: string,
      options?: AxiosRequestConfig
    ): Promise<AxiosResponse<any>> {
      return ItemsApiFp(configuration)
        .deleteItemApiV1IdDelete(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Get Item By Id
     * @param {string} id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getItemByIdApiV1IdGet(
      id: string,
      options?: AxiosRequestConfig
    ): Promise<AxiosResponse<any>> {
      return ItemsApiFp(configuration)
        .getItemByIdApiV1IdGet(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Get Items
     * @param {number} [skip] Skip the first n results, useful for pagination.
     * @param {number} [limit] Limit the number of results to return, useful for pagination.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getItemsApiV1Get(
      skip?: number,
      limit?: number,
      options?: AxiosRequestConfig
    ): Promise<AxiosResponse<any>> {
      return ItemsApiFp(configuration)
        .getItemsApiV1Get(skip, limit, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Healthcheck
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async healthcheckApiV1HealthcheckGet(
      options?: AxiosRequestConfig
    ): Promise<AxiosResponse<any>> {
      return ItemsApiFp(configuration)
        .healthcheckApiV1HealthcheckGet(options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Update Item
     * @param {any} body
     * @param {string} id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateItemApiV1IdPut(
      body: any,
      id: string,
      options?: AxiosRequestConfig
    ): Promise<AxiosResponse<any>> {
      return ItemsApiFp(configuration)
        .updateItemApiV1IdPut(body, id, options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * ItemsApi - object-oriented interface
 * @export
 * @class ItemsApi
 * @extends {BaseAPI}
 */
export class ItemsApi extends BaseAPI {
  /**
   *
   * @summary Create Item
   * @param {Item} body
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ItemsApi
   */
  public async createItemApiV1Post(
    body: Item,
    options?: AxiosRequestConfig
  ): Promise<AxiosResponse<any>> {
    return ItemsApiFp(this.configuration)
      .createItemApiV1Post(body, options)
      .then((request) => request(this.axios, this.basePath));
  }
  /**
   *
   * @summary Delete Item
   * @param {string} id
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ItemsApi
   */
  public async deleteItemApiV1IdDelete(
    id: string,
    options?: AxiosRequestConfig
  ): Promise<AxiosResponse<any>> {
    return ItemsApiFp(this.configuration)
      .deleteItemApiV1IdDelete(id, options)
      .then((request) => request(this.axios, this.basePath));
  }
  /**
   *
   * @summary Get Item By Id
   * @param {string} id
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ItemsApi
   */
  public async getItemByIdApiV1IdGet(
    id: string,
    options?: AxiosRequestConfig
  ): Promise<AxiosResponse<any>> {
    return ItemsApiFp(this.configuration)
      .getItemByIdApiV1IdGet(id, options)
      .then((request) => request(this.axios, this.basePath));
  }
  /**
   *
   * @summary Get Items
   * @param {number} [skip] Skip the first n results, useful for pagination.
   * @param {number} [limit] Limit the number of results to return, useful for pagination.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ItemsApi
   */
  public async getItemsApiV1Get(
    skip?: number,
    limit?: number,
    options?: AxiosRequestConfig
  ): Promise<AxiosResponse<any>> {
    return ItemsApiFp(this.configuration)
      .getItemsApiV1Get(skip, limit, options)
      .then((request) => request(this.axios, this.basePath));
  }
  /**
   *
   * @summary Healthcheck
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ItemsApi
   */
  public async healthcheckApiV1HealthcheckGet(
    options?: AxiosRequestConfig
  ): Promise<AxiosResponse<any>> {
    return ItemsApiFp(this.configuration)
      .healthcheckApiV1HealthcheckGet(options)
      .then((request) => request(this.axios, this.basePath));
  }
  /**
   *
   * @summary Update Item
   * @param {any} body
   * @param {string} id
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ItemsApi
   */
  public async updateItemApiV1IdPut(
    body: any,
    id: string,
    options?: AxiosRequestConfig
  ): Promise<AxiosResponse<any>> {
    return ItemsApiFp(this.configuration)
      .updateItemApiV1IdPut(body, id, options)
      .then((request) => request(this.axios, this.basePath));
  }
}
