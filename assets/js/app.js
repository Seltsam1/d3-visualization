// set size for svg element
var svgWidth = 960;
var svgHeight = 500;

// define margins to use for chart width/height
var margin = {
    top: 20,
    right: 40,
    bottom: 60,
    let: 100
};

// define height width based on margins
var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.left;

// use d3 to select id scatter
