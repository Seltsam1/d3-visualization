# d3-visualization

d3 bubble chart of census data

## Getting Started

Download folder structure. To run locally will require setting up a server via terminal

- Folder structure is as follows:
  - index.html
    - Utilizes scripts for d3, d3-tooltip, and bootstrap
    - Includes write up descpriton of visualization
  - /assets/css
    - css style sheets used for formatting (not all styles used)
  - /assets.data
    - data.csv file used for visualization
  - /assets/js (details in Features section)
    - app.js file contains the majority of code to create bubble chart     


The data for this visualization is from the 2014 ACS 1-year estimates from the US Census Bureau (https://data.census.gov/cedsci/)

## Features

- app.js
  -  Appends svg tag to html
  -  Uses d3 to read csv data
    - Data outputed to console for reference
  - Changes fields for chart to numeric
  - Uses scale functions to adjust axis based on max, min values in data
  - Appends graphic for axis, with tranform to move xaxis to bottom
  - Function to append circles, scaling based on value for poverty and healthcare
  - Appends graphic for text located on top of circles
    - Value based on abbrevated state from data
  - Adds d3 tooltip so clicking on bubbles or mouseover will bring up a box with:
    - Name of state, poverty %, and lack healthcare % 

## Licensing by:

The code in this project is licensed under MIT license.
