var SubregionPieChart = function(subregion) {

  this.subregion = subregion;

  var url = 'https://restcountries.eu/rest/v1/subregion/' + subregion;
  
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
    var totalCountryData = [];

    for (i = 0; i < countries.length; i++) {
      var individualCountryData = {name: countries[i].name, y: countries[i].population}
      totalCountryData.push(individualCountryData);
      subregion = countries[0].subregion;
    }
    new PieChart('pie', 'Populations of Countries in ' + subregion, 'Population', 
    totalCountryData);
  }