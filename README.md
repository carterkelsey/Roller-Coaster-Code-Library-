# Roller Coaster Data Functions
#### These functions provide information about roller coasters around the world

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

##### The function getInversion() will determine if the roller coaster goes upside down or not and return the answer.
###### @param costerName{string}- is the name of a roller coaster
######  @return{string}- the string returned confirms if on the roller coaster "you will go upside down," if there will be "no flips on this ride," or that "this roller Coaster does not exist" if the coaster was not found
**` function getInversions(coasterName)`** 
# 

    

##### The function getRegionOldCoasters() returns a list of roller coasters that are in a specific region of the world, and were made in a chosen time frames.
###### @ param region{string}- the region (location) of a roller coaster
###### @ param MinYearOpened{number}-the earliest date (in years) the coasters can be opened
###### @return{list}- returns the names of suitable rides or returns a list containing a string saying "error no roller coasters meet your standards"
**` function getRegionOldCoasters(region, MinYearOpened)`** 
#

##### The function getCoastersInCountry() returns the name of the roller coasters in a desired country.
###### @param country{string}- country name
###### @return{list}- returns the list of roller coasters in the right location or the list containing a string stating that no matches were found; "no roller coasters found in the specified country."
**`function getCoastersInCountry(country)`** 
#


#### The function giveParkByCoaster() returns the name of the park and city that a roller coaster is in
#### @param rollerCoasterName{string}- the name of the roller coaster
#### @return{list}- returns the name of the park followed by the name of the city the roller coaster is in or returns the list with a string saying that there were no matches; "We couldn't find that roller coaster"
**`function giveParkByCoaster(rollerCoasterName)`**





#### The function giveParkByCoaster() returns a list of roller coasters that fits the desired height and speed
#### @param height{number}- the height of the roller coaster 
#### @param speed{number}- the speed of the roller coaster
#### @return{list}- returns a list of roller coasters that fits the height and speed requirements or returns the list with a string saying that there were no matches; "No Matches"
**`function getCoastersByLength(height, speed){`**





