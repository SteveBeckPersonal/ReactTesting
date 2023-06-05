import * as React from "react";
import Form from "../Components/Form";
import { Table } from "../Components/Table";
import { WeatherForecast } from "../Services/Models/WeatherForecast";
import { WeatherForecastService } from "../Services/WeatherService";
import "./style.css";

export class WeatherPage extends React.Component {
  state = {
    data: [],
  };

  async componentDidMount() {
    this.setState({ data: await this.updateData() });
  }

  async updateData() {
    const service = new WeatherForecastService();
    const response = await service.getWeatherForecast();
    return response.data;
  }

  onRemove = async (row: Record<string, any>) => {
    const service = new WeatherForecastService();
    await service.deleteWeatherForecast(row.id);
    this.setState({ data: await this.updateData() });
  };

  handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const weatherForecast = new WeatherForecast();
    weatherForecast.date = new Date(formData.get("date") as string);
    weatherForecast.temperatureC = Number(formData.get("temperatureC"));
    weatherForecast.summary = formData.get("summary") as string;

    // submit the weather forecast to the server
    const service = new WeatherForecastService();
    await service.postWeatherForecast(weatherForecast);

    // update the table data
    this.setState({ data: await this.updateData() });

    // reset the form
    event.currentTarget.reset();
  };

  render() {
    const { data } = this.state;
    return (
      <>
        <div className="navbar navbar-dark">
          {<h2>Weather Forecast Page</h2>}
        </div>
        <div className="sidebar" b-ckmkgyuahj>
          {/* Sidebar content */}
        </div>
        <div className="content">
          <div className="table-container">
            {data.length > 0 ? (
              <Table
                data={data}
                onRemove={this.onRemove}
                columnsToIgnore={["id"]}
              />
            ) : (
              <div>Loading...</div>
            )}
          </div>
          <div className="form-container">
            {
              <React.Fragment>
                <h3>Add new forecast</h3>
                <Form
                  inputFields={{
                    date: "date",
                    temperatureC: "number",
                    summary: "text",
                  }}
                  handleSubmit={this.handleSubmit}
                />
              </React.Fragment>
            }
          </div>
        </div>
      </>
    );
  }
}
