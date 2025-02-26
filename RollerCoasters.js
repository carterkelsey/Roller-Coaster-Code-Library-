var url="http://raw.githubusercontent.com/b-mcavoy/datasets/refs/heads/main/Science/Rollercoasters.csv"
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
  
  /* @returns the specified column from a 2D Array */ 
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
@param {string}- is the name of a roller coaster*/ 
function getInversions(coasterName){
    // the loop inside of the function starts at zero and runs until the length of the list has been traversed, and incriments by 1
    for (var i=0; i< rollerCoasterNames.length; i++){
        /* conditional statement: if the user input roller coaster name matches that of the one on the list*/
        if(coasterName.toLowerCase() == rollerCoasterNames[i].toLowerCase())
            /*  and if at the location of the matching roller coaster there are inversions */
             if(inversions[i]== "Yes"){
                /* @return{string} this statement confirming the roller coaster has "loops" or "flips" */
                return "You will go upside down.";
                /* @return{string} this statement states the roller coasterthe roller coaster does not have inversions   */
            } else{
                return "No flips on this ride!";
        }
    
     }
    /* @return{string} this error statement states the desired roller coaster is not found on the list  */
    return "this roller Coaster does not exist";
    
    }
    /* calling the function*/ 
    console.log(getInversions("Medusa"));    
    
/* a function that returns a list of roller coasters that are in a specific region of the world, and were made in a chosen time frames*/
/* @ param{string, number} the region(location) and MinYearOpened(earliest value the coasters can be opened)*/
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
            /*  @return{string}  with an error statement*/
            return "Error no Roller Coasters meet your standards"
        }
        /*@return{string[]}names of suitable rides or the error statement  */
        return goodSafeRides;
    }
 /*calling the function*/
console.log(getRegionOldCoasters("North America", 2000))


/* a function that returns the name of the roller coasters in a desired country
@param{string} country name*/
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
        /* @return{string} an error no matches were found statement*/
        return "No roller coasters found in the specified country.";
    }
    /* @return{string[]}the list of coasters in the right location*/
    return rightLocationCoasters
}
/* calling the function */ 
console.log(getCoastersInCountry("United States of America"))
