window.onload = function() {

var url = 'https://restcountries.eu/rest/v1/subregion/polynesia';
makeRequest(url, requestComplete);
}

var makeRequest = function(url, callback) {
  var request = new XMLHttpRequest();
  request.open('GET', url);
  request.onload = callback;
  request.send();
}

var requestComplete = function() {
  console.log('success');
  if (this.status != 200) return;
  var jsonString = this.responseText;
  countries = JSON.parse(jsonString);
  populateList(countries)
}

var populateList = function(countries) {
var totalCountryData = []
  for (i = 0; i < countries.length; i++) {
    var individualCountryData = {name: countries[i].name, y: countries[i].population}
    totalCountryData.push(individualCountryData);
  }
  new PieChart('pie', 'Populations of Countries in Polynesia', 'Population', 
    totalCountryData);
}