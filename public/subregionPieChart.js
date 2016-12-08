var SubregionPieChart = function(subregion) {

  this.subregion = subregion;

  var url = 'https://restcountries.eu/rest/v1/subregion/' + subregion;
  
  this.makeRequest(url, this.requestComplete);
}

  SubregionPieChart.prototype = {

    makeRequest: function(url, callback) {
      var request = new XMLHttpRequest();
      request.open('GET', url);
      request.onload = callback;
      request.send();
    },

    requestComplete: function() {
      if (this.status != 200) return;
      console.log('success');
      var jsonString = this.responseText;
      countries = JSON.parse(jsonString);
      this.populateList(countries);
    },

    populateList: function(countries) {
      var totalCountryData = [];
      console.log(this);
      for (i = 0; i < countries.length; i++) {
        var individualCountryData = {name: countries[i].name, y: countries[i].population}
        totalCountryData.push(individualCountryData);
      }
      new PieChart('pie', 'Populations of Countries in ' + this.subregion, 'Population', 
      totalCountryData);
    }
}