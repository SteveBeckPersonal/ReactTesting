import axios, { AxiosResponse } from "axios";
import { WeatherForecast } from "./Models/WeatherForecast";
import Config from "../config";

export class WeatherForecastService {
  private baseUrl = `${Config.weatherService}/WeatherForecast`;

  public async getWeatherForecast(): Promise<AxiosResponse> {
    return axios.get(`${this.baseUrl}`);
  }

  public async postWeatherForecast(
    data: WeatherForecast
  ): Promise<AxiosResponse> {
    return axios.post(`${this.baseUrl}`, data);
  }

  public async deleteWeatherForecast(id: number): Promise<AxiosResponse> {
    return axios.delete(`${this.baseUrl}/${id}`);
  }
}
