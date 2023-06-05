import { v4 as uuidv4 } from 'uuid';

export class WeatherForecast {
  public id: string = uuidv4();
  public date: Date = new Date();
  public temperatureC: number = 0;
  public get temperatureF(): number {
    return 32 + (this.temperatureC / 0.5556);
  }
  public summary?: string;
}