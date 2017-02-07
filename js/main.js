//Javescript load
//
function initialize(){
    //function call to cities()
    cities();
    //function call to debugAjax()
    debugAjax();
};
function cities(){
    //object to help cities and populations
    var cityObj = {
        "Madison":233209,
        "Milwaukee": 594833,
        "Green Bay": 104057,
        "Superior": 27244
    };
    //create a table
    var table = document.createElement("table");
    //create tr element
    var headerRow = document.createElement("tr");
    //header cell of a table
    //creates html cell and assigns the calue, adds to row
    var cityHeader = document.createElement("th");
    //<th>City</th>
    cityHeader.innerHTML = "City";
    //<tr><th>City</th></tr>
    headerRow.appendChild(cityHeader);
    //creates another header cell to table
    var popHeader = document.createElement("th");
    //<tr>Pop</tr>
    popHeader.innerHTML = "Population";
    //<th><tr>Pop</tr></th>
    headerRow.appendChild(popHeader);

    table.appendChild(headerRow);

    //creates new row for each city with city and population
    for (var cityKey in cityObj){
        //create table row element
        var tr = document.createElement("tr");
        //create cell element for city
        var city = document.createElement("td");

        city.innerHTML = cityKey;
        tr.appendChild(city);

        var pop = document.createElement("td");
        pop.innerHTML = cityObj[cityKey];
        tr.appendChild(pop);

        table.appendChild(tr);
    };
    //get mydiv element and append to it
    var mydiv = document.getElementById("mydiv");
    mydiv.appendChild(table);
    addColumns(cityObj)
};

//run script once page is loaded


//start debug here
//add a third column to the table stating if city is small medium or large

function addColumns(cityObj){
    //narray holding citys' names
    var cityArray = [
    "Madison",
    "Milwaukee",
    "Green Bay",
    "Superior"];
    //create table row element
    $('tr').each(function(i){

    	if (i == 0){
            //the header for column is City Size
    		$(this).append('<th>City Size</th>');
    	} else {

    		var citySize;
            var cityKey = cityArray[i-1]

            //cities less than 100000 will be labeled small
    		if (cityObj[cityKey] < 100000){
    			citySize = 'Small';
            //cities with population less than 500,000 but more than 100,000 will be medium
    		} else if (cityObj[cityKey] < 500000){
    			citySize = 'Medium'
            //everything else is a large city
    		} else {
    			citySize = 'Large';
    		};

    		$(this).append('<td>' + citySize + '</td>');
    	};
    });
    //call for the next function
    addEvents();
};

//when the mouse moves over the table a new color will be randomly choosen
function addEvents(){

	$('table').mouseover(function(){
        //assign color to variable rgb
		var color = "rgb(";

        //loop to assign new css color to table when mouseover
		for (var i=0; i<3; i++){
            //assign random to a randome variable between 0 and 255
			var random = Math.round(Math.random() * 255);

			color += random;
            //the else statement keeps running and only one value in rgb()
			if (i<2){
				color += ",";

			} else {
				color +=  ")";
            console.log(color)
		}};


		$(this).css('color', color);
    });
    //calls function clickme()
    clickme()

	};

	//function to add an alert when the table is clicked
    function clickme(){
        //alert when the table is clicked
		    alert('Hey, you clicked me!');
	      ;

	       $('table').on('click', clickme);

    };
//start ajax debug here
//function to open map.geojson
  function debugAjax(){
      //use ajax and jQuery to open map.geojson
    	$.ajax("data/map.geojson", {
        //datatype of file is geojson
    		dataType: "JSON",
        //if map.geojson is opened, jQueryCallback function is called
    		"success": jQueryCallback
      });
      console.log(data)
    };
    //function to write text of map.geojson
    function jQueryCallback(data){
      console.log(data)
      //assign my data to 'GeoJSON data:' with a new line break
      var mydata = '<br>GeoJSON data:</br>';
      //add the variable to the string text of map.geojson
      mydata += JSON.stringify(data);
      //appends the script to add the text to the page
      $('#mydiv').append('<p>'+mydata+'</p>')

    };
//when the page loads, all the functions run
window.onload = initialize();
