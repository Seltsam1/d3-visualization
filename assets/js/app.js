// set size for svg element
var svgWidth = 960;
var svgHeight = 500;

// define margins to use for chart width/height
var margin = {
    top: 20,
    right: 40,
    bottom: 60,
    left: 100
};

// define height width based on margins
var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

// use d3 to select id scatter
var svg = d3.select("#scatter")
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight);

// append graphic for x-axis, with trasform to move to bottom of chart
var chartGroup = svg.append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);
  
// NOTE - use terminal to open server to view
// cd to folder structure containing files
// in terminal: python3 -m http.server 3001

// import data from csv and functions for charts
d3.csv("/assets/data/data.csv").then(function(data) {

    console.log(data)
    // Convert data into numeric for poverty and healthcare
    data.forEach(function(data) {
        data.poverty = +data.poverty;
        data.healthcase = +data.healthcare;
    });
    // create scale functions
    var xLinearScale = d3.scaleLinear()
        .domain([d3.min(data, d => d.poverty)*0.9, d3.max(data, d => d.poverty)])
        .range([0, width]);

    var yLinearScale = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.healthcare)])
        .range([height, 0]);

    // create functions for xaxis and yaxis
    var bottomAxis = d3.axisBottom(xLinearScale);
    var leftAxis = d3.axisLeft(yLinearScale);

    // append xaxis
    chartGroup.append("g")
        .attr("transform", `translate(0, ${height})`)
        .call(bottomAxis);
        
    // append yaxis
    chartGroup.append("g")
        .call(leftAxis);

})