# Roller Coaster Data Functions

# CSVColumnToArray
The function getColumn() returns a single column from a csv fie as an array- the csv is accesed through a url.
#
##### Returns a column from a csv file as a list.
###### @param url {string} - the url to the raw csv contents
###### @param columnNumber {number} - the column contents wanted as a list 
###### @return column {list} - the list containing the columns contents
**`function getColumn(url, columnNumber)`**
#

##### A helper function that returns the specified column from a 2D Array.
###### @param matrix {2D array} - the 2D array
###### @param col {number} - the desired column (the first column is 0)
###### @return column {lsit} - the desired column as a list
**`function getCol(matrix, col)`**
# 

# RollerCoasterToInversions
The function getInversion() will determine if the roller coaster goes upside down or not and return the answer.
#
###### @param costerName{string}- is the name of a roller coaster
######  @return{string}- the string returned confirms if on the roller coaster >You will go upside down< or if there will be >No flips on this ride< (success return)
###### @return{string}- the function will return >this roller Coaster does not exist< because the desired roller coaster is not found on the list (error return)
**` function getInversions(coasterName)`~** 
# 

    
# AgeAndLocationToArray
#
The function getRegionOldCoasters() returns a list of roller coasters that are in a specific region of the world, and were made in a chosen time frames.
###### @ param region{string}- the region (location) of a roller coaster
###### @ param MinYearOpened{number}-the earliest date (in years) the coasters can be opened
###### @return{string}- returns a string saying >Error no roller coasters meet your standards< (error return) 
###### @return{string[]}-names of suitable rides (success return)
**` function getRegionOldCoasters(region, MinYearOpened)`~** 
#

# Function countryToRollerCoasterNamesArray
#
The function getCoastersInCountry() returns the name of the roller coasters in a desired country.
###### @param country{string}- country name
###### @return{string}- a string stating that no matches were found; >No roller coasters found in the specified country.< (error return)
###### @return{string[]}- the list of roller coasters in the right location (success return)
**`function getCoastersInCountry(country)`~** 
#
