in js file
 create dynamic nav bar by javascript

frist I selected all secion by queryselectorall and use foreach in it to create the list element 
and links which go to the section when i click it and scroll to the secion

to scroll the secion when i use the link and get attribute  data-nav value from the section and store it in links 
I used addeventlistner() in the each link when i use event click scroll to the secion
by using scrollIntoView({'behavior':'smooth'});

tho create active section 
I used  intersection observer API.
 and check entry in observer if the secion in viewport add active class by using classlist
 and if the the secion is not in view port while scrolling ..remove the class list 


//the additional code write in js file to make highlight when scrolling
after use the observer to check the section is in viewport or noned, 
I want to get the active link to highlight to active section when i click it
I used attribute data-nav to get the value from links and compare by the data-nav attribute from the section
when the value of links is equal to the data-nav from the secion ...then add active class to the link 


//////////////////////////////////////////////////
in html file
I use script tag to refere to javascript file in head

///////////////////////////////////////////////////////
in css file
use media query to responsive in different machine like mobile 
and i still modified it 
