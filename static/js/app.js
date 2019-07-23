// from data.js
var tableData = data;
var tbody = d3.select("tbody");
var row = tbody.append("tr");
var filteredData = []
 
// YOUR CODE HERE!
tableData.forEach((data) => {
  var row = tbody.append("tr");
    Object.entries(data).forEach(([key,value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
    console.log(data);
});

var submit = d3.select("#filter-btn");

function myFunction() {
    d3.event.preventDefault();
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    filteredData = tableData.filter(tableData => tableData.datetime === inputValue)
    tbody.text("")
    filteredData.forEach((data) => {
    var row = tbody.append("tr");
    Object.entries(data).forEach(([key,value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
    console.log(data);
})
};

submit.on("click", myFunction)
