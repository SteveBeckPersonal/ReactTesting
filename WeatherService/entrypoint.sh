#!/bin/bash

# Retrieve the connection string from the environment variable set in Docker Compose
CONNECTION_STRING=$ConnectionStrings__DefaultConnection

# Set the environment variable for the connection string
export ConnectionStrings__DefaultConnection="$CONNECTION_STRING"

# Start the API
dotnet WeatherService.dll
