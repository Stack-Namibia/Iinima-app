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
import { Location } from "./models";
/**
 * LocationsApi - axios parameter creator
 * @export
 */
export const LocationsApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     *
     * @summary Get Location By Town
     * @param {string} town
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getLocationByTownApiV1TownTownGet: async (
      town: string,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'town' is not null or undefined
      if (town === null || town === undefined) {
        throw new RequiredError(
          "town",
          "Required parameter town was null or undefined when calling getLocationByTownApiV1TownTownGet."
        );
      }
      const localVarPath = `/town/{town}`.replace(
        `{${"town"}}`,
        encodeURIComponent(String(town))
      );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(
        localVarPath,
        "http://localhost:3001/locations"
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
     * @summary Get Locations
     * @param {number} [skip] Skip the first n results, useful for pagination.
     * @param {number} [limit] Limit the number of results to return, useful for pagination.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getLocationsApiV1Get: async (
      skip?: number,
      limit?: number,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(
        localVarPath,
        "http://localhost:3001/locations"
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
     * @summary Get Locations By Region
     * @param {string} region
     * @param {number} [skip] Skip the first n results, useful for pagination.
     * @param {number} [limit] Limit the number of results to return, useful for pagination.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getLocationsByRegionApiV1RegionRegionGet: async (
      region: string,
      skip?: number,
      limit?: number,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'region' is not null or undefined
      if (region === null || region === undefined) {
        throw new RequiredError(
          "region",
          "Required parameter region was null or undefined when calling getLocationsByRegionApiV1RegionRegionGet."
        );
      }
      const localVarPath = `/region/{region}`.replace(
        `{${"region"}}`,
        encodeURIComponent(String(region))
      );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(
        localVarPath,
        "http://localhost:3001/locations"
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
        "http://localhost:3001/locations"
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
     * @summary Sync Locations
     * @param {Array<Location>} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    syncLocationsApiV1SyncPost: async (
      body?: Array<Location>,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/sync`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(
        localVarPath,
        "http://localhost:3001/locations"
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
  };
};

/**
 * LocationsApi - functional programming interface
 * @export
 */
export const LocationsApiFp = function (configuration?: Configuration) {
  return {
    /**
     *
     * @summary Get Location By Town
     * @param {string} town
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getLocationByTownApiV1TownTownGet(
      town: string,
      options?: AxiosRequestConfig
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<any>>
    > {
      const localVarAxiosArgs = await LocationsApiAxiosParamCreator(
        configuration
      ).getLocationByTownApiV1TownTownGet(town, options);
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
     * @summary Get Locations
     * @param {number} [skip] Skip the first n results, useful for pagination.
     * @param {number} [limit] Limit the number of results to return, useful for pagination.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getLocationsApiV1Get(
      skip?: number,
      limit?: number,
      options?: AxiosRequestConfig
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<any>>
    > {
      const localVarAxiosArgs = await LocationsApiAxiosParamCreator(
        configuration
      ).getLocationsApiV1Get(skip, limit, options);
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
     * @summary Get Locations By Region
     * @param {string} region
     * @param {number} [skip] Skip the first n results, useful for pagination.
     * @param {number} [limit] Limit the number of results to return, useful for pagination.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getLocationsByRegionApiV1RegionRegionGet(
      region: string,
      skip?: number,
      limit?: number,
      options?: AxiosRequestConfig
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<any>>
    > {
      const localVarAxiosArgs = await LocationsApiAxiosParamCreator(
        configuration
      ).getLocationsByRegionApiV1RegionRegionGet(region, skip, limit, options);
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
      const localVarAxiosArgs = await LocationsApiAxiosParamCreator(
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
     * @summary Sync Locations
     * @param {Array<Location>} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async syncLocationsApiV1SyncPost(
      body?: Array<Location>,
      options?: AxiosRequestConfig
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<any>>
    > {
      const localVarAxiosArgs = await LocationsApiAxiosParamCreator(
        configuration
      ).syncLocationsApiV1SyncPost(body, options);
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
 * LocationsApi - factory interface
 * @export
 */
export const LocationsApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  return {
    /**
     *
     * @summary Get Location By Town
     * @param {string} town
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getLocationByTownApiV1TownTownGet(
      town: string,
      options?: AxiosRequestConfig
    ): Promise<AxiosResponse<any>> {
      return LocationsApiFp(configuration)
        .getLocationByTownApiV1TownTownGet(town, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Get Locations
     * @param {number} [skip] Skip the first n results, useful for pagination.
     * @param {number} [limit] Limit the number of results to return, useful for pagination.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getLocationsApiV1Get(
      skip?: number,
      limit?: number,
      options?: AxiosRequestConfig
    ): Promise<AxiosResponse<any>> {
      return LocationsApiFp(configuration)
        .getLocationsApiV1Get(skip, limit, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Get Locations By Region
     * @param {string} region
     * @param {number} [skip] Skip the first n results, useful for pagination.
     * @param {number} [limit] Limit the number of results to return, useful for pagination.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getLocationsByRegionApiV1RegionRegionGet(
      region: string,
      skip?: number,
      limit?: number,
      options?: AxiosRequestConfig
    ): Promise<AxiosResponse<any>> {
      return LocationsApiFp(configuration)
        .getLocationsByRegionApiV1RegionRegionGet(region, skip, limit, options)
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
      return LocationsApiFp(configuration)
        .healthcheckApiV1HealthcheckGet(options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Sync Locations
     * @param {Array<Location>} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async syncLocationsApiV1SyncPost(
      body?: Array<Location>,
      options?: AxiosRequestConfig
    ): Promise<AxiosResponse<any>> {
      return LocationsApiFp(configuration)
        .syncLocationsApiV1SyncPost(body, options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * LocationsApi - object-oriented interface
 * @export
 * @class LocationsApi
 * @extends {BaseAPI}
 */
export class LocationsApi extends BaseAPI {
  /**
   *
   * @summary Get Location By Town
   * @param {string} town
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof LocationsApi
   */
  public async getLocationByTownApiV1TownTownGet(
    town: string,
    options?: AxiosRequestConfig
  ): Promise<AxiosResponse<any>> {
    return LocationsApiFp(this.configuration)
      .getLocationByTownApiV1TownTownGet(town, options)
      .then((request) => request(this.axios, this.basePath));
  }
  /**
   *
   * @summary Get Locations
   * @param {number} [skip] Skip the first n results, useful for pagination.
   * @param {number} [limit] Limit the number of results to return, useful for pagination.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof LocationsApi
   */
  public async getLocationsApiV1Get(
    skip?: number,
    limit?: number,
    options?: AxiosRequestConfig
  ): Promise<AxiosResponse<any>> {
    return LocationsApiFp(this.configuration)
      .getLocationsApiV1Get(skip, limit, options)
      .then((request) => request(this.axios, this.basePath));
  }
  /**
   *
   * @summary Get Locations By Region
   * @param {string} region
   * @param {number} [skip] Skip the first n results, useful for pagination.
   * @param {number} [limit] Limit the number of results to return, useful for pagination.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof LocationsApi
   */
  public async getLocationsByRegionApiV1RegionRegionGet(
    region: string,
    skip?: number,
    limit?: number,
    options?: AxiosRequestConfig
  ): Promise<AxiosResponse<any>> {
    return LocationsApiFp(this.configuration)
      .getLocationsByRegionApiV1RegionRegionGet(region, skip, limit, options)
      .then((request) => request(this.axios, this.basePath));
  }
  /**
   *
   * @summary Healthcheck
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof LocationsApi
   */
  public async healthcheckApiV1HealthcheckGet(
    options?: AxiosRequestConfig
  ): Promise<AxiosResponse<any>> {
    return LocationsApiFp(this.configuration)
      .healthcheckApiV1HealthcheckGet(options)
      .then((request) => request(this.axios, this.basePath));
  }
  /**
   *
   * @summary Sync Locations
   * @param {Array<Location>} [body]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof LocationsApi
   */
  public async syncLocationsApiV1SyncPost(
    body?: Array<Location>,
    options?: AxiosRequestConfig
  ): Promise<AxiosResponse<any>> {
    return LocationsApiFp(this.configuration)
      .syncLocationsApiV1SyncPost(body, options)
      .then((request) => request(this.axios, this.basePath));
  }
}
