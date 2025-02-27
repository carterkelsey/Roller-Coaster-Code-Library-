var url="http://raw.githubusercontent.com/b-mcavoy/datasets/refs/heads/main/Science/Rollercoasters.csv"
/* Returns a column from a csv file (at the url above) as a list. */ 
    /* Returns a column from a csv file (at the url above) as a list. */ 
    function getColumn(url, columnNumber){
        var column = [];
        var table = [];
        var request = new XMLHttpRequest();  
        request.open("GET", url, false);   
        request.send(null);  
        var csvData = new Array();
        var jsonObject = request.responseText.split(/\r?\n|\r/);
        for (var i = 0; i < jsonObject.length; i++) {
          csvData.push(jsonObject[i].split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/));
        }
        table = csvData;
        column = getCol(table, columnNumber);
        return column;
      }
      
      /* returns the specified column from a 2D Array */ 
      function getCol(matrix, col){
             var column = [];
             for(var i=1; i<matrix.length-1; i++){
                column.push(matrix[i][col]);
             }
             return column;
          }
  
    /*variabes saved from dataset using the getColumn Function which finds the column in the dataset (based on the url) and assigns that set of values to the variable  */
      var rollerCoasterNames = getColumn(url,1);
      var amusementParkNames = getColumn(url,2);
      var cityNames = getColumn(url,3);
      var countryNames = getColumn(url,4);
      var regionNames = getColumn(url,5);
      var materials = getColumn(url,6);
      var heights = getColumn(url,7);
      var speeds = getColumn(url,8);
      var lengths = getColumn(url,9);
      var inversions = getColumn(url,10);
      var numIversions = getColumn(url,11);
      var yearOpened = getColumn(url,12);






/* a function that will determine if the roller coaster goes upside down or not and return the answer 
@param coasterName {string}- is the name of a roller coaster 
@return{string} the desired roller coaster 
*/
function getInversions(coasterName){
    // the loop inside of the function starts at zero and runs until the length of the list has been traversed, and incriments by 1
    for (var i=0; i< rollerCoasterNames.length; i++){
        /* conditional statement: if the user input roller coaster name matches that of the one on the list*/
        if(coasterName.toLowerCase() == rollerCoasterNames[i].toLowerCase())
            /*  and if at the location of the matching roller coaster there are inversions */
             if(inversions[i]== "Yes"){
                /* @return{string} this statement confirming the roller coaster has "loops" or "flips" */
                return "You will go upside down.";
                /* @return{string} this statement states the roller coaster the roller coaster does not have inversions   */
            } else{
                return "No flips on this ride!";
        }
    
     }
   /* string that will return if there are no matches for coaster names */
    return "this roller Coaster does not exist";
    
    }
    /* calling the function*/ 
    console.log(getInversions("Medusa"));    
    
/* a function that returns a list of roller coasters that are in a specific region of the world, and were made in a chosen time frames
@ param region {string}-the region(location) 
@param MinYearOpened {number}- earliest value the coasters can be opened
@return{list} names of suitable rides or the statement saying there were no matches
*/
function getRegionOldCoasters(region, MinYearOpened){
    
    /* empty array created that the valid list of roller coasters will get pushed to*/
    var goodSafeRides=[]
    /* the loop inside of the function starts at zero and runs until the length of the list has been traversed, and incriments by 1*/
    for ( var i=0; i< rollerCoasterNames.length; i++){
        /* if the user input region matches one on in the list and the ride has been opened after the oldest "allowed date"*/
        if(region.toLowerCase()== regionNames[i].toLowerCase() && MinYearOpened<= yearOpened[i]){
            
            /* than that ride is now considered an option and gets pushed to our list */
            goodSafeRides.push(rollerCoasterNames[i])
             
            }         
     }
    /* if no roller coasters meet the standards... */
     if(goodSafeRides.length==0){
            /* push a  statement saying no matches were found to the list*/
            goodSafeRides.push("Error no Roller Coasters meet your standards")
        }
        /*@return{list}names of suitable rides or the statement saying there were no matches */
        return goodSafeRides;
    }
 /*calling the function*/
console.log(getRegionOldCoasters("North", 122222222))


/* a function that returns the name of the roller coasters in a desired country
@param country {string} country name
@return{list} the list of coasters in the right location
*/
function getCoastersInCountry(country){
   /* creating an empty array that the roller coasters in the right location will get pushed to and later returned */
    var rightLocationCoasters=[];
/* conditional that adds roubustness, making it so that the United States can be refered to as all of the countries common names- "the Unite States of America", or "The United States" */
if(country=="United States of America" || country=="United States"){
        country="USA"
    }
    /*  the loop inside of the function starts at zero and runs until the length of the list has been traversed, and incriments by 1*/
    for ( var i=0; i< rollerCoasterNames.length; i++){
       /*  if the user input country matches the country of each index*/
        if(country.toLowerCase()==countryNames[i].toLowerCase()){
    /* then push the name of the roller coaster from the corresponding index to the newly created empty list */
    rightLocationCoasters.push(rollerCoasterNames[i]);
        }
    

    }
    /* if the list of roller coasters in the acceptable location is non existant*/
    if (rightLocationCoasters.length === 0) {
        /*  push a string stating that no matches were found to the empty list */
        rightLocationCoasters.push("No roller coasters found in the specified country.");
    }
    /* @return{list}the list of coasters in the right location*/
    return rightLocationCoasters
}

/* calling the function */ 
console.log(getCoastersInCountry("United States of America"));


var ids = getColumn(url,0);
var rollerCoasterNames = getColumn(url,1);
var parkNames = getColumn(url, 2);
var cities = getColumn(url, 3);
var countries = getColumn(url,4);
var regions = getColumn(url,5);
var constructionMaterials = getColumn(url, 6);
var heights = getColumn(url, 7);
var speeds = getColumn(url,8);
var lengths = getColumn(url,9);
var numberOfInversions = getColumn(url, 10);
var openedYears = getColumn(url, 11);

// this function takes one parameter, the roller coaster name, and reutrns the park name and city that that roller coaster is in
function giveParkByCoaster(rollerCoasterName){
    for (var i=0; i < countries.length; i++){// starts a loop 
    if(rollerCoasterNames[i].toLowerCase()== rollerCoasterName.toLowerCase()){
    // the above code sets everything in the roller coaster names to lowercase and sees if the roller coaster names are equal
        return parkNames[i] + ", " + cities[i]// if one of the above conditions is true then it will execute this code
   }
  }  
        //  if the loop runs and nothing is found return this 
        return "We couldn't find that roller coaster"
 
}
console.log(giveParkByCoaster("Ronde des Rondins"));





// this function will take two variables height and speed, and then return the roller coaster or costers that are that height and speed 
function getCoastersByLength(height, speed){
    //  height in meters, speed in miles per hour
    var speedAndHeightCoasters = []// sets the variable to a list
    for (var i=0; i < countries.length; i++){// creates a loop
        
        if(Math.round(speeds[i]) == Math.round(speed) && Math.round(heights[i])== Math.round(height)){// says if the rounded version of the entered speed and height equal the rounded speed and height in the dataset
            speedAndHeightCoasters.push(rollerCoasterNames[i])// then add it to the list
        }
          
        
    }
    if(speedAndHeightCoasters.length==0){// if there is nothing on the list
        speedAndHeightCoasters.push( "No Matches")// then push "No Matches" to the empty list
    }
    return speedAndHeightCoasters

    }
console.log(getCoastersByLength(3, 16));   

