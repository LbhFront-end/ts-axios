import { AxiosRequestConfig, AxiosPromise } from '../types'
import { buildURL } from './../helpers/url'

// export default function dispatchRequest(config: AxiosRequestConfig): AxiosPromise {

// }

// function processConfig(config: AxiosRequestConfig): void {

// }

function transformURL(config: AxiosRequestConfig): string {
  const { url, params } = config
  return buildURL(url, params)
}
